import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-[#FFF4DD]/10">
            <nav
                className="
                    mx-auto max-w
                    flex items-center justify-between
                    h-16
                    border-b-3 border-black bg-[#FFF4DD]
                    pl-4
                "
            >
                {/* Brand */}
                <div className="flex items-center gap-3">
                    <span className="grid h-7 w-7 place-items-center rounded-sm border-2 border-black">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-black" fill="none" strokeWidth="2">
                            <path d="M12 3 21 12 12 21 3 12Z" />
                        </svg>
                    </span>
                    <span className="font-black text-black text-lg">Sunrise Fest</span>
                </div>

                {/* ONLY burger (desktop + mobile) */}
                <button
                    aria-label="Menu"
                    onClick={() => setOpen(v => !v)}
                    className="
                        h-full w-16
                        grid place-items-center
                        border-l-3 border-black
                        bg-[#F5B443]
                    "
                >
                    <div className="space-y-2">
                        <span className="block h-[3px] w-8 bg-black" />
                        <span className="block h-[3px] w-8 bg-black" />
                        <span className="block h-[3px] w-8 bg-black" />
                    </div>
                </button>
            </nav>

            {/* Optional: your menu panel when `open` is true */}
            {open && (
                <div className="mx-auto max-w-6xl border-x-2 border-b-2 border-black bg-[#FFF4DD] p-4">
                    {/* put menu content here if needed */}
                </div>
            )}
        </header>
    );
};

export default Navbar;
