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
      <div className="h-screen bg-gradient-to-r from-neutral-900 via-[#862828] to-[#f73545] w-full flex flex-col">
        <SiteHeader />

        <MainSection />

        <div className="mt-auto bg-white w-full">
          <Brands />
        </div>
      </div>

      <BentoGridStateful />
      <Testimonals />
      <CtaCard />
      <div className="pt-24">
        <Footer />
      </div>
    </>
  );
}
