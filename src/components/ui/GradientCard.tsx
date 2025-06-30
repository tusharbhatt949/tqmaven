import React from "react";

const GradientBg = () => {
  const style: React.CSSProperties = {
    width: "400px",
    height: "480px",
    borderRadius: "24px",
    backgroundImage: `url(/src/assets/profileBg.png)`,
    backgroundSize: "contain", // ensures the full image is visible
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
  };

  return <div style={style}></div>;
};

export default GradientBg;
