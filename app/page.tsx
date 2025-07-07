import { SiteHeader } from "./components/layout/SiteHeader";
import MainSection from "./components/custom/MainSection";
import Brands from "./components/custom/Brands";
import BentoGridStateful from "./components/magicui/BentoGridStateful";
import Platform from "./components/custom/Platform";


export default function Home() {
  return (
   <>
      <div className="bg-gradient-to-t from-neutral-50 from-0% via-red-700 via-50% to-slate-900 to-100%">
        <SiteHeader />
        <MainSection />
        <Brands />
      </div>
      <BentoGridStateful />
      <Platform/>
     
    </>
  );
}
