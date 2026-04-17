/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import Pagination from "@/app/utils/common/Pagination";
import { SurahData } from "@/app/lib/surahAyats";

interface AyatsProps {
  surahData: SurahData;
  initialPage?: number;
}

const Ayats = ({ surahData, initialPage = 1 }: AyatsProps) => {
  const [page, setPage] = useState(initialPage);
  const ayatsPerPage = 10;

  const verses = Object.values(surahData?.verses || {});
  const totalVerses = verses?.length;
  const lastPage = Math.ceil(totalVerses / ayatsPerPage);

  // Get current page verses
  const startIndex = (page - 1) * ayatsPerPage;
  const endIndex = startIndex + ayatsPerPage;
  const currentVerses = verses?.slice(startIndex, endIndex);

  // const settings = JSON.parse(localStorage.getItem("quranSettings") || "{}");
  const [settings, setSettings] = useState<any>({});

useEffect(() => {
  const data = JSON.parse(localStorage.getItem("quranSettings") || "{}");
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setSettings(data);
}, []);

  return (
    <div className="container mx-auto space-y-8 pt-8 px-4">
      {/* Surah Header */}
      <div className="relative mb-16 overflow-hidden rounded-3xl bg-linear-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-amber-400/30 shadow-2xl">
        {/* Subtle Islamic pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.8px,transparent_1px)] bg-size-[30px_30px] opacity-5 pointer-events-none" />

        <div className="relative px-8 py-12 text-center">
          {/* Surah Number Circle */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-400/10 border border-amber-400/40 shadow-inner text-5xl font-bold text-amber-300 ring-1 ring-offset-4 ring-offset-zinc-950 ring-amber-400/20">
            {surahData.id}
          </div>

          {/* Arabic Surah Name */}
          <h1 className="mb-4 text-6xl md:text-7xl font-bold font-arabic text-white tracking-[0.5px] leading-none drop-shadow-md">
            {surahData.surah_name_ar}
          </h1>

          {/* English Name */}
          <h2 className="mb-3 text-3xl font-semibold text-amber-200">
            {surahData.surah_name}
          </h2>

          {/* Translation */}
          <p className="mx-auto max-w-md text-lg text-zinc-400">
            {surahData.translation}
          </p>

          {/* Meta Info */}
          <div className="mt-8 flex items-center justify-center gap-x-8 text-sm">
            <div className="flex items-center gap-2 rounded-full bg-emerald-900/30 px-5 py-2 text-emerald-300 border border-emerald-400/30">
              <span className="uppercase tracking-[1px] text-xs font-medium">
                {surahData.type}
              </span>
            </div>
            <div className="h-3 w-px bg-zinc-700" />
            <div className="text-zinc-400">{surahData.total_verses} Ayahs</div>
          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="h-1 bg-linear-to-r from-transparent via-amber-400/60 to-transparent" />
      </div>

      {/* Verses Count Info */}
      <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-800">
        <div className="text-sm text-zinc-500">
          Showing {startIndex + 1} - {Math.min(endIndex, totalVerses)} of{" "}
          {totalVerses} Ayahs
        </div>
        <div className="text-sm text-amber-400/70">
          Page {page} of {lastPage}
        </div>
      </div>

      {/* Verses List */}
      <div className="space-y-6 mb-4 md:mb-10">
        {currentVerses?.map((verse: any, index: number) => {
          const verseNumber = startIndex + index + 1;
          return (
            <div
              key={verse.id}
              id={`verse-${verseNumber}`}
              className="group bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5"
            >
              {/* Verse Number */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 border border-amber-400/30 text-lg font-semibold text-amber-300 shadow-inner transition-colors group-hover:bg-amber-400/10">
                  {verseNumber}
                </div>
                <div className="text-xs text-zinc-600">Verse {verseNumber}</div>
              </div>

              {/* Arabic Text */}
              {/* <div className="text-right mb-5">
                <p className="text-2xl md:text-3xl font-arabic leading-loose text-white tracking-wide">
                  {verse.content}
                </p>
              </div> */}
              <div
                className={`${settings.arabicFont} text-right text-white`}
                style={{ fontSize: `${settings.arabicSize}px` }}
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
              {/* <div className="pt-2">
                <p className="text-zinc-300 leading-relaxed text-justify">
                  {verse.translation_eng}
                </p>
              </div> */}
              <div
                style={{ fontSize: `${settings.translationSize}px` }}
                className="text-zinc-300"
              >
                {verse.translation_eng}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
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
