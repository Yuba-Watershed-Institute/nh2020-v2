'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SiteHeader() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <header
      className="flex items-center px-4 py-2 pr-16 lg:pr-6 border-b border-[#b8b880] shrink-0"
      style={{ backgroundColor: '#CCCC99' }}
    >
      <Link
        href="/"
        className="font-bold tracking-widest uppercase text-gray-800 hover:text-[#4a5722] transition-colors text-xs lg:text-sm"
      >
        Nevada County Natural Resources Report
      </Link>
    </header>
  );
}
