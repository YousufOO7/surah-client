/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import Pagination from "@/app/utils/common/Pagination";
import { SurahData } from "@/app/lib/surahAyats";
import { appConfiguration } from "@/app/utils/constant/appConfiguration";
import SearchBar from "../surah-list/SearchBar";
import { FlattenedVerse } from "@/app/types/flattenVerse";
import { SearchResponse } from "@/app/types/searchVerse";

interface AyatsProps {
  allSurahsData: SurahData[];
  initialPage?: number;
}




const Ayats = ({ allSurahsData, initialPage = 1 }: AyatsProps) => {
  const [page, setPage] = useState(initialPage);
  const [settings, setSettings] = useState<any>({});
  const versesPerPage = 20;
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<FlattenedVerse[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  
  // Flatten all verses from all surahs
  const [allVerses, setAllVerses] = useState<FlattenedVerse[]>([]);
  const [, setTotalVerses] = useState(0);
  
  useEffect(() => {
    const flattened: FlattenedVerse[] = [];
    
    allSurahsData.forEach((surah) => {
      const verses = Object.values(surah.verses || {});
      verses.forEach((verse: any, idx: number) => {
        flattened.push({
          id: `${surah.id}-${idx + 1}`,
          verseNumber: idx + 1,
          surahId: surah.id,
          surahName: surah.surah_name,
          surahNameAr: surah.surah_name_ar,
          content: verse.content,
          translation_eng: verse.translation_eng,
          transliteration: verse.transliteration || "",
          surahType: surah.type,
        });
      });
    });
    
    setAllVerses(flattened);
    setTotalVerses(flattened.length);
  }, [allSurahsData]);
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("quranSettings") || "{}");
    setSettings(data);
  }, []);
  
  const uniqueSurahs = Array.from(new Map(allVerses.map(v => [v.surahId, {
    id: v.surahId,
    name: v.surahName,
    nameAr: v.surahNameAr
  }])).values());
  
  const [selectedSurah, setSelectedSurah] = useState<number | "all">("all");
  
  // Determine which data to display (search results or all verses)
  const displayData = isSearching ? searchResults : allVerses;
  
  // Apply surah filter on display data
  const filteredVerses = selectedSurah === "all" 
    ? displayData 
    : displayData.filter(v => v.surahId === selectedSurah);
  
  const filteredTotal = filteredVerses.length;
  const filteredLastPage = Math.ceil(filteredTotal / versesPerPage);
  const filteredStartIndex = (page - 1) * versesPerPage;
  const filteredEndIndex = filteredStartIndex + versesPerPage;
  const filteredCurrentVerses = filteredVerses.slice(filteredStartIndex, filteredEndIndex);
  
  const displayVerses = filteredCurrentVerses;
  const displayTotal = filteredTotal;
  const displayLastPage = filteredLastPage;
  const displayStartIndex = filteredStartIndex;
  const displayEndIndex = filteredEndIndex;
  
  // Reset page when filter changes
  const handleSurahChange = (surahId: number | "all") => {
    setSelectedSurah(surahId);
    setPage(1);
  };

  // Search function
  const handleSearch = async (query: string) => {
    try {
      if (!query.trim()) {
        // Reset to normal view
        setIsSearching(false);
        setSelectedSurah("all");
        setPage(1);
        setSearchResults([]);
        return;
      }
  
      setIsSearching(true);
      setSearchLoading(true);
  
      const res = await fetch(
        `${appConfiguration.baseUrl}search-verses?query=${encodeURIComponent(query)}`
      );
  
      const result: SearchResponse = await res.json();
      
      console.log("Search result:", result); // Debug log
      
      // Transform search results to match FlattenedVerse structure
      const transformedResults: FlattenedVerse[] = [];
      
      if (result && result.chapters) {
        // Loop through each chapter in the response
        Object.keys(result.chapters).forEach((surahKey) => {
          const surah = result.chapters[parseInt(surahKey)];
          
          // Loop through each verse in the surah
          Object.keys(surah.verses).forEach((verseKey) => {
            const verse = surah.verses[verseKey];
            const verseNumber = parseInt(verseKey);
            
            transformedResults.push({
              id: `${surah.id}-${verseNumber}`,
              verseNumber: verseNumber,
              surahId: surah.id,
              surahName: surah.surah_name,
              surahNameAr: surah.surah_name_ar,
              content: verse.content,
              translation_eng: verse.translation_eng,
              transliteration: verse.transliteration || "",
              surahType: surah.type,
            });
          });
        });
      }
      
      console.log("Transformed results:", transformedResults); // Debug log
      
      setSearchResults(transformedResults);
      setSelectedSurah("all");
      setPage(1);
      
    } catch (error) {
      console.error("Search error:", error);
      setIsSearching(false);
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  };
  
  // Reset function
  const handleReset = () => {
    setIsSearching(false);
    setSelectedSurah("all");
    setPage(1);
    setSearchResults([]);
  };
  
  return (
    <div className="container mx-auto space-y-8 pt-8 px-4">
      {/* Header */}
      <div className="relative mb-8 overflow-hidden rounded-3xl bg-linear-to-br from-emerald-900/20 via-zinc-900 to-zinc-950 border border-amber-400 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_0.8px,transparent_1px)] bg-size-[30px_30px] opacity-5 pointer-events-none" />
        
        <div className="relative px-8 py-12 text-center">
          <h1 className="mb-4 text-5xl md:text-6xl font-bold text-white">
            {isSearching ? "Search Results" : "All Ayahs"}
          </h1>
          <p className="text-lg text-amber-300 max-w-2xl mx-auto">
            {isSearching 
              ? searchLoading 
                ? "Searching..." 
                : `Found ${displayTotal} verses matching your search`
              : "Complete collection of all verses from the Holy Quran"}
          </p>
          
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <div className="rounded-full bg-amber-900 px-5 py-2 text-amber-300 border border-amber-400">
              {displayTotal.toLocaleString()} Ayahs
            </div>
            <div className="rounded-full bg-zinc-800/50 px-5 py-2 text-zinc-300 border border-zinc-700">
              {isSearching ? "Search Mode" : `${allSurahsData.length} Surahs`}
            </div>
            {isSearching && (
              <button
                onClick={handleReset}
                className="rounded-full bg-amber-900/30 px-5 py-2 text-amber-300 border border-amber-400 hover:bg-amber-900/50 transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>
        
        <div className="h-1 bg-linear-to-r from-transparent via-amber-400/60 to-transparent" />
      </div>

      {/* Search Bar */}
      <div className="mt-6 px-4">
        <SearchBar onSearch={handleSearch} onReset={handleReset} />
      </div>
      
      {/* Filter Section - Only show when not searching */}
      {!isSearching && (
        <div className="bg-zinc-900/30 rounded-2xl p-4 border border-zinc-800">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <label className="text-sm font-medium text-zinc-400">Filter by Surah:</label>
            <select
              value={selectedSurah}
              onChange={(e) => handleSurahChange(e.target.value === "all" ? "all" : Number(e.target.value))}
              className="bg-zinc-800 border border-zinc-700 text-white text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 p-2.5"
            >
              <option value="all">All Surahs ({displayTotal} verses)</option>
              {uniqueSurahs.map((surah) => {
                const verseCount = displayData.filter(v => v.surahId === surah.id).length;
                if (verseCount > 0) {
                  return (
                    <option key={surah.id} value={surah.id}>
                      {surah.id}. {surah.name} - {verseCount} verses
                    </option>
                  );
                }
                return null;
              })}
            </select>
          </div>
        </div>
      )}
      
      {/* Loading State */}
      {searchLoading && (
        <div className="text-center py-20">
          <div className="w-16 h-16 border-4 border-amber-400rder-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-amber-300">Searching for verses...</p>
        </div>
      )}
      
      {/* Verses Count Info */}
      {!searchLoading && displayTotal > 0 && (
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-800">
          <div className="text-sm text-zinc-500">
            Showing {displayStartIndex + 1} - {Math.min(displayEndIndex, displayTotal)} of{" "}
            {displayTotal} Ayahs
          </div>
          <div className="text-sm text-amber-400/70">
            Page {page} of {displayLastPage}
          </div>
        </div>
      )}
      
      {/* No Results Message */}
      {!searchLoading && isSearching && displayVerses.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold text-white mb-2">No results found</h3>
          <p className="text-zinc-400">Try searching with different keywords</p>
          <button
            onClick={handleReset}
            className="mt-6 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
          >
            Browse All Ayahs
          </button>
        </div>
      )}
      
      {/* Verses List */}
      {!searchLoading && (
        <div className="space-y-6 mb-4 md:mb-10">
          {displayVerses.map((verse, idx) => {
            const globalIndex = displayStartIndex + idx + 1;
            return (
              <div
                key={verse.id}
                id={`verse-${globalIndex}`}
                className="group bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
              >
                {/* Verse Header with Surah Info */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800 flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 border border-amber-400 text-lg font-semibold text-amber-300 shadow-inner">
                      {verse.verseNumber}
                    </div>
                    <div className="h-6 w-px bg-zinc-700" />
                    <div>
                      <div className="text-sm font-medium text-amber-400">
                        Surah {verse.surahId}
                      </div>
                      <div className="text-xs text-white">
                        {verse.surahName}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      verse.surahType === "meccan" 
                        ? "bg-purple-900/30 text-purple-300 border border-purple-400/30"
                        : "bg-emerald-900/30 text-emerald-300 border border-amber-400"
                    }`}>
                      {verse.surahType}
                    </span>
                    <div className="text-xs text-zinc-600">Ayah {verse.verseNumber}</div>
                  </div>
                </div>
                
                {/* Surah Name in Arabic */}
                {verse.surahNameAr && (
                  <div className="text-right mb-3">
                    <span className="text-sm text-amber-400/60 font-arabic">
                      {verse.surahNameAr}
                    </span>
                  </div>
                )}
                
                {/* Arabic Text */}
                <div
                  className={`text-right text-white mb-4 ${settings.arabicFont || ""}`}
                  style={{ fontSize: `${settings.arabicSize || 24}px` }}
                >
                  {verse.content}
                </div>
                
                {/* Transliteration */}
                {verse.transliteration && (
                  <div className="mb-4 p-3 bg-zinc-800/30 rounded-lg">
                    <p className="text-white italic text-sm font-mono">
                      {verse.transliteration}
                    </p>
                  </div>
                )}
                
                {/* English Translation */}
                {verse.translation_eng && (
                  <div
                    style={{ fontSize: `${settings.translationSize || 16}px` }}
                    className="text-zinc-300 leading-relaxed"
                  >
                    {verse.translation_eng}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      
      {/* Pagination */}
      {!searchLoading && displayLastPage > 1 && displayVerses.length > 0 && (
        <div className="mt-12 pt-6 border-t border-zinc-800">
          <Pagination
            currentPage={page}
            lastPage={displayLastPage}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default Ayats;