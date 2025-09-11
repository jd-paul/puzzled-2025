// components/window-image.tsx
import { Ellipsis, Minus, Album, SquareX } from "lucide-react";

export function WindowImage({
    src,
    alt,
    title,
}: { src: string; alt: string; title: string }) {
    return (
        <figure className="flex h-full w-full flex-col rounded-xl border-[6px] border-black bg-white shadow-[12px_12px_0_0_#000] overflow-hidden">
            {/* title bar */}
            <div className="flex items-center justify-between border-b-[6px] border-black bg-[#FEF5D0] px-3 py-1">
                <Ellipsis className="h-6 w-6 text-black" />
                <div className="flex items-center gap-1">
                    <Minus className="h-5 w-5 text-black stroke-3" />
                    <Album className="h-5 w-5 text-black stroke-3" />
                    <SquareX className="h-5 w-5 text-black stroke-3" />
                </div>
            </div>

            {/* image */}
            <img src={src} alt={alt} className="h-full w-full object-cover" />

            {/* caption */}
            <figcaption className="border-t-[6px] border-black bg-white px-5 py-3 text-lg font-extrabold">
                {title}
            </figcaption>
        </figure>
    );
}
