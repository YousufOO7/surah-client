"use client";
import Footer from "../components/main/navigations/Footer";
import MobileNav from "../components/main/navigations/MobileNav";
import PublicNav from "../components/main/navigations/PublicNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="max-w-[1440px] mx-auto">
      <PublicNav  />
      <MobileNav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
