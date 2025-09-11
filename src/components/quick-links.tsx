// components/quick-links.tsx
import Link from 'next/link';
import { Puzzle, Link as ExternalLink } from 'lucide-react';

type Item = { href: string; label: string; external?: boolean };

const links: Item[] = [
  { href: '/puzzled-2024', label: 'Puzzled 2024' },
  { href: 'https://www.instagram.com/kclpuzzled/', label: 'Socials', external: true },
  { href: '/about', label: 'Meet the team' },
];

export default function QuickLinks() {
  return (
    <div className="grid-cols-1 md:grid-cols-3 gap-4 hidden md:grid">
      {links.map((l) => {
        const base =
          "inline-flex w-full items-center justify-center gap-2 rounded-xl border-[4px] border-black px-4 py-2 text-lg font-extrabold shadow-[6px_6px_0_0_#000] hover:translate-y-[1px] hover:shadow-[4px_4px_0_0_#000] transition bg-white";

        const content = (
          <>
            {l.label}
            {l.external ? (
              <ExternalLink className="size-4 stroke-3" />
            ) : (
              <Puzzle className="size-4 stroke-3" />
            )}
          </>
        );

        return l.external ? (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${base}`}
          >
            {content}
          </a>
        ) : (
          <Link key={l.href} href={l.href} className={`${base}`}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}
