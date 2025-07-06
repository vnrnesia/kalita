import { SiteHeader } from "./components/layout/SiteHeader";
import MainSection from "./components/custom/MainSection";
import Brands from "./components/custom/Brands";

export default function Home() {
  return (
    <>
      <div className="h-[750px] bg-gradient-to-b from-stone-900 from-15% via-red-600 via-50% to-stone-50 to-100%">
        <SiteHeader />
        <MainSection />
      </div>
      <Brands />
    </>
  );
}
