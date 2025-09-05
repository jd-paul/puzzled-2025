import Image from "next/image";
import React, { useState } from "react";
import { Instagram, SeparatorVertical } from "lucide-react";

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

const Bottombar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <footer className="w-full">
            <nav
                className="
                    mx-3
                    flex items-center justify-between
                    h-16 rounded-[2rem]
                    px-4
                "
            >
                {/* LEFT: IG icon + handle link (like the reference) */}
                <div className="flex items-center gap-3 text-[#0064E9]">
                    {/* Instagram row */}
                    <a
                        href="https://www.instagram.com/kclpuzzled/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex flex-col md:flex-row md:items-center
                            gap-1 md:gap-2
                            font-normal underline-offset-4 hover:underline italic shrink-0
                        "
                        aria-label="Visit @kclpuzzled on Instagram"
                    >
                        <div className="flex items-center gap-2">
                            <Instagram className="h-7 w-7 shrink-0 flex-none" />
                            <span className="font-black">@kclpuzzled</span>
                        </div>
                        Follow us for updates!
                    </a>

                </div>
            </nav>

            {open && (
                <div className="mx-3 border-x-2 border-b-2 border-black bg-white/70 p-4 rounded-b-2xl">
                    {/* menu content */}
                </div>
            )}
        </footer>
    );
};

export default Bottombar;
