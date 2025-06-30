import GradientBackgroundEffect from "../ui/GradientBackgroundEffect";
export const HeroBlock = () => (
  <div className="col-span-2 row-span-3 relative overflow-hidden text-[var(--text-primary)]">
    <div className="absolute inset-0 bg-center bg-no-repeat bg-cover bg-[url('/src/assets/svgs/shape1.svg')]" />
    <GradientBackgroundEffect />
    <div className="relative z-10 flex justify-center items-center p-[2em]">
      <h2 className="text-[clamp(1.2em,3em,4em)] font-semibold text-white leading-[1.2]">
        Template Ai
      </h2>
    </div>
  </div>
);