import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type DotProps = {
    className?: string;
    withLogo?: boolean;
};

const Dot: React.FC<DotProps> = ({ className = "", withLogo = false }) => (
    <span
        className={`relative flex items-center justify-center
      h-12 w-12 rounded-full border-3 border-black overflow-hidden ${className}`}
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
                {/* Left: brand + logo dot */}
                <div className="relative h-12">
                    <div className="flex">
                        <div className="text-black font-black bg-amber-600 flex items-center px-3 rounded-full border-3 border-black text-lg">
                            Puzzled 2025
                        </div>
                        <Dot className="ml-3 bg-[#e90105]" withLogo />
                    </div>
                </div>

                {/* Right: links (desktop) */}
                <div className="hidden md:flex items-center gap-3">
                    {[
                        { href: "https://www.eventbrite.com/e/puzzled-2025-tickets-1652374810539", label: "Tickets", ext: true },
                        { href: "/#about", label: "About" },
                        { href: "/#about", label: "FAQ" },
                        { href: "https://www.instagram.com/kclpuzzled", label: "Instagram", ext: true },
                    ].map((it) => (
                        <Link
                            key={it.label}
                            href={it.href}
                            target={it.ext ? "_blank" : undefined}
                            rel={it.ext ? "noopener noreferrer" : undefined}
                            className="h-12 px-4 rounded-full border-3 border-black bg-white text-lg font-bold flex items-center"
                        >
                            {it.label}
                        </Link>
                    ))}
                </div>

                {/* Right: Menu (mobile) */}
                <button
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden h-12 px-5 rounded-full border-3 border-black text-lg font-bold transition-transform bg-white"
                    aria-label="Menu"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    Menu
                </button>
            </nav>

            {/* Mobile sheet */}
            {open && (
                <div
                    id="mobile-menu"
                    className="fixed inset-0 z-50 bg-amber-600 text-black border-black"
                >
                    <div className="flex items-center justify-between h-16 px-4 border-black">
                        <div className="text-xl font-black">Menu</div>
                        <button
                            onClick={() => setOpen(false)}
                            className="h-10 px-4 rounded-full border-3 border-black bg-white font-bold"
                            aria-label="Close menu"
                        >
                            Close
                        </button>
                    </div>

                    <nav className="p-4 space-y-4">
                        {[
                            { href: "https://www.eventbrite.com/e/puzzled-2025-tickets-1652374810539", label: "Get Tickets", ext: true },
                            { href: "/#about", label: "About" },
                            { href: "/#about", label: "FAQ" },
                            { href: "https://www.instagram.com/kclpuzzled", label: "Instagram", ext: true },
                        ].map((it) => (
                            <Link
                                key={it.label}
                                href={it.href}
                                target={it.ext ? "_blank" : undefined}
                                rel={it.ext ? "noopener noreferrer" : undefined}
                                onClick={() => setOpen(false)}
                                className="block w-full text-left text-lg font-bold px-5 py-3 rounded-xl
                           border-3 border-black bg-white shadow-[6px_6px_0_0_#000]
                           active:translate-y-[2px]"
                            >
                                {it.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
