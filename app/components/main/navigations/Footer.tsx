"use client";

import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto py-16 px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* 🌙 Brand */}
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">
              القرآن الكريم
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Read, search, and explore the Holy Quran بسهولة. 
              Access all Surahs with translation and deepen your understanding of Islam.
            </p>
          </div>

          {/* 📚 Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase mb-4">
                Navigation
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="text-zinc-400 hover:text-amber-400 cursor-pointer">
                  All Surahs
                </li>
                <li className="text-zinc-400 hover:text-amber-400 cursor-pointer">
                  Search Ayat
                </li>
                <li className="text-zinc-400 hover:text-amber-400 cursor-pointer">
                  Favorites
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase mb-4">
                Resources
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="text-zinc-400 hover:text-amber-400 cursor-pointer">
                  Tafsir (Coming Soon)
                </li>
                <li className="text-zinc-400 hover:text-amber-400 cursor-pointer">
                  Hadith
                </li>
                <li className="text-zinc-400 hover:text-amber-400 cursor-pointer">
                  Islamic Articles
                </li>
              </ul>
            </div>

            {/* Settings */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase mb-4">
                Settings
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="text-zinc-400 hover:text-amber-400 cursor-pointer">
                  Font Settings
                </li>
                <li className="text-zinc-400 hover:text-amber-400 cursor-pointer">
                  Translation Options
                </li>
                <li className="text-zinc-400 hover:text-amber-400 cursor-pointer">
                  Dark Mode
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-zinc-800 pt-8">
          <h3 className="text-white text-lg mb-3">
            📩 Get Quran Updates
          </h3>
          <p className="text-zinc-400 text-sm mb-4">
            Receive weekly reminders, ayah highlights, and Islamic content.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-amber-500"
            />
            <button className="px-6 py-2 bg-amber-500 text-black font-medium rounded-lg hover:bg-amber-400 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Quran App. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex gap-4">
            <FaTwitter className="text-zinc-400 hover:text-amber-400 cursor-pointer" />
            <FaFacebookF className="text-zinc-400 hover:text-amber-400 cursor-pointer" />
            <FaLinkedinIn className="text-zinc-400 hover:text-amber-400 cursor-pointer" />
            <FaGithub className="text-zinc-400 hover:text-amber-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;