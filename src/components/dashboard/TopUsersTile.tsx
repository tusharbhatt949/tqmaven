import React from "react";

interface TopUsersTileProps {
  onClick?: () => void;
}

export const TopUsersTile: React.FC<TopUsersTileProps> = ({ onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer row-span-2 col-start-1 row-start-4 bg-[var(--bg-secondary)] text-[var(--text-primary)] flex items-center justify-center flex-col hover:opacity-90 transition-all"
  >
    <h2 className="text-[clamp(1.5em,3em,4em)] font-semibold">20</h2>
    <p className="text-[clamp(0.9em,1.2em,1.5em)] text-[var(--text-secondary)]">
      Top Users
    </p>
    <div className="flex items-center justify-center py-4">
      <img
        src="/src/assets/user1.png"
        alt="User 1"
        className="w-12 h-12 rounded-full object-cover border-4 border-[var(--bg-primary)]"
      />
      <div className="-ml-4 w-12 h-12 rounded-full bg-[#FFEFE5] flex items-center justify-center border-4 border-[var(--bg-primary)]">
        <img src="/src/assets/user2.png" alt="Star" className="w-5 h-5" />
      </div>
      <img
        src="/src/assets/user3.png"
        alt="User 2"
        className="-ml-4 w-12 h-12 rounded-full object-cover border-4 border-[var(--bg-primary)]"
      />
    </div>
  </div>
);
