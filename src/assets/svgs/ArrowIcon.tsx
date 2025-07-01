import React from "react";

interface ArrowIconProps {
  color?: string;
  size?: number;
  direction?: "left" | "right";
  className?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  color = "#976FFF",
  size = 100,
  direction = "right",
  className = "",
}) => {
  const transform = direction === "left" ? "scaleX(-1)" : "none";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform }}
      className={className}
    >
      <path
        d="M27.75 15.4167L46.25 37L27.75 58.5834"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
