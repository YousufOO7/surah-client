"use client";
import { useGetAllSurahsListQuery } from "@/app/redux/features/surahs/surahsApi";
import { Surah } from "@/app/types/surah";
import Pagination from "@/app/utils/common/Pagination";
import Link from "next/link";
import { useState } from "react";

const SurahList = () => {
  const [page, setPage] = useState(1);
  const perPage = 12;
  const { data, isLoading, error } = useGetAllSurahsListQuery({
    page,
    per_page: perPage,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="text-amber-500 text-2xl font-semibold animate-pulse">
          Loading Surahs...
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-red-400">
        Failed to load Surahs. Please try again.
      </div>
    );
  }

  const allSurahs = Object.values(data[0]?.chapters || {}) as Surah[];

  const totalSurahs = allSurahs?.length;
  const lastPage = Math.ceil(totalSurahs / perPage);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentSurahs = allSurahs.slice(startIndex, endIndex);


  return (
    <div className="min-h-screen bg-zinc-950 text-white pb-12">
      {/* Page Header */}
      <div className="bg-linear-to-b from-zinc-900 to-zinc-950 py-10 border-b border-amber-500/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-3">
            القرآن الكريم
          </h1>
          <p className="text-xl text-zinc-400">The Noble Quran</p>
          <p className="mt-4 text-zinc-500">
            {data.total_surahs} Surahs • {data.total_verses} Verses
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {currentSurahs.map((surah) => (
            <Link
              key={surah.id}
              href={`/surah/${surah.id}`}
              className="group bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                {/* Surah Number */}
                <div className="w-12 h-12 flex items-center justify-center bg-zinc-800 group-hover:bg-amber-500/10 border border-zinc-700 group-hover:border-amber-500 rounded-xl text-2xl font-semibold text-amber-400 transition-colors">
                  {surah.id}
                </div>

                {/* Revelation Type */}
                <div
                  className={`px-4 py-1 text-xs font-medium rounded-full uppercase tracking-widest
                  ${
                    surah.type === "meccan"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                      : "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                  }`}
                >
                  {surah.type}
                </div>
              </div>

              {/* Arabic Name */}
              <div className="text-3xl font-bold text-right text-white mb-2 font-arabic leading-tight">
                {surah.surah_name_ar}
              </div>

              {/* English Name */}
              <div className="text-lg font-semibold text-amber-100 mb-1">
                {surah.surah_name}
              </div>

              {/* Translation / Meaning */}
              <div className="text-sm text-zinc-400 mb-auto">
                {surah.translation}
              </div>

              {/* Verses Count */}
              <div className="mt-6 pt-4 border-t border-zinc-700 text-xs flex justify-between items-center text-zinc-500">
                <span>{surah.total_verses} Verses</span>
                <span className="text-amber-500 group-hover:text-amber-400 transition-colors">
                  → Read Surah
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* PAGINATION */}
      {lastPage > 1 && (
        <Pagination
          currentPage={page}
          lastPage={lastPage}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default SurahList;
