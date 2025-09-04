import React from "react";

const Unlock: React.FC = () => {
    return (
        <div className="relative w-full max-w-md mx-auto">
            {/* Background card - tilted */}
            <div className="
                absolute inset-0 
                rounded-2xl border-4 border-black bg-black 
                transform rotate-[-3deg] 
                -z-10
                shadow-lg
            " />

            {/* Top/main card */}
            <div className="relative z-10 rounded-2xl border-4 border-black bg-zinc-50 overflow-hidden">
                {/* Top bar with circles */}
                <div className="flex items-center gap-2 px-4 pt-4">
                    <span className="h-3 w-3 rounded-full bg-red-500 border-2 border-black"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-400 border-2 border-black"></span>
                    <span className="h-3 w-3 rounded-full bg-green-500 border-2 border-black"></span>
                </div>

                {/* Body */}
                <div className="px-6 py-6 flex flex-col items-center text-center">
                    <p className="mb-6 text-base md:text-lg">
                        Unlock the puzzles
                    </p>

                    {/* Button */}
                    <button
                        className="
                            px-6 py-2 rounded-full
                            bg-pink-400
                            border-2 border-black
                            font-bold text-lg
                            shadow-[3px_3px_0_0_#000]
                            active:translate-y-[2px] active:shadow-none
                            transition-all
                        "
                    >
                        Buy free tickets
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Unlock;