import React from "react";
import Shape2Svg from "../../assets/svgs/Shape2Svg";

const BranchingPathsTile = () => {
  return (
    <div className="row-span-3 col-start-2 row-start-4 relative overflow-hidden flex flex-col justify-end text-white">
      <div className="absolute inset-0 w-full h-full">
        <Shape2Svg />
      </div>

      <img
        src="/src/assets/orangeLineGlow.png"
        alt="Glow"
        className="absolute top-0 left-0 z-0 pointer-events-none w-[40%]"
      />

      <div className="relative z-20 flex flex-col items-start gap-3">
        <img
          src="/src/assets/branchingPathsIcon.png"
          alt="Icon"
          className="w-[40%]"
        />
        <div className="pl-[2em] pb-[2em] pr-[1.5em]">
          <h3 className="text-[clamp(0.9em,1.1em,1.5em)] font-semibold mb-2 text-[var(--text-primary)]">
            Branching paths
          </h3>
          <p className="text-[clamp(0.75em,0.9em,1.1em)] text-[var(--text-secondary)]">
            Explore multiple prompt directions with branching.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BranchingPathsTile;