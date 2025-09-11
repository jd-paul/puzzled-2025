// components/pictures-card.tsx
import { WindowImage } from "./window-image";

export default function PicturesCard() {
    return (
        <div
            className="
        grid gap-6
        grid-cols-2 auto-rows-[220px]
        md:auto-rows-[260px]
        lg:grid-cols-5
      "
        >
            {/* BIG left (3 of 5 cols, 2 rows) */}
            <div className="col-span-2 lg:col-span-3 lg:row-span-2 min-w-0">
                <WindowImage
                    src="/people/winners.jpg"
                    alt="Winners of Puzzled 2024"
                    title="Winners of Puzzled 2024!"
                />
            </div>

            {/* two small on the right, top row */}
            <div className="col-span-1 lg:col-span-1 min-w-0">
                <WindowImage src="/people/reading-instructions.jpg" alt="Photo 2" title="Groups of 5+!" />
            </div>
            <div className="col-span-1 lg:col-span-1 min-w-0">
                <WindowImage src="/people/big-group.jpeg" alt="Photo 3" title="300+ attendees!" />
            </div>

            {/* wide on the right, bottom row (2 of 5 cols) */}
            <div className="col-span-2 lg:col-span-2 min-w-0">
                <WindowImage src="/people/committee.jpg" alt="Photo 4" title="Backed by dedicated volunteers!" />
            </div>
        </div>
    );
}
