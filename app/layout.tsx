import type { Metadata } from 'next';
import './globals.css';
import Nav from './components/Nav';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nevada County Natural Resources Report',
  description:
    "A scientifically-sound analysis of the distribution and characteristics of Nevada County's watersheds, habitats, and plant and animal species.",
  keywords:
    'Nevada County Natural Resources Report, biological resources, open space, wildlife, vegetation, water quality, forests',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col text-sm">
        {/* Header bar — full width on mobile and desktop */}
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

        <div className="flex flex-1">
          {/* Nav: mobile header + drawer OR desktop sidebar */}
          <Nav />

          {/* Main content area */}
          <main className="flex-1 min-w-0 px-4 py-6 lg:px-8 lg:py-8 max-w-4xl">
            {children}
          </main>
        </div>

        {/* Footer */}
        <footer
          className="px-6 py-2 border-t border-[#b8b880] text-xs text-gray-700"
          style={{ backgroundColor: '#CCCC99' }}
        >
          <span>©2002, Nevada County Planning Department. Contact: </span>
          <a
            href="mailto:Kateri.Harrison@co.nevada.ca.us"
            className="font-semibold hover:text-[#cc6600] transition-colors"
          >
            Kateri.Harrison@co.nevada.ca.us
          </a>
          <span className="mx-2">·</span>
          <span>Design ©2002 Centauria.com · Converted to Next.js 2025</span>
        </footer>
      </body>
    </html>
  );
}
