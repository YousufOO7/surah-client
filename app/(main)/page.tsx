"use client"
import PublicNav from "../components/main/navigations/PublicNav";
import MobileNav from "../components/main/navigations/MobileNav";
import HomeComponents from "../components/main/home-components/HomeComponents";
import Footer from "../components/main/navigations/Footer";

export default function HomePage() {
  return (
    <>
    <div>
      <div >
        <PublicNav />
        <MobileNav />
      </div>
     <HomeComponents />
    </div>
    <Footer />
    </>
  );
}

