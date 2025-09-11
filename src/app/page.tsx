"use client"

import Navbar from "@/components/navbar"
import CssPuzzleBackground from "@/components/css-puzzle-background"
import CssHatchBackground from "@/components/css-hatch-background"
import HelloComponent from "@/components/hello-component"

import MainCard from "@/components/main-card"
import QuickLinks from "@/components/quick-links"
import PicturesCard from "@/components/pictures-card"

export default function Home() {
  const waveSvg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'>
      <path d='M0 0v80l227.5 18c12.1 1 22.5-8.6 22.5-20.7s10.4-21.8 22.5-20.8l205 16.3c12.1 1 22.5-8.6 22.5-20.8s10.4-21.7 22.5-20.8l205 16.3c12.1 1 22.5-8.6 22.5-20.8S760.4 5 772.5 6L1000 24V0H0Z'/>
    </svg>`
  );

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
            z-50"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-5">
          <QuickLinks />
        </div>
        <CssHatchBackground />

        {/* Container */}
        <div className="relative w-full max-w-6xl px-5 py-24 text-black">

          <HelloComponent />

          <h1 className="text-[clamp(1.8rem,6vw,2.75rem)] font-extrabold leading-[0.95] mb-4 mt-12">
            Previous Pictures
          </h1>
          <PicturesCard />
        </div>
      </section>
    </div>
  )
}
