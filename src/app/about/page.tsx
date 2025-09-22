"use client";
import React from 'react';
import CssHatchBackground from '@/components/css-hatch-background';
import Navbar from "@/components/navbar";
import { WindowImage } from "../../components/window-image";

const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col">
            <section
                id="about"
                className="relative flex items-center justify-center overflow-visible text-black bg-[#FFA3AF] z-50 border-b-[6px] border-black min-h-[100dvh]"
            >
                <div className="absolute inset-x-0 top-0 z-30 pt-3">
                    <Navbar />
                </div>
                <CssHatchBackground />

                {/* Container */}
                <div className="relative w-full max-w-6xl px-5 py-24 text-black">
                    <h1 className="text-[clamp(1.8rem,6vw,2.75rem)] font-extrabold leading-[1.2] mb-4 mt-12">
                        Meet the team behind Puzzled 2025!
                    </h1>

                    {/* Show off a single image of public/images/meet-the-team/committee-compressed.JPG */}
                    <div className="mt-8">
                        <WindowImage
                            src="/images/meet-the-team/committee-compressed.jpg"
                            alt="Meet the Team"
                        />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AboutPage;