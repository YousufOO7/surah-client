"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onReset: () => void;
}

const SearchBar = ({ onSearch, onReset }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    onSearch(query);
  };

    const handleReset = () => {
    setQuery("");
    onReset();
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex gap-2">
      <input
        type="text"
        placeholder="Search verses (Arabic / English)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-amber-500"
      />

      <Button onClick={handleSearch} variant="outline" className="px-6 py-3 mt-2.5">
        Search
      </Button>

       <Button
        onClick={handleReset}
        variant="outline"
        className="px-4 py-3 mt-2.5"
      >
        Reset
      </Button>
    </div>
  );
};

export default SearchBar;