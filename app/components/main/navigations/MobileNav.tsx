"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { publicNavigationLinks } from "@/app/utils/constant/navigations/publicNavigationLinks";
import { FaFirefoxBrowser } from "react-icons/fa";

const MobileNav = () => {

  return (
    <nav className="border-b bg-white md:hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1 text-xl font-bold text-gray-900"
        >
          <FaFirefoxBrowser className="text-blue-600" />
          <span>Quick Hire</span>
        </Link>

        {/* Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <Menu size={22} />
            </button>
          </SheetTrigger>

          {/* Right Sidebar */}
          <SheetContent side="right" className="w-72 p-0">
            <div className="flex h-full flex-col">
              {/* Menu Links */}
              <div className="flex flex-col gap-5 px-6 pt-8 text-sm font-semibold border ">
                {publicNavigationLinks.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    className="text-sm font-bold  uppercase text-gray-700 hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Spacer pushes button down */}
              <div className="flex-1" />

              {/* Bottom Login */}
              <div className="px-6 pb-6">
                <Button variant="default" size="sm" className="cursor-pointer">
                  Login
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobileNav;
