// components/CountdownTimer.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diff(from: number, to: number): Parts {
    let ms = Math.max(0, to - from);
    const days = Math.floor(ms / 86_400_000); ms -= days * 86_400_000;
    const hours = Math.floor(ms / 3_600_000); ms -= hours * 3_600_000;
    const minutes = Math.floor(ms / 60_000); ms -= minutes * 60_000;
    const seconds = Math.floor(ms / 1_000);
    return { days, hours, minutes, seconds };
}

export default function CountdownTimer({ target }: { target: string }) {
    // parse once
    const targetTs = useMemo(() => new Date(target).getTime(), [target]);
    const [mounted, setMounted] = useState(false);
    const [parts, setParts] = useState<Parts>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        setMounted(true); // prevents SSR/CSR mismatch
        const tick = () => setParts(diff(Date.now(), targetTs));
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [targetTs]);

    const P = mounted ? parts : { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const two = (n: number) => String(n).padStart(2, "0");

    return (
        <div className="w-full rounded-xl overflow-hidden
                    p-4 border-2 border-black/20">
            <div className="mx-auto flex items-center justify-center gap-6 sm:gap-10">
                {[
                    { n: String(P.days), label: "days" },
                    { n: two(P.hours), label: "hours" },
                    { n: two(P.minutes), label: "minutes" },
                    { n: two(P.seconds), label: "seconds" },
                ].map((x, i) => (
                    <div key={i} className="flex items-center gap-6 sm:gap-10">
                        <div className="text-5xl sm:text-6xl md:text-7xl font-black text-black text-center leading-none">
                            {x.n}
                            <div className="mt-1 text-base sm:text-lg md:text-xl font-serif italic opacity-90">
                                {x.label}
                            </div>
                        </div>
                        {i < 3 && (
                            <div className="h-12 sm:h-14 md:h-16 w-px bg-black/40 mx-1 sm:mx-2" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
