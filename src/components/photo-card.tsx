import React from "react";
import CountdownTimer from "@/components/countdown-timer";

import { LinkIcon, Ellipsis, Minus, Album, SquareX } from "lucide-react"

export const MainCard: React.FC = () => {
    return (
        <div
            className="
                relative mx-auto my-8 w-auto min-w-[30vw] max-w-[42rem]
                rounded-xl border-[6px] border-black bg-white
                shadow-[12px_12px_0_0_#000] overflow-hidden
            "
        >
            {/* title bar */}
            <div className="flex items-center justify-between border-b-[6px] border-black bg-amber-600 px-3 py-1">
                {/* 3x3 dots */}
                <Ellipsis className="h-7 w-7 text-black" aria-hidden />

                <div className="flex items-center gap-1">
                    <Minus className="h-6 w-6 text-black stroke-3" aria-label="Minimize" />
                    <Album className="h-6 w-6 text-black stroke-3" aria-label="Maximize" />
                    <SquareX className="h-6 w-6 text-black stroke-3" aria-label="Close" />
                </div>
            </div>

            {/* body */}

            <div className="p-6 sm:p-8 md:p-10">
                <h1 className="text-[clamp(2rem,6vw,3rem)] font-extrabold leading-[0.95] mb-2">
                    Puzzled 25
                </h1>
                <p className="text-[clamp(1rem,2.2vw,1.2rem)] text-stone-800 italic mb-4">
                    King's Informatics presents your annual puzzle hunt
                </p>


                <p className="text-[clamp(1rem,2.2vw,1.2rem)] text-stone-800">
                    Join us for a day of challenges and fun at the heart of Strand!
                </p>

                {/* <div className="my-25" /> */}


                {/* Need an event countdown timer here */}
                {/* <CountdownTimer target="2025-09-24T00:00:00Z" /> */}

                {/* chips */}
                <div className="mt-6 flex flex-wrap gap-3.5">
                    {[
                        "Get free tickets here",
                        "Meet new friends!",
                        "Solve difficult puzzles!",
                        "Explore Bush House and Strand!",
                    ].map((label) => {
                        const isTickets = label === "Get free tickets here";
                        const baseClasses = `
                            inline-flex items-center gap-2 rounded-xl border-[4px] border-black
                            px-3.5 py-1 text-lg font-extrabold
                            shadow-[6px_6px_0_0_#000]
                            hover:translate-y-[1px] hover:shadow-[4px_4px_0_0_#000]
                            transition
                        `;
                        const bgClass = isTickets ? "bg-amber-300 text-black" : "bg-[#FF2E63]";

                        const content = (
                            <span className={`${baseClasses} ${bgClass}`}>
                                {label}
                                {isTickets && <LinkIcon className="h-5 w-5 stroke-3" />}
                            </span>
                        );

                        return isTickets ? (
                            <a
                                key={label}
                                href="https://www.eventbrite.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {content}
                            </a>
                        ) : (
                            <span key={label} className={`${baseClasses} ${bgClass}`}>
                                {label}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MainCard;