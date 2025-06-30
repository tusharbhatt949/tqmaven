export const TrialCard = () => (
  <div className="p-[2em] row-span-3 bg-[var(--bg-secondary)] text-[var(--text-primary)] flex flex-col justify-between">
    <h2 className="text-[clamp(1em,1.8em,2.5em)] font-semibold leading-[1.3]">
      Create your own template
    </h2>
    <div className="text-[clamp(0.75em,1em,1.2em)]">
      <p className="font-semibold">14 days trial</p>
      <p className="text-[var(--text-secondary)]">after - $5/month</p>
    </div>
  </div>
);