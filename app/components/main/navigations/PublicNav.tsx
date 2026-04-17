import { publicNavigationLinks } from "@/app/utils/constant/navigations/publicNavigationLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFirefoxBrowser } from "react-icons/fa";

const PublicNav = () => {
  const pathname = usePathname();
  return (
    <nav className="border-b container mx-auto">
        {/* Nav Links */}
        <div className="hidden md:flex items-center justify-between text-sm font-medium  text-gray-600">
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
          <div className=" space-x-4 px-2  flex">
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
            <Link href="/surah-admin-portal/setting">
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer"
              
            >
              Login
            </Button>
            </Link>
          </div>
        </div>
    </nav>
  );
};

export default PublicNav;
