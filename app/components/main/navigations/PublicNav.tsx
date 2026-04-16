import { publicNavigationLinks } from "@/app/utils/constant/navigations/publicNavigationLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFire, FaFirefoxBrowser } from "react-icons/fa";

const PublicNav = () => {
  const pathname = usePathname();
  return (
    <nav className="border-b bg-[#faf4ec]">
      <div className="container mx-auto">
        {/* Nav Links */}
        <div className="hidden md:flex items-center justify-between gap-8 text-sm font-medium  text-gray-600">
          <div>
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-gray-900">
              <p className="gap-1 flex items-center">
                <FaFirefoxBrowser className="text-blue-600" />
                <span>Quick Hire</span>
              </p>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="border space-x-4 px-2 bg-white rounded-xl flex">
            {publicNavigationLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`text-[12px] font-bold py-4 uppercase  ${
                  pathname === link.href ? "border-b-2 border-black" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-5 items-center">
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer font-bold bg-pink-200 rounded-md hidden md:flex items-center gap-1"
            >
              <span>Get Results</span>
              <FaFire className="text-red-500 bg-white text-2xl p-0.5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNav;
