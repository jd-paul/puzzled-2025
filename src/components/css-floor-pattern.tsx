import React from 'react';

type Props = {
  colors?: [string, string]; // [blue, white]
  tile?: number;             // px size of the square
  height?: string;           // how tall the floor is (default 50%)
  fade?: number;             // 0..100, fade into the scene
  perspective?: number;      // strength of 3D perspective effect
};

const FloorTile: React.FC<Props> = ({
  colors = ['#6693BD', '#FFF4DD'],
  tile = 96,
  height = '25vh',
  fade = 30,
  perspective = 300,
}) => {
  const [c1, c2] = colors;

  return (
    <div className="pointer-events-none absolute bottom-0 inset-x-0 -z-10 overflow-hidden border-t-4 border-black" style={{ height }}>
      {/* Perspective container */}
      <div
        className="absolute left-0 w-full h-[140vh] origin-center"
        style={{
          transform: `perspective(${perspective}px) rotateX(60deg) scale(1.5) translateZ(0.1px)`,
          transformStyle: 'preserve-3d',
          bottom: '-20%',
          left: '0',
          right: '0',
          width: '100%',
          backfaceVisibility: 'hidden', // Add this
        }}
      >
        {/* Diagonal checkerboard with 3D effect */}
        <div
          className="absolute inset-0 origin-top"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${tile}' height='${tile}' viewBox='0 0 ${tile} ${tile}'%3E%3Cpath d='M0 0h${tile / 2}v${tile / 2}H0zm${tile / 2} ${tile / 2}h${tile / 2}v${tile / 2}H${tile / 2}z' fill='${encodeURIComponent(c1)}'/%3E%3C/svg%3E")`,
            backgroundSize: `${tile}px ${tile}px`,
            backgroundColor: c2,
            transform: 'translateZ(0)',
            imageRendering: 'crisp-edges',
          }}
        />
      </div>
    </div>
  );
};

export default FloorTile;