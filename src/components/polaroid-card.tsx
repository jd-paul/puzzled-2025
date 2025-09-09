"use client"

import type React from "react"

interface PolaroidCardProps {
  imageUrl: string
  logoText: string
  subtitle: string
  date: string
  className?: string
}

export function PolaroidCard({ imageUrl, logoText, subtitle, date, className = "" }: PolaroidCardProps) {
  return (
    <div className={`relative ${className}`} style={{ "--polaroid-size": "320px" } as React.CSSProperties}>
      {/* <div className="absolute top-3 left-3 w-80 h-96 transform rotate-[-12deg] z-0">
        <div className="polaroid-shadow-back">
          <div className="polaroid-back">

          </div>
        </div>
      </div> */}

      {/* Main polaroid with enhanced realism */}
      <div className="relative w-80 h-96 transform transition-all duration-300 z-20">
        {/* <div className="absolute -top-8 left-6 z-30 transform scale-75">
          <svg width="99" height="154" viewBox="0 0 99 154" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="paperclip-shadow" x="0%" y="0%" width="120%" height="120%">
                <feDropShadow dx="0" dy="2" stdDeviation="1" floodOpacity="0.5" />
                <feDropShadow dx="-2" dy="0" stdDeviation="0.5" floodOpacity="0.25" />
                <feDropShadow dx="1" dy="0" stdDeviation="0.25" floodColor="white" floodOpacity="1" />
              </filter>
            </defs>
            <path
              d="M21.56 39.85a15.02 15.02 0 0 1 11.03-2.95h.06a14.3 14.3 0 0 1 10.44 6.01c2.12 3.34 3.05 6.73 5.06 14.23L56 86.38l3.88-.97-7.85-29.3-.09-.29c-1.92-7.17-2.99-11.17-5.5-15.1l-.02-.03-.02-.04a18.3 18.3 0 0 0-13.37-7.73c-5.03-.58-9.76.69-13.83 3.7a18.3 18.3 0 0 0-7.7 13.39l-.01.04v.04c-.21 4.65.86 8.65 2.78 15.82l.6 2.23 4.01-.47-.67-2.5c-2-7.5-2.9-10.9-2.73-14.86.38-4.2 2.59-8 6.04-10.42l.02-.02.03-.02Zm-5.98 50.27L11.4 74.5l-3.86 1.03 4.1 15.33 3.95-.74Z"
              fill="#E4E4E4"
              fillOpacity="0.9"
              filter="url(#paperclip-shadow)"
            />
          </svg>
        </div> */}

        <div className="polaroid-shadow-front">
          <div className="polaroid-front z-10 rounded-xl border-[6px] border-black bg-white">
            {/* Realistic polaroid edges */}
            <div className="polaroid-top-edge" />
            <div className="polaroid-bottom-edge" />

            {/* Paper texture overlay */}
            <div className="paper-texture" />

            {/* Photo well with realistic inset shadow */}
            <div className="photo-well">
              <div className="photo-shadow-overlay" />
              <img src={imageUrl || "/placeholder.svg"} alt="Polaroid photo" className="w-full h-full object-cover" />

              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-black/20 rounded" />

                {/* Logo with enhanced styling */}
                <div className="relative flex items-center gap-2 mb-2 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-green-300 to-blue-400 rounded-lg blur-sm opacity-90" />
                    <div className="absolute inset-0 rounded-lg" />
                    <h1 className="relative text-4xl font-bold text-white px-3 py-1 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_90%)]">
                      {logoText}
                    </h1>
                  </div>
                </div>

                <div className="relative z-10 px-3 py-1 rounded">
                  <p className="text-white text-lg font-medium drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_90%)]">
                    {subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-8  px-2 py-1 rounded">
              <p className="text-white text-2xl font-light tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_90%)] transform -rotate-1">
                {date}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .polaroid-shadow-back {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          box-shadow:
            0px 28px 11px 0px rgba(0,0,0,0),
            0px 16px 9px 0px rgba(0,0,0,0),
            0px 7px 7px 0px rgba(0,0,0,0),
            0px 2px 4px 0px rgba(0,0,0,0),
          transition: box-shadow 0.3s ease;
        }

        .polaroid-back {
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, 
            oklch(32% 0.005 216) 0%, 
            oklch(22% 0.01 216) 80%, 
            oklch(30% 0.005 216) 82%, 
            oklch(25% 0.01 216) 100%);
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }

        .paper-texture-back {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 15px 15px, 25px 25px, 20px 20px;
          mix-blend-mode: soft-light;
          opacity: 0.6;
        }

        .polaroid-shadow-front {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          box-shadow: 
            0px 28px 11px 0px rgba(0,0,0,0.02),
            0px 16px 9px 0px rgba(0,0,0,0.06),
            0px 7px 7px 0px rgba(0,0,0,0.10),
            0px 2px 4px 0px rgba(0,0,0,0.11);
          transition: box-shadow 0.3s ease;
        }

        .polaroid-front {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .polaroid-top-edge {
          position: absolute;
          top: -2px;
          left: 8px;
          right: 8px;
          height: 8px;
          background: linear-gradient(180deg, 
            oklch(100% 0 0 / 100%) 60%, 
            oklch(100% 0 0 / 0%) 100%);
          border-radius: 50px;
          filter: blur(1px);
        }

        .polaroid-bottom-edge {
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 16px;
          background: linear-gradient(0deg, 
            oklch(100% 0 0 / 50%) 60%, 
            oklch(100% 0 0 / 0%) 100%);
        }

        .paper-texture {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 25% 25%, rgba(139,69,19,0.03) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(160,82,45,0.02) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(210,180,140,0.04) 1px, transparent 1px),
            linear-gradient(45deg, transparent 49%, rgba(139,69,19,0.01) 50%, transparent 51%);
          background-size: 12px 12px, 18px 18px, 8px 8px, 20px 20px;
          mix-blend-mode: color-burn;
          opacity: 0.7;
          z-index: 40;
        }

        .photo-well {
          position: relative;
          left: 16px;
          top: 24px;
          width: calc(100% - 32px);
          height: calc(100% - 80px);
          border-radius: 4px;
          background-color: #fff;
          box-shadow: 
            0px -2px 4px -1px rgba(255,255,255,0.25),
            0px 8px 4px -4px rgba(255,255,255,0.1);
          overflow: hidden;
          z-index: 50;
        }

        .photo-shadow-overlay {
          position: absolute;
          inset: 0;
          box-shadow: 
            inset 0 1px 1px 1px rgba(0,0,0,0.2),
            inset 0 4px 8px 0 rgba(0,0,0,0.25);
          pointer-events: none;
          z-index: 10;
        }
      `}</style>
    </div>
  )
}
