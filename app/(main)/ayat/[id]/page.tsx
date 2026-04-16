"use client";
import Ayats from "@/app/components/main/pages/ayat/Ayats";
import { useParams } from "next/navigation";


const SurahAyats = () => {
    const params = useParams();
  const surahId = params.id as string;
    return (
        <div>
           <Ayats surahId={surahId} />
        </div>
    );
};

export default SurahAyats;