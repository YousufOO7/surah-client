"use client";

import { Button } from "@/components/ui/button";


const Banner = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image - Elegant Islamic Style */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/green-gold-plaque-mosque-with-number-arabic-it_701999-15970.jpg?semt=ais_hybrid&w=740&q=80')`,
          filter: 'brightness(0.75) contrast(1.1)'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.8px,transparent_1px)] bg-[length:40px_40px] opacity-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Small Islamic Symbol */}
        <div className="flex justify-center mb-4">
          <div className="text-5xl text-amber-300 drop-shadow-lg">ﷺ</div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide drop-shadow-2xl">
          القرآن الكريم
        </h1>
        
        <p className="mt-3 text-xl md:text-2xl text-amber-100 font-medium">
          The Noble Quran
        </p>

        <div className="h-1 w-24 bg-amber-400 mx-auto mt-8 rounded-full" />

        <p className="mt-8 text-lg md:text-xl text-white/90 max-w-md mx-auto">
          Guidance, Mercy, and Light for all mankind
        </p>

        {/* Optional subtle button (if you want to link to Surah List) */}
        <Button 
          onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}
          className="mt-10 px-8 py-3 bg-amber-500 hover:bg-amber-600 transition-colors text-white font-semibold rounded-xl text-lg shadow-lg"
        >
          Browse Surahs
        </Button>
      </div>

      
    </div>
  );
};

export default Banner;