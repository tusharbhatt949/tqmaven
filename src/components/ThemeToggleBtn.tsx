import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const ThemeToggleBtn = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer transition-all duration-300  rounded-[44px] border-1 border-[#5B4B8973] shadow-inner"
      style={{ boxShadow: "inset 0 4px 12px rgba(0, 0, 0, 0.2)" }}
    >
      <img
        src="/src/assets/themeToggleBtn.png"
        alt="Toggle"
        className="w-[50%] h-auto "
      />
    </div>
  );
};

export default ThemeToggleBtn;
