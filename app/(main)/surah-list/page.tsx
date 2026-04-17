/* eslint-disable @typescript-eslint/no-explicit-any */

import { Suspense } from "react";
import SurahList from "@/app/components/main/pages/surah-list/SurahList";
import { getAllSurahs } from "@/app/lib/surahAyats";

export const dynamic = 'force-static';
export const revalidate = false;

function SurahsLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-amber-300 font-medium tracking-widest animate-pulse">
          Loading Surahs...
        </p>
      </div>
    </div>
  );
}

export default async function SurahsPage() {
  const dataPromise = getAllSurahs();
  
  return (
    <Suspense fallback={<SurahsLoading />}>
      <SurahListWithData dataPromise={dataPromise} />
    </Suspense>
  );
}

// Separate component to handle the async data
async function SurahListWithData({ dataPromise }: { dataPromise: Promise<any> }) {
  const data = await dataPromise;
  return <SurahList initialData={data} />;
}