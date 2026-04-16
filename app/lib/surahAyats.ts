// app/lib/api/surah.ts

import { appConfiguration } from "../utils/constant/appConfiguration";

export interface Verse {
  id: number;
  content: string;
  translation_eng: string;
  transliteration: string;
}

export interface SurahData {
  id: number;
  surah_name: string;
  surah_name_ar: string;
  translation: string;
  type: string;
  total_verses: number;
  description: string;
  verses: Record<string, Verse>;
}

export interface ApiResponse {
  total_surahs: number;
  total_meccan_surahs: number;
  total_medinan_surahs: number;
  total_verses: number;
  number_of_words: number;
  number_of_unique_words: number;
  number_of_stems: number;
  number_of_lemmas: number;
  number_of_roots: number;
  chapters: Record<string, SurahData>;
}

const cachedData: ApiResponse | null = null;

export async function getAllSurahs(): Promise<ApiResponse> {

    if (cachedData) {
    return cachedData;
  }

  try {
    const url = `${appConfiguration.baseUrl}surah-list`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        "accept": "application/json",
      },
      cache: 'no-store'
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error('[DEBUG] Full API Error:', {
        status: res.status,
        statusText: res.statusText,
        url,
        errorData
      });
      throw new Error(`Failed to fetch surahs: ${errorData.message || res.statusText}`);
    }

    const data = await res.json();
      const responseData = Array.isArray(data) ? data[0] : data;
    
    return responseData;
  } catch (error) {
    console.error('[DEBUG] Full fetch error:', error);
    throw new Error(`Failed to load surahs: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function getSurahAyatById(id: string): Promise<SurahData | null> {
   try {
    const url = `${appConfiguration.baseUrl}surah-list/${id}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        "accept": "application/json",
      },
      cache: 'no-store'
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error('[DEBUG] Full API Error:', {
        status: res.status,
        statusText: res.statusText,
        url,
        errorData
      });
      throw new Error(`Failed to fetch surahs: ${errorData.message || res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('[DEBUG] Full fetch error:', error);
    throw new Error(`Failed to load surahs: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}