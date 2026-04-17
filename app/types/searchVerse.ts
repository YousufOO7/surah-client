export interface SearchResponse {
  total_surah_found: number;
  chapters: {
    [key: string]: {
      id: number;
      surah_name: string;
      surah_name_ar: string;
      translation: string;
      type: string;
      total_verses: number;
      description: string;
      verses: {
        [key: string]: {
          id: number;
          content: string;
          translation_eng: string;
          transliteration: string;
        };
      };
    };
  };
}
