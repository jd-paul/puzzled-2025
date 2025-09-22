"use client";
import React from 'react';
import CssHatchBackground from '@/components/css-hatch-background';
import Navbar from "@/components/navbar";
import { WindowImage } from "../../components/window-image";

const Puzzled2024Page: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section
        id="about"
        className="relative flex items-center justify-center overflow-visible text-black bg-[#FFA3AF] z-50 border-b-[6px] border-black min-h-[100dvh]"
      >
        <div className="absolute inset-x-0 top-0 z-30 pt-3">
          <Navbar />
        </div>
        <CssHatchBackground />

        {/* Container */}
        <div className="relative w-full max-w-6xl px-5 py-24 text-black">
          <h1 className="text-[clamp(1.8rem,6vw,2.75rem)] font-extrabold leading-[1.2] mb-4 mt-12">
            Pictures from Puzzled 2024
          </h1>
          
          <div
            className="
              grid grid-cols-6 grid-rows-3 gap-6
              w-full mx-auto max-h-[150dvh]
            "
          >
            {/* .div1 => grid-area: 1 / 1 / 2 / 5 */}
            <div className="col-start-1 col-end-5 row-start-1 row-end-2">
              <div className="h-full w-full">
                <WindowImage
                  src="/images/puzzled-2024/puzzled-2024_1-compressed.jpg"
                  alt="Puzzled 2024 Photo 1"
                />
              </div>
            </div>

            {/* .div2 => grid-area: 1 / 5 / 2 / 7 */}
            <div className="col-start-5 col-end-7 row-start-1 row-end-2">
              <div className="h-full w-full">
                <WindowImage
                  src="/images/puzzled-2024/puzzled-2024_2-compressed.jpg"
                  alt="Puzzled 2024 Photo 2"
                />
              </div>
            </div>

            {/* .div6 => grid-area: 2 / 1 / 3 / 4 */}
            <div className="col-start-1 col-end-4 row-start-2 row-end-3">
              <div className="h-full w-full">
                <WindowImage
                  src="/images/puzzled-2024/puzzled-2024_6-compressed.jpg"
                  alt="Puzzled 2024 Photo 6"
                />
              </div>
            </div>

            {/* .div5 => grid-area: 2 / 4 / 3 / 7 */}
            <div className="col-start-4 col-end-7 row-start-2 row-end-3">
              <div className="h-full w-full">
                <WindowImage
                  src="/images/puzzled-2024/puzzled-2024_5-compressed.jpg"
                  alt="Puzzled 2024 Photo 5"
                />
              </div>
            </div>

            {/* .div3 => grid-area: 3 / 1 / 4 / 3 */}
            <div className="col-start-1 col-end-3 row-start-3 row-end-4">
              <div className="h-full w-full">
                <WindowImage
                  src="/images/puzzled-2024/puzzled-2024_3-compressed.jpg"
                  alt="Puzzled 2024 Photo 3"
                />
              </div>
            </div>

            {/* .div4 => grid-area: 3 / 3 / 4 / 7 */}
            <div className="col-start-3 col-end-7 row-start-3 row-end-4">
              <div className="h-full w-full">
                <WindowImage
                  src="/images/puzzled-2024/puzzled-2024_4-compressed.jpg"
                  alt="Puzzled 2024 Photo 4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Puzzled2024Page;
