import { useState } from "react";
// ... other imports
import ProfileCard from "../components/Profile";
import AiJourneyTile from "../components/dashboard/AiJourneyTile";
import BranchingPathsTile from "../components/dashboard/BranchingPathsTile";
import { GenerateButtonTile } from "../components/dashboard/GenerateButtonTile";
import { HeroBlock } from "../components/dashboard/HeroBlock";
import { PromptServiceTile } from "../components/dashboard/PromptServiceTile";
import { StatsTile } from "../components/dashboard/StatsTile";
import { ThemeTile } from "../components/dashboard/ThemeTile";
import { TopUsersTile } from "../components/dashboard/TopUsersTile";
import { TrialCard } from "../components/dashboard/TrialCard";
import { AnimatePresence } from "framer-motion";
import CarouselPopup from "../components/CarouselPopup";

function Dashboard() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
        <div className="aspect-[4/3] w-[min(100vw,calc(100vh*4/3))] h-[min(100vh,calc(100vw*3/4))] bg-[var(--bg-primary)] p-6 relative">
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-[23%] rounded-full overflow-hidden">
            <img src="/src/assets/sphere.png" alt="Orb" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-full grid grid-cols-4 grid-rows-6 gap-[clamp(0.5em,1em,1.5em)] [&>*]:rounded-[24px]">
            <TrialCard />
            <HeroBlock />
            <ThemeTile />
            <PromptServiceTile />
            <AiJourneyTile />
            {/* Pass setShowProfile to TopUsersTile */}
            <TopUsersTile onClick={() => setShowProfile(true)} />
            <StatsTile />
            <BranchingPathsTile />
            <GenerateButtonTile />
          </div>
        </div>
      </div>

      {/* Fade animation wrapper */}
      <AnimatePresence>
        {showProfile && <ProfileCard onClose={() => setShowProfile(false)} />}
      </AnimatePresence>

    <CarouselPopup/>

    </>
  );
}

export default Dashboard;
