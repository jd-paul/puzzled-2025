// app/about.tsx  (or components/about.tsx)
import React from "react";

export default function About() {
  return (
    <section className="mask-container">
      <div className="above-mask-box">
        <div className="box-wrap">
          {/* ↑ Put content that sits ABOVE the torn/curved mask */}
          <p>Above container</p>
        </div>
      </div>

      <div className="mask-box">
        <div className="box-wrap">
          {/* Main masked area */}
          <p>Main container</p>
        </div>
      </div>

      <div className="below-mask-box">
        <div className="box-wrap">
          {/* Content that continues BELOW the mask */}
          <p>Below container</p>
        </div>
      </div>

      <style jsx global>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }
      `}</style>

      <style jsx>{`
        .mask-container {
          container-type: inline-size;
          --mask-head-size: calc(0.1 * 100cqw);
          --mask-foot-size: calc(0.09 * 100cqw);
        }

        .mask-box {
          margin-block: calc(-1 * var(--mask-head-size) - 1px)
            calc(-1 * var(--mask-foot-size) - 1px);
          padding-block: calc(var(--mask-head-size) + 1px)
            calc(var(--mask-foot-size) + 1px);
          mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g transform="scale(1,-1)" transform-origin="50%"><path d="M1000 0H0v52C62.49 28.01 125.02 4 250 4c250.03 0 249.97 96 500 96 124.98 0 187.51-24.01 250-48V0Z"/></g></svg>'),
            linear-gradient(
              transparent calc(var(--mask-head-size) - 1px),
              black calc(var(--mask-head-size) - 1px),
              black calc(100% - var(--mask-foot-size) + 1px),
              transparent calc(100% - var(--mask-foot-size) + 1px)
            ),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" width="1000" height="90"><g transform="scale(1.5,1)" transform-origin="12.5% 50%"><path d="M0 0v100c250 0 375-24 500-48 125 24 250 48 500 48V0H0Z" opacity=".5"/><path d="M0 0v4c250 0 375 24 500 48C625 28 750 4 1000 4V0H0Z"/></g></svg>');
          mask-repeat: no-repeat;
          mask-position: top, center, bottom;
          mask-size: 100%;
          background-color: #aa2068;
          background-image: linear-gradient(90deg, #cc3f47, #808);
        }

        .above-mask-box {
          padding-bottom: var(--mask-head-size);
          display: block;
          background: #404;
        }

        .below-mask-box {
          padding-top: var(--mask-foot-size);
          display: block;
          background: #404;
        }

        .box-wrap {
          padding: 30px;
          color: #fff;
        }
      `}</style>
    </section>
  );
}