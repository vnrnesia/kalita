import { SiteHeader } from "./components/layout/SiteHeader";
import MainSection from "./components/custom/MainSection";
import Brands from "./components/custom/Brands";
import BentoGridStateful from "./components/magicui/BentoGridStateful";
import Platform from "./components/custom/Platform";
import Testimonals from "./components/custom/Testimonals";
import CtaCard from "./components/custom/CtaCard";
import Footer from "./components/custom/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-neutral-900 via-[#862828] to-[#f73545] min-h-screen w-full">
        <SiteHeader className="w-full bg-gradient-to-r from-neutral-900 via-[#862828] to-[#f73545]" />

        <MainSection />
      </div>

      <Brands />
      <BentoGridStateful />
      <Testimonals />
      <CtaCard />
      <div className="pt-24">
        <Footer />
      </div>
    </>
  );
}
