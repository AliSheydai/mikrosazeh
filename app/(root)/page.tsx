// import EventToast from "@/components/event-toast";
import { BentoSection } from "@/components/landing/bento-section";
import { HeroSection } from "@/components/landing/hero";
import { ComponentCategory } from "@/components/landing/components-category";
import { BuildInterfacesCard } from "@/components/landing/interfaceCards";

import { TechnologyBadges } from "@/components/landing/technology-badges";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black/5 overflow-x-hidden">
      <div className="">
        <HeroSection />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 md:py-16 lg:py-20 flex items-center justify-center">
          <BentoSection />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 md:py-16 lg:py-20 flex items-center justify-center">
        <ComponentCategory />
      </div>
      {/* <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 md:py-16 lg:py-20 flex items-center justify-center">
        <BuildInterfacesCard />
      </div> */}
      <BuildInterfacesCard />

      <TechnologyBadges />
      {/* <EventToast /> */}
    </main>
  );
}
