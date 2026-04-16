"use client";

import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub, FaFirefoxBrowser } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black overflow-hidden">
      <div className="container mx-auto py-16 px-4 md:px-0">
        {/* Main Footer Grid */}
        <div className="md:flex md:justify-between  mb-12 ">
          {/* Brand Section */}
          <div className="">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-1"><span><FaFirefoxBrowser className="text-blue-600" /></span> QuickHire</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-5 md:mt-0">
            {/* About Section */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              About
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Companies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Advice
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Help Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Updates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="hidden md:block">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get job notifications
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white text-black"
              />
              <button className="px-6 py-2 bg-blue-600 text-white  hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 md:hidden">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get job notifications
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white text-black"
              />
              <button className="px-6 py-2 bg-blue-600 text-white  hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
          <p className="text-gray-500 text-sm">
            © 2021 QuickHire. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
