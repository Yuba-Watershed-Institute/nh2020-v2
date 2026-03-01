import Image from 'next/image';
import Link from 'next/link';

const navCards = [
  { href: '/summary', label: 'Executive Summary', icon: '📋' },
  { href: '/chapter1', label: 'Chapter I: Introduction', icon: '📖' },
  { href: '/chapter2', label: 'Chapter II: Methods', icon: '🔬' },
  { href: '/chapter3', label: 'Chapter III: Results', icon: '📊' },
  { href: '/chapter4', label: 'Chapter IV: Information Sources', icon: '📚' },
  { href: '/tables-figures', label: 'Tables, Figures & Appendices', icon: '🗺️' },
];

export default function Home() {
  return (
    <div>
      {/* Cover image banner */}
      <div className="overflow-hidden rounded-sm mb-6 -mx-4 lg:-mx-8">
        <Image
          src="/images/cover_top.gif"
          alt="Nevada County Natural Resources Report"
          width={1200}
          height={68}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Navigation cards */}
        <nav className="w-full md:w-48 shrink-0">
          <ul className="space-y-1">
            {navCards.map(({ href, label, icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-2 px-3 py-2 rounded text-xs font-bold uppercase tracking-wide text-gray-800 hover:text-[#cc6600] transition-colors"
                  style={{ fontVariant: 'small-caps' }}
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="hidden md:block w-px bg-[#CCCC99]" />

        {/* Welcome content */}
        <div className="flex-1 min-w-0">
          <div className="prose prose-sm max-w-none">
            <p>
              <strong>
                Prepared for: Nevada County Planning Department, 950 Maidu Avenue, Nevada City, CA 95959
              </strong>
            </p>
            <p>
              <strong>Prepared by:</strong>{' '}
              <a href="mailto:tbeedy@jps.net">Dr. Edward C. Beedy</a>, Sierra Business Council
              Scientific Coordinator;{' '}
              <a href="mailto:brussard@biodiversity.unr.edu">Dr. Peter Brussard</a>, University of
              Nevada, Reno; Chairman, Scientific Advisory Committee
            </p>

            <h4>Acknowledgments</h4>
            <p>
              The authors extend their gratitude to the following peer reviewers who provided detailed
              comments and fact-checking of the entire document on short notice: Ms. Vicki Campbell,
              U.S. Fish and Wildlife Service, Sacramento; Dr. Frank Davis, Donald Bren School of
              Environmental Science, University of California Santa Barbara; Mr. Jeff Finn, Regional
              Wildlife Biologist, California Department of Fish and Game, Nevada County; Dr. Jim
              Gaither, The Nature Conservancy, California Field Office, San Francisco; Dr. John Harris,
              Biology Department, Mills College, Oakland; Mr. John Koltun, Geographic Resource
              Solutions, Anchorage, Alaska; Dr. William F. Laudenslayer, Jr., U.S. Forest Service,
              Fresno; Dr. Thomas Parker, Biology Department, San Francisco State University; Dr.
              Michael Soule, Professor Emeritus, College of Natural Resources, University of California,
              Santa Cruz; and Dr. Peter Stine, U.S. Forest Service, Sacramento.
            </p>

            <p className="text-xs text-gray-600">
              ©2002, Nevada County Planning Department. Contact:{' '}
              <a href="mailto:Kateri.Harrison@co.nevada.ca.us">Kateri.Harrison@co.nevada.ca.us</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
