import ThemeToggleBtn from "../ThemeToggleBtn";
export const ThemeTile = () => (
  <div className="col-start-4 bg-[var(--bg-secondary)] text-[var(--text-primary)] flex items-center justify-center">
    <div
      className="w-[10em] rounded-[44px] border-[#5B4B8973] border-2"
      style={{ boxShadow: "inset 0 4px 12px rgba(0, 0, 0, 0.6)" }}
    >
      <ThemeToggleBtn />
    </div>
  </div>
);
