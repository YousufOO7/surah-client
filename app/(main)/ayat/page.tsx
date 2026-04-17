/* eslint-disable @typescript-eslint/no-explicit-any */

import { Suspense } from "react";
import Ayats from "@/app/components/main/pages/ayat/Ayats";
import { getAllSurahs } from "@/app/lib/surahAyats";

export const dynamic = 'force-static';
export const revalidate = false;

function AyatsLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-amber-300 font-medium tracking-widest animate-pulse">
          Loading Ayahs...
        </p>
      </div>
    </div>
  );
}

async function AyatsContent() {
  const data = await getAllSurahs();
  const allSurahs = Object.values(data.chapters || {}) as any[];
  return <Ayats allSurahsData={allSurahs} initialPage={1} />;
}

export default async function AyatsPage() {
  return (
    <Suspense fallback={<AyatsLoading />}>
      <AyatsContent />
    </Suspense>
  );
}