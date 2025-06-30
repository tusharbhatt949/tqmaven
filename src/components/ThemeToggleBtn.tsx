import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const ThemeToggleBtn = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer transition-all duration-300 hover:scale-105 bg-[#191934] w-40 rounded-[44px] border-2 border-[#5B4B8973] shadow-inner"
      style={{ boxShadow: "inset 0 4px 12px rgba(0, 0, 0, 0.6)" }}
    >
      <img
        src="/src/assets/themeToggleBtn.png"
        alt="Toggle"
        className="w-full h-auto p-2"
      />
    </div>
  );
};

export default ThemeToggleBtn;
