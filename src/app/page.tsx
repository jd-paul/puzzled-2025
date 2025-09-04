"use client"

import { BookOpenCheck, Squirrel, User } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import CssGridBackground from "@/components/css-grid-background"
import FloorPattern from '@/components/css-floor-pattern';
import Unlock from "@/components/unlock"

export default function Home() {
  return (
    <>
      <div className="flex flex-col">

        <section
          id="hero"
          className="
              relative flex items-center justify-center 
              overflow-hidden text-black bg-black
              rounded-t-[2rem] z-10
            "
          style={{ minHeight: "calc(100vh)" }}
        >
          <div className="absolute inset-x-0 top-0 z-30">
            <Navbar />
          </div>

          <CssGridBackground />

          <div className="relative z-20 max-w-6xl mx-auto flex flex-col items-center justify-center w-full py-4 px-4">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-serif">
                Puzzled 2025
              </h1>

              {/* Pop-up text with stacked background */}
              <div className="relative w-full max-w-md">
                {/* farthest/back */}
                <Unlock />
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
