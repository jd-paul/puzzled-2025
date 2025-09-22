// components/hello-component.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Album, ChevronDown, Minus, SquareX, LinkIcon, Ellipsis } from "lucide-react";

const faqs = [
    {
        q: "Who can take part in Puzzled 2025?",
        a: "Unfortunately, due to limited capacity Puzzled 2025 is only open to undergraduate students (years 1-4) and postgraduate research (PhD) students in the Department of Informatics (King's College London).",
    },
    {
        q: "I don't know anyone at King's yet, can I still take part?",
        a: "Absolutely! Puzzled is intended as a way for you to get to know other students on your programme and those in the years above. As such, puzzling teams will be randomly allocated, giving you an opportunity to mix and meet with those you may not ordinarily meet.",
    },
    {
        q: "I haven't received my student card yet?",
        a: "Not to worry! Although your student card will normally act as your access card to various security doors on and around campus, we will ensure that access will be provided to any spaces that you will need to access during Puzzled without the need for your student card.",
    },
];

export default function HelloComponent() {
    return (
        <>
            {/* body */}
            <section className="relative grid gap-6 md:grid-cols-[60%_40%] items-start">
                {/* LEFT */}
                <div
                    className="
                        relative mx-auto w-auto max-w-full
                        rounded-xl border-[6px] border-black bg-white
                        shadow-[12px_12px_0_0_#000] overflow-hidden
                    "
                >
                    {/* title bar */}
                    <div className="flex items-center justify-between border-b-[6px] border-black bg-[#e90105] px-3 py-1">
                        {/* 3x3 dots */}
                        <Ellipsis className="h-7 w-7 text-black" aria-hidden />

                        <div className="flex items-center gap-1">
                            <Minus className="h-6 w-6 text-black stroke-3" aria-label="Minimize" />
                            <Album className="h-6 w-6 text-black stroke-3" aria-label="Maximize" />
                            <SquareX className="h-6 w-6 text-black stroke-3" aria-label="Close" />
                        </div>
                    </div>
                    <div className="px-6 py-8">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-[clamp(1.8rem,6vw,2.75rem)] font-extrabold leading-[1.2] mb-4">
                                Welcome to King's Informatics!
                            </h1>

                            <p className="text-[clamp(1rem,2.2vw,1.2rem)] text-stone-800 mb-8">
                                Join us on <span className="font-bold">Wed 24 Sept, 2-6.15pm</span> at <span className="font-bold">Strand</span> for King's Informatics' annual puzzle hunt!
                            </p>

                            <h1 className="text-[clamp(1.4rem,6vw,1.6rem)] font-extrabold leading-[1.2] mb-4">
                                Frequently Asked Questions
                            </h1>

                            {/* FAQs */}
                            <div className="w-full">
                                <div className="rounded-md border-4 border-black bg-white divide-y-4 divide-black overflow-hidden shadow-[8px_8px_0_0_#000]">
                                    {faqs.map((item, i) => (
                                        <AccordionItem key={i} q={item.q} a={item.a} defaultOpen={i === 0} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                {/* RIGHT*/}
                <div className="relative w-full flex flex-col items-center justify-center">
                    {/* Logo */}
                    <span
                        className={"relative flex items-center justify-center h-[10rem] w-full rounded-xl border-6 border-black overflow-hidden bg-[#e90105] shadow-[12px_12px_0_0_#000]"}
                    >
                        <Image
                            src="/logo.png"
                            alt="Puzzled 2025"
                            fill
                            className="object-contain p-[4px]"
                            priority
                        />
                    </span>

                    <span
                        className={
                            "relative flex items-start justify-center h-[15rem] w-full rounded-xl border-6 border-black overflow-hidden shadow-[12px_12px_0_0_#000] mt-6"
                        }
                    >
                        <Image
                            src="/images/team.jpeg"
                            alt="Puzzled Team"
                            fill
                            className="object-cover object-top"
                            priority={false}
                        />
                    </span>
                </div>

            </section>

        </>
    );
}

function AccordionItem({
    q,
    a,
    defaultOpen = false,
}: {
    q: string;
    a: string;
    defaultOpen?: boolean;
}) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div>
            <button
                className="w-full flex items-center justify-between px-5 py-3 text-left text-lg font-extrabold"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <span>{q}</span>
                <ChevronDown className={`h-5 w-5 transition-transform stroke-6 ${open ? "rotate-180" : ""}`} />
            </button>

            <div className={`${open ? "block" : "hidden"} bg-white`}>
                <div className="px-5 pb-3 text-base leading-7">{a}</div>
            </div>
        </div>
    );
}
