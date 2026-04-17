"use client";

import { useEffect, useState } from "react";

const Setting = () => {
  const [arabicFont, setArabicFont] = useState("font1");
  const [arabicSize, setArabicSize] = useState(24);
  const [translationSize, setTranslationSize] = useState(16);

  // 🔥 Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("quranSettings");
    if (saved) {
      const parsed = JSON.parse(saved);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setArabicFont(parsed.arabicFont || "font1");
      setArabicSize(parsed.arabicSize || 24);
      setTranslationSize(parsed.translationSize || 16);
    }
  }, []);

  // 🔥 Save to localStorage
  useEffect(() => {
    const settings = {
      arabicFont,
      arabicSize,
      translationSize,
    };

    localStorage.setItem("quranSettings", JSON.stringify(settings));
  }, [arabicFont, arabicSize, translationSize]);

  return (
    <div className="p-6 bg-zinc-950 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-amber-400">
        ⚙️ Settings Panel
      </h2>

      {/* 🔤 Arabic Font */}
      <div className="mb-6">
        <label className="block mb-2 text-zinc-300">Arabic Font</label>
        <select
          value={arabicFont}
          onChange={(e) => setArabicFont(e.target.value)}
          className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg"
        >
          <option value="font1">Amiri</option>
          <option value="font2">Scheherazade</option>
        </select>
      </div>

      {/* 🔠 Arabic Size */}
      {/* 🔠 Arabic Size */}
      <div className="mb-6">
        <label className="block mb-2 text-zinc-300">
          Arabic Font Size (px)
        </label>

        <input
          type="number"
          min="18"
          max="40"
          value={arabicSize}
          onChange={(e) => setArabicSize(Number(e.target.value))}
          className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
        />
      </div>

      {/* 🌐 Translation Size */}
      <div className="mb-6">
        <label className="block mb-2 text-zinc-300">
          Translation Font Size (px)
        </label>

        <input
          type="number"
          min="12"
          max="28"
          value={translationSize}
          onChange={(e) => setTranslationSize(Number(e.target.value))}
          className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
        />
      </div>
    </div>
  );
};

export default Setting;
