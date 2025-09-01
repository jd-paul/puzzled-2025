"use client"

import { BookOpenCheck, Squirrel, User } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <section
          id="hero"
          className="relative flex items-center justify-center overflow-hidden text-black bg-[#FFF4DD]"
          style={{ minHeight: "calc(100vh - 64px)" }}
        >

          <div className="relative z-20 max-w-6xl mx-auto flex flex-col items-center justify-center w-full py-4 px-4">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-serif">
                Puzzled 2025
              </h1>

              <div
                className="
    relative w-full max-w-md
    rounded-md border-4 border-black
    bg-[#FFF4DD]
    shadow-[6px_6px_0_0_#000]
    text-left
  "
              >
                {/* Top bar with circles */}
                <div className="flex items-center gap-2 border-b-4 border-black px-3 py-2 bg-[#f0e9da]">
                  <span className="h-3 w-3 rounded-full bg-red-500 border-2 border-black"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-400 border-2 border-black"></span>
                  <span className="h-3 w-3 rounded-full bg-green-500 border-2 border-black"></span>
                </div>

                {/* Body */}
                <div className="px-6 py-6">
                  <p className="mb-6 text-base md:text-lg">
                    Lorem ipsum dolor sit amet, consectetuer.
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
                    Buy tickets
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section
          id="about"
          className="relative flex items-center justify-center overflow-hidden text-black bg-[#790000] border-t-3 border-black"
          style={{ minHeight: "calc(100vh)" }}
        >

        </section>
      </div>
    </>
  )
}
