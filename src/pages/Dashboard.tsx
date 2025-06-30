import React from "react";
import { assets } from "../assets/assets";
import GradientBackgroundEffect from "../components/ui/GradientBackgroundEffect";
import ThemeToggleBtn from "../components/ThemeToggleBtn";

function Dashboard() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black">
      <div className="aspect-[4/3] max-w-[100vw] max-h-[100vh] bg-[var(--bg-primary)] p-6 relative">
        <div className=" absolute left-1/2 top-1/2 z-20 translate-x-[-50%] translate-y-[-50%] w-[23%] rounded-full overflow-hidden">
          <img
            src="/src/assets/sphere.png" // Use correct path
            alt="Orb"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-full grid grid-cols-4 grid-rows-6 gap-6 [&>*]:rounded-[24px] ">
          <div className="p-[34px] row-span-3 bg-[var(--bg-secondary)] text-left text-[var(--text-primary)] flex justify-between flex-col">
            <h2 className="text-xl md:text-[40px] font-semibold">
              Create your own template
            </h2>
            <div className="text-sm md:text-base">
              <p className="text-lg font-semibold">14 days trial</p>
              <p className="text-[var(--text-secondary)]">after - $5/month</p>
            </div>
          </div>

          <div className="col-span-2 row-span-3 relative overflow-hidden text-[var(--text-primary)]">
            {/* SVG background shape */}
            <div className="absolute inset-0 bg-center bg-no-repeat bg-cover bg-[url('/src/assets/svgs/shape1.svg')]" />

            {/* Gradient overlay */}
            <GradientBackgroundEffect />

            {/* Content */}
            <div className="relative z-10 flex justify-center items-center p-10">
              <h2 className="text-6xl font-semibold text-white">Template Ai</h2>
            </div>
          </div>

          <div className="col-start-4 bg-[var(--bg-secondary)] text-[var(--text-primary)] flex items-center justify-center">
            <div
              className=" bg-[var(--bg-secondary)] w-40 rounded-[44px] border-[#5B4B8973] border-2"
              style={{
                boxShadow: "inset 0 4px 12px rgba(0, 0, 0, 0.6)",
              }}
            >
              <ThemeToggleBtn />
              {/* <img src="/src/assets/themeToggleBtn.png" alt="Toggle" className="w-25"/> */}
            </div>
          </div>

          <div className="flex flex-col justify-between p-10 row-span-3 col-start-4 row-start-4 bg-[var(--bg-secondary)] text-[var(--text-primary)] flex items-center ">
            <div>
              <h3 className="text-xl text-[var(--text-primary)] mb-2 font-semibold">
                Prompt Service
              </h3>
              <p className="text-lg text-[var(--text-secondary)]">
                Use pre-made templates to jumpstart creativity.
              </p>
            </div>

            <div className="relative w-[230px] h-[230px]">
              {/* Rewrite pill (top-left, rotated) */}
              <div className="absolute top-[20px] left-[0px] rotate-[-25deg] bg-[#2C2C58] text-white text-sm px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Rewrite</span>
              </div>

              {/* Gift circle (center) */}
              <div className="absolute top-[70px] left-[90px] w-[60px] h-[60px] rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center shadow-lg">
                <img
                  src="/assets/gift-icon.png"
                  alt="Gift"
                  className="w-5 h-5"
                />
              </div>

              {/* Export pill (right, vertical text, rotated) */}
              <div className="absolute top-[20px] right-[0px] rotate-[90deg] bg-[#2C2C58] text-white text-sm px-3 py-2 rounded-full flex flex-col items-center gap-2">
                <div className="w-2 h-2 bg-sky-400 rounded-full" />
                <span>PDF</span>
                <span>PNG</span>
                <span>JPG</span>
              </div>

              {/* Camera button (bottom-left) */}
              <div className="absolute bottom-[0px] left-[10px] w-[50px] h-[50px] rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-md">
                <img
                  src="/assets/camera-icon.png"
                  alt="Camera"
                  className="w-5 h-5"
                />
              </div>

              {/* Mic pill (bottom-middle, rotated) */}
              <div className="absolute bottom-[30px] left-[80px] rotate-[-10deg] bg-[#2C2C58] text-white text-sm px-3 py-2 rounded-full flex items-center gap-2">
                <img src="/assets/mic-icon.png" alt="Mic" className="w-4 h-4" />
                <img
                  src="/assets/bolt-icon.png"
                  alt="Bolt"
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>

          <div className="row-span-3 col-start-3 row-start-4 relative overflow-hidden flex flex-col justify-end">
            <div className="absolute inset-0 bg-center bg-no-repeat bg-cover bg-[url('/src/assets/svgs/shape2.svg')] transform scale-x-[-1]" />
            <img
              src="/src/assets/violetLineGlow.png"
              alt="Glow Line"
              className="absolute top-0 right-0 z-10 pointer-events-none w-[40%]"
            />

            <div className="relative z-20 flex flex-col items-start gap-3">
              <img
                src="/src/assets/aiJourneyIcon.png"
                alt="Branching Icon"
                className="w-[40%] mb-0"
              />
              <div className="pl-10 pb-10 -mt-2 pr-5">
                <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">
                  Ai journey
                </h3>
                <p className="text-lg text-[var(--text-secondary)]">
                  Boost your prompt precision with keywords.
                </p>
              </div>
            </div>
          </div>

          <div className="row-span-2 col-start-1 row-start-4 bg-[var(--bg-secondary)] text-[var(--text-primary)] flex items-center justify-center flex-col">
            <h2 className="text-6xl font-semibold">20</h2>
            <p className="text-xl text-[var(--text-secondary)]">Top Users</p>

            <div className="flex items-center justify-center py-4">
              {/* Left Avatar */}
              <img
                src="/src/assets/user1.png"
                alt="User 1"
                className="w-15 h-15 rounded-full object-cover border-5 border-[var(--bg-primary)]"
              />

              {/* Center Icon (overlapping left) */}
              <div className="-ml-4 w-15 h-15 rounded-full bg-[#FFEFE5] flex items-center justify-center border-5 border-[var(--bg-primary)]">
                <img
                  src="/src/assets/user2.png"
                  alt="Star Icon"
                  className="w-5 h-5"
                />
              </div>

              {/* Right Avatar (overlapping center) */}
              <img
                src="/src/assets/user3.png"
                alt="User 2"
                className="-ml-4 w-15 h-15 rounded-full object-cover border-5 border-[var(--bg-primary)]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 row-span-2 col-start-4 row-start-2 bg-[var(--bg-secondary)] text-[var(--text-primary)] items-center justify-center rounded-[24px]">
            {/* Gradient number text */}
            <h2 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[#7752FF]">
              25M
            </h2>

            {/* Background badge with image */}
            <div
              className="px-6 py-2 rounded-full text-[var(--text-primary)] text-sm font-medium"
              style={{
                backgroundImage: "url('/assets/graidentBG.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              created prompts
            </div>
          </div>

          <div className="row-span-3 col-start-2 row-start-4 relative overflow-hidden flex flex-col justify-end  text-white rounded-[24px]">
            {/* Background SVG shape */}
            <div className="absolute inset-0 bg-center bg-no-repeat bg-cover bg-[url('/src/assets/svgs/shape2.svg')]" />

            {/* Glow image overlay */}
            <img
              src="/src/assets/orangeLineGlow.png"
              alt="Glow Line"
              className="absolute top-0 left-0 z-10 pointer-events-none w-[40%]"
            />

            {/* Content block - icon + title + text */}
            <div className="relative z-20 flex flex-col items-start gap-3">
              <img
                src="/src/assets/branchingPathsIcon.png"
                alt="Branching Icon"
                className="w-[40%] mb-0"
              />
              <div className="pl-10 pb-10 -mt-2 pr-5">
                <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">
                  Branching paths
                </h3>
                <p className="text-lg text-[var(--text-secondary)]">
                  Explore multiple prompt directions with branching.
                </p>
              </div>
            </div>
          </div>

          <div className="row-start-6 bg-[var(--bg-secondary)] text-[var(--text-primary)] flex items-center justify-center">
            <button className="bg-violet-600 px-5 py-3 rounded-4xl flex gap-2 justify-center items-center">
              <img src={"/src/assets/svgs/generateIcon.svg"} />
              <p className="text-lg text-white">Generate</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
