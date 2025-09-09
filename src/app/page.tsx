"use client"

import Navbar from "@/components/navbar"
import BottomBar from "@/components/bottom-bar"
import CssGridBackground from "@/components/css-grid-background"
import MainCard from "@/components/main-card"
import About from "@/components/about"
import { PolaroidCard } from "@/components/polaroid-card"


export default function Home() {
  const waveSvg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'>
      <path d='M0 0v80l227.5 18c12.1 1 22.5-8.6 22.5-20.7s10.4-21.8 22.5-20.8l205 16.3c12.1 1 22.5-8.6 22.5-20.8s10.4-21.7 22.5-20.8l205 16.3c12.1 1 22.5-8.6 22.5-20.8S760.4 5 772.5 6L1000 24V0H0Z'/>
    </svg>`
  );

  return (
    <div className="bg-black">
      <div className="flex flex-col">
        <section
          id="hero"
          className="
            relative flex items-center justify-center
            overflow-hidden text-black
            rounded-[2rem] z-10 border-3 border-black
          "
          style={{ minHeight: "calc(100vh)" }}
        >
          <div className="absolute inset-x-0 top-0 z-30 pt-3">
            <Navbar />
          </div>

          <CssGridBackground />

          {/* Container */}
          <div className="px-5 flex flex-col md:flex-row items-start gap-6">
            <div className="">
              <PolaroidCard
                imageUrl="/people/winners.jpg"
                logoText="Puzzled"
                subtitle="Autumn '25"
                date="09/25"
              />
            </div>

            <div className="">
              <MainCard />
            </div>


          </div>


          <div className="absolute inset-x-0 bottom-0 z-30 pb-3">
            <BottomBar />
          </div>
        </section>


        <section
          id="about"
          className="relative overflow-hidden bg-amber-100 rounded-[2rem] z-10 border-3 border-black min-h-screen"
        >
          {/* Top wave (overlay, not a flex column) */}
          {/* <div className="pointer-events-none absolute inset-x-0 top-[-2.5] h-24 z-20">
            <div
              className="h-full w-full"
              style={{
                WebkitMaskImage: `url("data:image/svg+xml;utf8,${waveSvg}")`,
                maskImage: `url("data:image/svg+xml;utf8,${waveSvg}")`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                backgroundColor: '#000', // the visible wave color
              }}
            />
          </div> */}

          {/* Container */}
          <div className="relative w-full max-w-6xl px-5 py-32 text-black">
          </div>

          {/* Bottom wave (overlay, not a flex column) */}
          {/* <div className="pointer-events-none absolute inset-x-0 bottom-[-2.5] h-24 z-20">
            <div
              className="h-full w-full -scale-y-100 -scale-x-100"   // ⬅️ flips vertically
              style={{
                WebkitMaskImage: `url("data:image/svg+xml;utf8,${waveSvg}")`,
                maskImage: `url("data:image/svg+xml;utf8,${waveSvg}")`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                WebkitMaskPosition: 'bottom left',
                maskPosition: 'bottom left',
                backgroundColor: '#000',
              }}
            />
          </div> */}
        </section>


      </div>
    </div>
  )
}
