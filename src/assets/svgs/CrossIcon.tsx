// CrossIcon.tsx
export const CrossIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "text-[color:var(--text-primary)]",
  size = 35,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M26 1.0001L1.00011 26M1 1L25.9999 25.9999"
      stroke="currentColor"
      strokeOpacity="0.6"
      strokeLinecap="round"
    />
  </svg>
);
