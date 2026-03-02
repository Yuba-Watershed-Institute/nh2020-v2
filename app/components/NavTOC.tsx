'use client';

import Link from 'next/link';
import { useState } from 'react';

const toc = [
  {
    chapter: 'Executive Summary',
    href: '/summary',
    sections: [
      { label: 'Background', href: '/summary#es-background' },
      { label: 'Scientific Advisory Committee', href: '/summary#es-sac' },
      { label: 'Mapping by Watershed', href: '/summary#es-mapping' },
      { label: 'Compilation of Databases', href: '/summary#es-databases' },
      { label: 'Verification & Validation', href: '/summary#es-verification' },
      { label: 'Peer Review', href: '/summary#es-peer-review' },
      { label: 'Species Occurrence & Habitats', href: '/summary#es-species' },
    ],
  },
  {
    chapter: 'Chapter I: Introduction',
    href: '/chapter1',
    sections: [
      { label: 'Background', href: '/chapter1#c1-background' },
      { label: 'Role of the SAC', href: '/chapter1#c1-sac' },
      { label: 'Watershed-Based Approach', href: '/chapter1#c1-watershed' },
      { label: '— Overview', href: '/chapter1#c1-overview', indent: true },
      { label: '— Advantages & Disadvantages', href: '/chapter1#c1-advantages', indent: true },
      { label: 'Peer-Review Process', href: '/chapter1#c1-peer-review' },
    ],
  },
  {
    chapter: 'Chapter II: Methods',
    href: '/chapter2',
    sections: [
      { label: 'Elevation Zones', href: '/chapter2#c2-elevation-zones' },
      { label: '— Habitat Classification', href: '/chapter2#c2-habitat-classification', indent: true },
      { label: '— Plant Diversity', href: '/chapter2#c2-plant-diversity', indent: true },
      { label: '— Redlist & Yellowlist Plants', href: '/chapter2#c2-redyellow-plants', indent: true },
      { label: '— Vertebrate Diversity', href: '/chapter2#c2-vertebrate-diversity', indent: true },
      { label: '— Redlist & Yellowlist Animals', href: '/chapter2#c2-redyellow-animals', indent: true },
      { label: '— Wildlife Habitat Relationships', href: '/chapter2#c2-whr', indent: true },
      { label: '— Invasive Species', href: '/chapter2#c2-invasive', indent: true },
      { label: 'GIS Mapping', href: '/chapter2#c2-gis' },
      { label: '— Data Sources', href: '/chapter2#c2-data-sources', indent: true },
      { label: '— GIS Techniques', href: '/chapter2#c2-gis-techniques', indent: true },
      { label: '— Ecosystem Themes', href: '/chapter2#c2-ecosystem-themes', indent: true },
      { label: '— Error Correction', href: '/chapter2#c2-error-correction', indent: true },
      { label: 'Watershed Surveys', href: '/chapter2#c2-watershed-surveys' },
      { label: '— Office Verification', href: '/chapter2#c2-office-verification', indent: true },
      { label: '— Field Verification', href: '/chapter2#c2-field-verification', indent: true },
      { label: 'Feedback & Data Correction', href: '/chapter2#c2-feedback' },
    ],
  },
  {
    chapter: 'Chapter III: Results',
    href: '/chapter3',
    sections: [
      { label: 'Species Occurrence & Habitats', href: '/chapter3#c3-species-occurrence' },
      { label: '— Plant Diversity', href: '/chapter3#c3-plant-diversity', indent: true },
      { label: '— Redlist Plants', href: '/chapter3#c3-redlist-plants', indent: true },
      { label: '— Yellowlist Plants', href: '/chapter3#c3-yellowlist-plants', indent: true },
      { label: '— Plant–Ecosystem Relations', href: '/chapter3#c3-plant-ecosystems', indent: true },
      { label: '— Invasive Plants', href: '/chapter3#c3-non-native-plants', indent: true },
      { label: '— Vertebrate Diversity', href: '/chapter3#c3-vertebrate-diversity', indent: true },
      { label: '— Redlist Animals', href: '/chapter3#c3-redlist-animals', indent: true },
      { label: '— Yellowlist Animals', href: '/chapter3#c3-yellowlist-animals', indent: true },
      { label: '— Wildlife & Habitat Relationships', href: '/chapter3#c3-wildlife-habitat', indent: true },
      { label: 'Aquatic Ecosystems', href: '/chapter3#c3-riverine' },
      { label: '— Riverine', href: '/chapter3#c3-riverine', indent: true },
      { label: '— Lacustrine', href: '/chapter3#c3-lacustrine', indent: true },
      { label: 'Terrestrial Ecosystems', href: '/chapter3#c3-barren-areas' },
      { label: '— Barren Areas, Rocks & Cliffs', href: '/chapter3#c3-barren-areas', indent: true },
      { label: '— Hydraulic Diggings', href: '/chapter3#c3-hydraulic-diggings', indent: true },
      { label: '— Annual Grasslands', href: '/chapter3#c3-annual-grasslands', indent: true },
      { label: '— Montane Meadows', href: '/chapter3#c3-montane-meadows', indent: true },
      { label: '— Fresh Emergent Wetlands', href: '/chapter3#c3-fresh-wetlands', indent: true },
      { label: '— Foothill Chaparral', href: '/chapter3#c3-foothill-chaparral', indent: true },
      { label: '— Montane Chaparral', href: '/chapter3#c3-montane-chaparral', indent: true },
      { label: '— Subalpine Dwarf-Scrub', href: '/chapter3#c3-subalpine-scrub', indent: true },
      { label: '— Eastside Scrub', href: '/chapter3#c3-eastside-scrub', indent: true },
      { label: '— Foothill Hardwood Woodlands', href: '/chapter3#c3-foothill-hardwood', indent: true },
      { label: '— Oak-Foothill Pine Woodlands', href: '/chapter3#c3-oak-foothill-pine', indent: true },
      { label: '— Montane Hardwood Woodlands', href: '/chapter3#c3-montane-hardwood', indent: true },
      { label: '— Foothill Riparian Woodlands', href: '/chapter3#c3-foothill-riparian', indent: true },
      { label: '— Montane Riparian Woodlands', href: '/chapter3#c3-montane-riparian', indent: true },
      { label: '— Eastside Riparian Woodlands', href: '/chapter3#c3-eastside-riparian', indent: true },
      { label: 'Forested Ecosystems', href: '/chapter3#c3-forested-ecosystems' },
      { label: '— Aspen Woodlands', href: '/chapter3#c3-aspen-woodlands', indent: true },
      { label: '— Ponderosa Pine Forest', href: '/chapter3#c3-ponderosa-pine', indent: true },
      { label: '— Mixed-Conifer Forest', href: '/chapter3#c3-mixed-conifer', indent: true },
      { label: '— Red Fir Forest', href: '/chapter3#c3-red-fir', indent: true },
      { label: '— Lodgepole Pine Forest', href: '/chapter3#c3-lodgepole-pine', indent: true },
      { label: '— Subalpine Conifer Forest', href: '/chapter3#c3-subalpine-conifer', indent: true },
      { label: '— Eastside Pine Forest', href: '/chapter3#c3-eastside-pine', indent: true },
      { label: '— Urban & Residential Areas', href: '/chapter3#c3-urban', indent: true },
      { label: '— Orchards', href: '/chapter3#c3-orchards', indent: true },
      { label: '— Vineyards', href: '/chapter3#c3-vineyards', indent: true },
      { label: '— Croplands', href: '/chapter3#c3-croplands', indent: true },
      { label: 'Small-Patch Ecosystems', href: '/chapter3#c3-seeps-springs' },
      { label: '— Seeps & Springs', href: '/chapter3#c3-seeps-springs', indent: true },
      { label: '— Fens & Bogs', href: '/chapter3#c3-fens-bogs', indent: true },
      { label: '— Vernal Pools', href: '/chapter3#c3-vernal-pools', indent: true },
      { label: '— Late-Successional Forest', href: '/chapter3#c3-late-successional', indent: true },
      { label: '— McNab Cypress', href: '/chapter3#c3-mcnab-cypress', indent: true },
      { label: '— Whitebark Pine', href: '/chapter3#c3-whitebark-pine', indent: true },
      { label: '— Knobcone Pine', href: '/chapter3#c3-knobcone-pine', indent: true },
      { label: '— Leather Oak Chaparral', href: '/chapter3#c3-leather-oak', indent: true },
      { label: '— Serpentine Soils', href: '/chapter3#c3-serpentine-soils', indent: true },
      { label: '— Gabbrodiorite Soils', href: '/chapter3#c3-gabbrodiorite', indent: true },
      { label: '— Volcanic Lava Caps', href: '/chapter3#c3-volcanic', indent: true },
      { label: '— Caves & Mine Shafts', href: '/chapter3#c3-caves-mines', indent: true },
      { label: 'Physical Data', href: '/chapter3#c3-elevation-range' },
      { label: '— Elevation Range', href: '/chapter3#c3-elevation-range', indent: true },
      { label: '— Slope', href: '/chapter3#c3-slope', indent: true },
      { label: '— Public & Private Lands', href: '/chapter3#c3-public-private', indent: true },
      { label: '— Roads & Roadless Areas', href: '/chapter3#c3-roads', indent: true },
      { label: '— Unimproved Private Lands', href: '/chapter3#c3-unimproved-lands', indent: true },
      { label: '— Arable Lands', href: '/chapter3#c3-arable-lands', indent: true },
      { label: '— Irrigated Lands', href: '/chapter3#c3-irrigated-lands', indent: true },
      { label: '— Canals', href: '/chapter3#c3-canals', indent: true },
    ],
  },
  {
    chapter: 'Chapter IV: Sources',
    href: '/chapter4',
    sections: [
      { label: 'Literature Cited', href: '/chapter4#c4-literature' },
    ],
  },
];

