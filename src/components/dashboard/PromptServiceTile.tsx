export const PromptServiceTile = () => (
  <div className="flex flex-col justify-between p-[2em] row-span-3 col-start-4 row-start-4 bg-[var(--bg-secondary)] text-[var(--text-primary)] items-center">
    <div>
      <h3 className="text-[clamp(0.9em,1.3em,1.5em)] font-semibold mb-2">
        Prompt Service
      </h3>
      <p className="text-[clamp(0.75em,1em,1.1em)] text-[var(--text-secondary)]">
        Use pre-made templates to jumpstart creativity.
      </p>
    </div>
    <div className="relative w-[13em] h-[13em]">
      <div className="absolute top-[1.2em] left-0 rotate-[-25deg] bg-[#2C2C58] text-white text-sm px-4 py-2 rounded-full flex items-center gap-2">
        <div className="w-2 h-2 bg-purple-500 rounded-full" />
        <span>Rewrite</span>
      </div>
      <div className="absolute top-[4em] left-[5em] w-[3.5em] h-[3.5em] rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center shadow-lg">
        <img src="/assets/gift-icon.png" alt="Gift" className="w-5 h-5" />
      </div>
      <div className="absolute top-[1.2em] right-0 rotate-[90deg] bg-[#2C2C58] text-white text-sm px-3 py-2 rounded-full flex flex-col items-center gap-2">
        <div className="w-2 h-2 bg-sky-400 rounded-full" />
        <span>PDF</span>
        <span>PNG</span>
        <span>JPG</span>
      </div>
      <div className="absolute bottom-0 left-[0.8em] w-[3em] h-[3em] rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-md">
        <img src="/assets/camera-icon.png" alt="Camera" className="w-5 h-5" />
      </div>
      <div className="absolute bottom-[1.8em] left-[4em] rotate-[-10deg] bg-[#2C2C58] text-white text-sm px-3 py-2 rounded-full flex items-center gap-2">
        <img src="/assets/mic-icon.png" alt="Mic" className="w-4 h-4" />
        <img src="/assets/bolt-icon.png" alt="Bolt" className="w-4 h-4" />
      </div>
    </div>
  </div>
);
