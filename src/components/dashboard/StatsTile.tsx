export const StatsTile = () => (
  <div className="flex flex-col gap-5 row-span-2 col-start-4 row-start-2 bg-[var(--bg-secondary)] text-[var(--text-primary)] items-center justify-center">
    <h2 className="text-[clamp(2em,4em,5em)] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[#7752FF]">
      25M
    </h2>
    <div
      className="px-6 py-2 rounded-full text-[var(--text-primary)] text-sm font-medium"
      style={{
        backgroundImage: "url('/assets/graidentBG.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      created prompts
    </div>
  </div>
);