export default function NavTOC() {
  const [open, setOpen] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});

  const toggleChapter = (chapter: string) => {
    setExpandedChapters(prev => ({ ...prev, [chapter]: !prev[chapter] }));
  };

  return (
    <div className="mt-1">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 rounded text-xs font-bold uppercase tracking-wide text-gray-500 hover:text-[#cc6600] transition-colors"
        style={{ fontVariant: 'small-caps' }}
        aria-expanded={open}
      >
        <span>Contents</span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="mt-1 max-h-[60vh] overflow-y-auto pr-1 border-l-2 border-[#CCCC99] ml-3">
          {toc.map(({ chapter, sections }) => (
            <div key={chapter} className="mb-1">
              <button
                onClick={() => toggleChapter(chapter)}
                className="w-full flex items-center justify-between px-2 py-1 text-left text-[10px] font-bold uppercase tracking-wide text-gray-600 hover:text-[#666600] transition-colors"
              >
                <span>{chapter}</span>
                <svg
                  className={`w-2.5 h-2.5 shrink-0 ml-1 transition-transform ${expandedChapters[chapter] ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedChapters[chapter] && (
                <ul className="mb-1">
                  {sections.map(({ label, href, indent }) => (
                    <li key={href + label}>
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`block py-0.5 text-[10px] text-gray-600 hover:text-[#cc6600] transition-colors leading-snug ${indent ? 'pl-4' : 'pl-2'}`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
