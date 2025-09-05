import Image from "next/image";
import React, { useState } from "react";

type DotProps = {
    className?: string;
    withLogo?: boolean;
};

const Dot: React.FC<DotProps> = ({ className = "", withLogo = false }) => (
    <span
        className={`relative flex items-center justify-center
                h-10 w-10 rounded-full border-3 border-black overflow-hidden ${className}`}
    >
        {withLogo && (
            <Image
                src="/logo.png"
                alt="Puzzled 2025"
                fill
                className="object-contain p-[4px]"
                priority
            />
        )}
    </span>
);


const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full">
            <nav
                className="
                    sticky top-0 z-50
                    mx-3
                    flex items-center justify-between
                    h-16 rounded-[2rem]
                    px-4
                "
            >
                {/* Left: overlapping dots */}
                <div className="relative h-10">
                    <div className="flex">
                        <Dot className="bg-white" />
                        <Dot className="-ml-3 bg-amber-300" />
                        <Dot className="-ml-3 bg-[#e90105]" withLogo />
                    </div>
                </div>

                {/* Right: pill button */}
                <button
                    onClick={() => setOpen((v) => !v)}
                    className="
                        h-10 px-5 rounded-full
                        border-3 border-black
                        text-lg font-bold
                        transition-transform bg-white
                    "
                    aria-label="Menu"
                >
                    Menu
                </button>
            </nav>

            {open && (
                <div className="mx-3 border-x-2 border-b-2 border-black bg-white/70 p-4 rounded-b-2xl">
                    {/* menu content */}
                </div>
            )}
        </header>
    );
};

export default Navbar;
