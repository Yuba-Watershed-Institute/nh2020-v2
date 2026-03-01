'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/summary', label: 'Executive Summary' },
  { href: '/chapter1', label: 'Chapter I: Introduction' },
  { href: '/chapter2', label: 'Chapter II: Methods' },
  { href: '/chapter3', label: 'Chapter III: Results' },
  { href: '/chapter4', label: 'Chapter IV: Information Sources' },
  { href: '/tables-figures', label: 'Tables, Figures & Appendices' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile nav drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/40" />
          <nav
            className="absolute top-0 left-0 bottom-0 w-72 bg-white shadow-xl z-50 overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="px-4 py-3 border-b" style={{ backgroundColor: '#CCCC99' }}>
              <span className="font-bold text-sm tracking-widest uppercase text-gray-800">Navigation</span>
            </div>
            <ul className="py-2">
              {navLinks.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`block px-5 py-3 text-sm font-semibold border-b border-gray-100 transition-colors ${
                        active
                          ? 'text-[#666600] bg-[#f5f5e8] cursor-default'
                          : 'text-gray-800 hover:text-[#cc6600] hover:bg-[#fafaf0]'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <nav className="hidden lg:block w-52 shrink-0 border-r border-[#CCCC99]">
        <div className="sticky top-0 pt-6 pb-4 px-3">
          <ul className="space-y-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-3 py-2 rounded text-xs font-bold uppercase tracking-wide transition-colors ${
                      active
                        ? 'text-[#666600] cursor-default'
                        : 'text-gray-800 hover:text-[#cc6600]'
                    }`}
                    style={{ fontVariant: 'small-caps' }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile hamburger button — rendered here so parent can position it */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        className="lg:hidden fixed top-3 right-4 z-30 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#4a5722]"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </>
  );
}
