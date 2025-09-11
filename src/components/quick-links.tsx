// components/quick-links.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const links = [
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function QuickLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {links.map(l => (
        <Link
          key={l.href}
          href={l.href}
          className="group flex items-center justify-between rounded-xl border-[3px] border-black bg-white px-4 py-3 shadow-[4px_4px_0_#000] hover:-translate-y-0.5 transition"
        >
          <span className="font-semibold">{l.label}</span>
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      ))}
    </div>
  );
}
