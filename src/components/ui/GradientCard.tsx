import React, { useEffect, useState } from "react";

const GradientBg = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const baseWidth = 1440; // base design width
      const screenWidth = window.innerWidth;
      const newScale = Math.min(screenWidth / baseWidth, 1); // max scale = 1 (don't upscale on large screens)
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const style: React.CSSProperties = {
    transform: `scale(${scale})`,
    transformOrigin: "top center",
    width: "100%",
    maxWidth: "1440px", // same as base design width
    margin: "0 auto",
  };

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center">
      <div style={style} className="flex w-full h-full items-center justify-center">
        {/* Scaled Content */}
        <div
          className="w-[600px] h-[700px] rounded-[24px] flex items-center justify-center"
          style={{
            backgroundImage: `url(/src/assets/profileBg.png)`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="items-center flex flex-col justify-between h-[70%] relative">
            {/* Usage Text */}
            <h1 className="text-6xl mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#FFB266] via-[#E9766F] to-[#C04350] font-bold">
              20k Use
            </h1>

            {/* Avatar with both background glow and bottom blend */}
            <div className="relative w-[180px] h-[240px] flex items-center justify-center ">
              {/* Circular glow behind avatar */}
              <div className="absolute w-[220px] h-[220px] rounded-full bg-gradient-to-br from-[#A9A1FF] to-[#FEBDFF] blur-2xl opacity-100 z-0" />

              {/* Avatar image */}
              <img
                src="/src/assets/profileAvatar.png"
                alt="Profile Avatar"
                className="w-full h-full z-10 relative object-cover "
              />


              {/* Bottom gradient blend OVER the avatar */}
              <div className="absolute bottom-[-30px] w-[150%] h-[80px] blur-[19px] bg-gradient-to-r from-[#6B60EA] to-[#C376C4] rounded-full opacity-100 z-20" />
            </div>


            {/* Name */}
            <h2 className="font-bold text-4xl relative  bottom-[40px] z-100">
              Monye Matt
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientBg;
