"use client"

import Navbar from "@/components/navbar"
import CssPuzzleBackground from "@/components/css-puzzle-background"
import CssHatchBackground from "@/components/css-hatch-background"
import HelloComponent from "@/components/hello-component"

import MainCard from "@/components/main-card"
import QuickLinks from "@/components/quick-links"
import PicturesCard from "@/components/pictures-card"
import { Instagram } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      <section
        id="hero"
        className="
            relative flex items-center justify-center
            overflow-hidden text-black
            z-20 border-b-[6px] border-black
            h-[clamp(720px,100svh,1100px)] bg-[#FFF4DD]
          "
      >
        <div className="absolute inset-x-0 top-0 z-30 pt-3">
          <Navbar />
        </div>

        <CssPuzzleBackground />

        {/* Container */}
        <div className="px-5 flex flex-col md:flex-row items-start gap-6">
          <div className="">
            <MainCard />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative flex items-center justify-center
            overflow-visible text-black bg-[#FEF5D0]
            z-50 border-b-[6px] border-black"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-5 z-100">
          <QuickLinks />
        </div>
        <CssHatchBackground />

        {/* Container */}
        <div className="relative w-full max-w-6xl px-5 py-24 text-black">

          <HelloComponent />

          <h1 className="text-[clamp(1.8rem,6vw,2.75rem)] font-extrabold leading-[1.2] mb-4 mt-12">
            Previous Pictures
          </h1>
          <PicturesCard />
        </div>
      </section>

      <section
        id="footer"
        className="
        relative flex items-center justify-between
        overflow-hidden text-black
        z-20 py-6 px-8 bg-amber-600
      ">
        {/* Left text */}
        <p className="text-black font-black text-lg">
          Puzzled {new Date().getFullYear()}
        </p>

        {/* Right logos */}
        <a
          href="https://instagram.com/kclpuzzled" // replace with actual handle
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Instagram className="w-5 h-5 stroke-3" />
          <span className="font-bold text-lg">Instagram</span>
        </a>
      </section>
    </div>
  )
}
