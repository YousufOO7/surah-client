import { Metadata } from "next";
import { notFound } from "next/navigation";
import Ayats from "@/app/components/main/pages/ayat/Ayats";
import { getSurahAyatById } from "@/app/lib/surahAyats";

export const dynamic = 'force-static';

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ page?: string }>;
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await paramsPromise;

  if (!id) {
    notFound();
  }

  const surah = await getSurahAyatById(id);

  if (!surah) {
    notFound();
  }

  return {
    title: `${surah.surah_name} (${surah.surah_name_ar}) | Quran`,
    description: surah.description || `Read Surah ${surah.surah_name} - ${surah.translation} with Arabic text, transliteration, and English translation.`,
    openGraph: {
      title: `${surah.surah_name} (${surah.surah_name_ar}) | Quran`,
      description: surah.description || `Read Surah ${surah.surah_name} - ${surah.translation}`,
      type: "website",
    },
    metadataBase: new URL("https://yourdomain.com"),
    alternates: {
      canonical: `/surah/${id}`,
    },
  };
}

export default async function SurahAyatsPage({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: PageProps) {
  const { id } = await paramsPromise;
  const searchParams = searchParamsPromise ? await searchParamsPromise : {};
  const page = searchParams?.page || "1";

  if (!id) {
    notFound();
  }

  const surah = await getSurahAyatById(id);

  if (!surah) {
    notFound();
  }

  return (
    <div>
      <Ayats surahData={surah} initialPage={parseInt(page)} />
    </div>
  );
}