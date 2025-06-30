import React from "react";

const GradientBackgroundEffect = ({
  gradient = "radial-gradient(circle at bottom, #BBA5F4 0%, #653AD8 60%, #653AD8 100%)",
}) => {
  return (
    <>
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 mix-blend-multiply pointer-events-none"
        style={{ background: gradient }}
      />

      {/* Noise Layer 1 – Subtle (15%) */}
      <div
        className="absolute inset-0 mix-blend-overlay pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `url('/src/assets/noise1.png')`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />

      {/* Noise Layer 2 – Stronger (70%) */}
      <div
        className="absolute inset-0 mix-blend-overlay pointer-events-none opacity-[0.7]"
        style={{
          backgroundImage: `url('/src/assets/noise2.png')`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
    </>
  );
};

export default GradientBackgroundEffect;
