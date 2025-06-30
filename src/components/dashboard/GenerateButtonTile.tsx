export const GenerateButtonTile = () => (
  <div className="row-start-6 bg-[var(--bg-secondary)] text-[var(--text-primary)] flex items-center justify-center">
    <button className="bg-violet-600 px-5 py-3 rounded-4xl flex gap-2 justify-center items-center">
      <img src="/src/assets/svgs/generateIcon.svg" />
      <p className="text-[clamp(0.85em,1.2em,1.25em)] text-white">Generate</p>
    </button>
  </div>
);
