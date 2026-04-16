/* eslint-disable @typescript-eslint/no-explicit-any */
// app/components/main/pages/ayat/Ayats.tsx
"use client";
import { useGetAllSurahsListQuery } from "@/app/redux/features/surahs/surahsApi";
import Pagination from "@/app/utils/common/Pagination";
import { useState } from "react";

interface AyatsProps {
  surahId: string;
}

const Ayats = ({ surahId }: AyatsProps) => {
     const [page, setPage] = useState(1);
  const ayatsPerPage = 10;
  const { data, isLoading, error } = useGetAllSurahsListQuery({});

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-zinc-950">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-amber-300 font-medium tracking-widest">
            Loading Ayahs...
          </p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-center py-20 text-red-400 text-lg">
        Failed to load Surah
      </div>
    );
  }

  const allSurahs = Object.values(data[0]?.chapters || {}) as any[];
  const surah = allSurahs.find((s) => s.id.toString() === surahId);

  if (!surah) return <div className="text-center py-20">Surah not found</div>;

  const verses = Object.values(surah.verses || {});
  console.log("Verses:", verses);
    const totalVerses = verses?.length;
  const lastPage = Math.ceil(totalVerses / ayatsPerPage);
  
  // Get current page verses
  const startIndex = (page - 1) * ayatsPerPage;
  const endIndex = startIndex + ayatsPerPage;
  const currentVerses = verses?.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto space-y-8 pt-8">
      <div className="relative mb-16 overflow-hidden rounded-3xl bg-linear-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-amber-400/30 shadow-2xl">
        {/* Subtle Islamic pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.8px,transparent_1px)] bg-size-[30px_30px] opacity-5 pointer-events-none" />

        <div className="relative px-8 py-12 text-center">
          {/* Surah Number Circle */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-400/10 border border-amber-400/40 shadow-inner text-5xl font-bold text-amber-300 ring-1 ring-offset-4 ring-offset-zinc-950 ring-amber-400/20">
            {surah.id}
          </div>

          {/* Arabic Surah Name */}
          <h1 className="mb-4 text-6xl md:text-7xl font-bold font-arabic text-white tracking-[0.5px] leading-none drop-shadow-md">
            {surah.surah_name_ar}
          </h1>

          {/* English Name */}
          <h2 className="mb-3 text-3xl font-semibold text-amber-200">
            {surah.surah_name}
          </h2>

          {/* Translation */}
          <p className="mx-auto max-w-md text-lg text-zinc-400">
            {surah.translation}
          </p>

          {/* Meta Info */}
          <div className="mt-8 flex items-center justify-center gap-x-8 text-sm">
            <div className="flex items-center gap-2 rounded-full bg-emerald-900/30 px-5 py-2 text-emerald-300 border border-emerald-400/30">
              <span className="uppercase tracking-[1px] text-xs font-medium">
                {surah.type}
              </span>
            </div>
            <div className="h-3 w-px bg-zinc-700" />
            <div className="text-zinc-400">{surah.total_verses} Ayahs</div>
          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="h-1 bg-linear-to-r from-transparent via-amber-400/60 to-transparent" />
      </div>
      {currentVerses?.map((verse: any, index: number) => {
        const verseNumber = verse.id || index + 1;
        return (
          <div
            key={verse.id}
            className="bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800"
          >
            {/* Verse content here */}
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800 border border-amber-400/30 text-xl font-semibold text-amber-300 shadow-inner transition-colors group-hover:bg-amber-400/10">
              {verseNumber}
            </div>
            <div className="text-right mb-4">
              <p className="text-2xl md:text-3xl font-arabic leading-loose text-white">
                {verse.content}
              </p>
            </div>
            <div>
              <p className="text-zinc-300">{verse.translation_eng}</p>
            </div>
          </div>
        );
      })}

      {lastPage > 1 && (
        <div className="mt-12 pt-6 border-t border-zinc-800">
          <Pagination
            currentPage={page}
            lastPage={lastPage}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default Ayats;
