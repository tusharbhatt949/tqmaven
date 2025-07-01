import React from "react";
import ArrowIcon from "../assets/svgs/ArrowIcon";
import GradientBackgroundEffect from "./ui/GradientBackgroundEffect";

const CarouselPopup: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)] backdrop-blur-md px-4">
            {/* Gradient + noise layers */}
            <div className="w-[80%] h-[90%] bg-[var(--bg-secondary)] rounded-[5rem] relative overflow-hidden shadow-lg justify-center items-center flex">
                <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-30">
                    <ArrowIcon direction="left" color="#ffffff60" />
                </div>
                <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-30">
                    <ArrowIcon direction="right" color="#ffffff60" />
                </div>

                {/* Carousel container */}
                <div className="w-full flex gap-6 items-center justify-center relative z-10 max-w-full overflow-hidden">
                    {/* Side Cards (Blurred) */}
                    <div className="min-w-[50%] scale-80 blur-sm overflow-hidden rounded-4xl relative text-white shadow-2xl px-10 py-30">
                        {/* Gift icon */}
                        <GradientBackgroundEffect />

                        <div className="absolute top-5 left-5">
                            <div className="w-9 h-9 bg-gradient-to-br from-[#FFA36B] to-[#E46D73] rounded-full flex items-center justify-center shadow-md">
                                <img
                                    src="/src/assets/gift-icon.png"
                                    alt="Gift"
                                    className="w-4 h-4"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="h-full w-full flex flex-col justify-center items-start space-y-2">
                            <h1 className="text-7xl font-semibold leading-tight z-100">
                                Your AI Prompt <br /> Prompts templates
                            </h1>
                            <p className="text-xl opacity-60 mt-5">
                                Use pre-made templates to jumpstart creativity.
                            </p>
                        </div>
                    </div>
                    {/* Active Card */}
                    <div className="min-w-[50%] overflow-hidden rounded-4xl relative text-white shadow-2xl px-10 py-30">
                        {/* Gift icon */}
                        <GradientBackgroundEffect />

                        <div className="absolute top-5 left-5">
                            <div className="w-9 h-9 bg-gradient-to-br from-[#FFA36B] to-[#E46D73] rounded-full flex items-center justify-center shadow-md">
                                <img
                                    src="/src/assets/gift-icon.png"
                                    alt="Gift"
                                    className="w-4 h-4"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="h-full w-full flex flex-col justify-center items-start space-y-2">
                            <h1 className="text-7xl font-semibold leading-tight z-100">
                                Your AI Prompt <br /> Prompts templates
                            </h1>
                            <p className="text-xl opacity-60 mt-5">
                                Use pre-made templates to jumpstart creativity.
                            </p>
                        </div>
                    </div>

                    {/* Side Cards (Blurred) */}
                    <div className="min-w-[50%] scale-80 blur-sm overflow-hidden rounded-4xl relative text-white shadow-2xl px-10 py-30">
                        {/* Gift icon */}
                        <GradientBackgroundEffect />

                        <div className="absolute top-5 left-5">
                            <div className="w-9 h-9 bg-gradient-to-br from-[#FFA36B] to-[#E46D73] rounded-full flex items-center justify-center shadow-md">
                                <img
                                    src="/src/assets/gift-icon.png"
                                    alt="Gift"
                                    className="w-4 h-4"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="h-full w-full flex flex-col justify-center items-start space-y-2">
                            <h1 className="text-7xl font-semibold leading-tight z-100">
                                Your AI Prompt <br /> Prompts templates
                            </h1>
                            <p className="text-xl opacity-60 mt-5">
                                Use pre-made templates to jumpstart creativity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Arrows */}

        </div>
    );
};

export default CarouselPopup;
