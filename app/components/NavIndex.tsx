'use client';

import Link from 'next/link';
import { useState } from 'react';

type IndexEntry = { label: string; links: { href: string; short: string }[] };

const indexEntries: IndexEntry[] = [
  { label: 'Agricultural lands', links: [{ href: '/chapter3#c3-orchards', short: 'Ch. III' }] },
  { label: 'Annual Grasslands', links: [{ href: '/chapter3#c3-annual-grasslands', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Amphibians', links: [{ href: '/chapter3#c3-vertebrate-diversity', short: 'Ch. III' }] },
  { label: 'Arable lands', links: [{ href: '/chapter3#c3-arable-lands', short: 'Ch. III' }] },
  { label: 'Aspen Woodlands', links: [{ href: '/chapter3#c3-aspen-woodlands', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Barren Areas', links: [{ href: '/chapter3#c3-barren-areas', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Bear River', links: [{ href: '/chapter1#c1-watershed', short: 'Ch. I' }] },
  { label: 'Bald eagle', links: [{ href: '/chapter3#c3-redlist-animals', short: 'Ch. III' }] },
  { label: 'CalFlora', links: [{ href: '/chapter2#c2-plant-diversity', short: 'Ch. II' }] },
  { label: 'CALWATER', links: [{ href: '/chapter2#c2-elevation-zones', short: 'Ch. II' }] },
  { label: 'Canals', links: [{ href: '/chapter3#c3-canals', short: 'Ch. III' }] },
  { label: 'Caves & Mine Shafts', links: [{ href: '/chapter3#c3-caves-mines', short: 'Ch. III' }] },
  { label: 'CNDDB', links: [{ href: '/chapter2#c2-redyellow-plants', short: 'Ch. II' }] },
  { label: 'Community Advisory Committee', links: [{ href: '/chapter1#c1-background', short: 'Ch. I' }] },
  { label: 'Contiguous Unimproved Lands', links: [{ href: '/chapter3#c3-unimproved-lands', short: 'Ch. III' }] },
  { label: 'Croplands', links: [{ href: '/chapter3#c3-croplands', short: 'Ch. III' }] },
  { label: 'CWHR system', links: [{ href: '/chapter2#c2-habitat-classification', short: 'Ch. II' }] },
  { label: 'Dams & reservoirs', links: [{ href: '/chapter3#c3-lacustrine', short: 'Ch. III' }] },
  { label: 'Eastside Pine Forest', links: [{ href: '/chapter3#c3-eastside-pine', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Eastside Riparian Woodlands', links: [{ href: '/chapter3#c3-eastside-riparian', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Eastside Scrub', links: [{ href: '/chapter3#c3-eastside-scrub', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Eastside watersheds', links: [{ href: '/chapter2#c2-elevation-zones', short: 'Ch. II' }] },
  { label: 'Elevation zones', links: [{ href: '/chapter2#c2-elevation-zones', short: 'Ch. II' }] },
  { label: 'Endangered species', links: [{ href: '/chapter2#c2-redyellow-plants', short: 'Ch. II' }, { href: '/chapter3#c3-redlist-plants', short: 'Ch. III' }] },
  { label: 'Fens & Bogs', links: [{ href: '/chapter3#c3-fens-bogs', short: 'Ch. III' }] },
  { label: 'Foothill Chaparral', links: [{ href: '/chapter3#c3-foothill-chaparral', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Foothill Hardwood Woodlands', links: [{ href: '/chapter3#c3-foothill-hardwood', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Foothill Riparian Woodlands', links: [{ href: '/chapter3#c3-foothill-riparian', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Foothill watersheds', links: [{ href: '/chapter2#c2-elevation-zones', short: 'Ch. II' }] },
  { label: 'Fresh Emergent Wetlands', links: [{ href: '/chapter3#c3-fresh-wetlands', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Gabbrodiorite Soils', links: [{ href: '/chapter3#c3-gabbrodiorite', short: 'Ch. III' }] },
  { label: 'General Plan (1995)', links: [{ href: '/chapter1#c1-background', short: 'Ch. I' }] },
  { label: 'GIS (Geographic Information System)', links: [{ href: '/chapter2#c2-gis', short: 'Ch. II' }, { href: '/summary#es-databases', short: 'Summary' }] },
  { label: 'GIS data themes', links: [{ href: '/chapter2#c2-ecosystem-themes', short: 'Ch. II' }] },
  { label: 'GIS error correction', links: [{ href: '/chapter2#c2-error-correction', short: 'Ch. II' }] },
  { label: 'GIS techniques', links: [{ href: '/chapter2#c2-gis-techniques', short: 'Ch. II' }] },
  { label: 'Habitat classification', links: [{ href: '/chapter2#c2-habitat-classification', short: 'Ch. II' }] },
  { label: 'Hydraulic Diggings', links: [{ href: '/chapter3#c3-hydraulic-diggings', short: 'Ch. III' }] },
  { label: 'Invasive plants', links: [{ href: '/chapter2#c2-invasive', short: 'Ch. II' }, { href: '/chapter3#c3-non-native-plants', short: 'Ch. III' }] },
  { label: 'Irrigated lands', links: [{ href: '/chapter3#c3-irrigated-lands', short: 'Ch. III' }] },
  { label: 'Knobcone Pine', links: [{ href: '/chapter3#c3-knobcone-pine', short: 'Ch. III' }] },
  { label: 'Lacustrine ecosystems', links: [{ href: '/chapter3#c3-lacustrine', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Land ownership', links: [{ href: '/chapter3#c3-public-private', short: 'Ch. III' }, { href: '/chapter3#c3-large-patch-ownership', short: 'Ch. III' }] },
  { label: 'Large-patch ecosystems', links: [{ href: '/chapter2#c2-habitat-classification', short: 'Ch. II' }, { href: '/chapter3#c3-large-patch-ownership', short: 'Ch. III' }] },
  { label: 'Late-Successional Forest', links: [{ href: '/chapter3#c3-late-successional', short: 'Ch. III' }] },
  { label: 'Leather Oak Chaparral', links: [{ href: '/chapter3#c3-leather-oak', short: 'Ch. III' }] },
  { label: 'Lodgepole Pine Forest', links: [{ href: '/chapter3#c3-lodgepole-pine', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'McNab Cypress', links: [{ href: '/chapter3#c3-mcnab-cypress', short: 'Ch. III' }] },
  { label: 'Mixed-Conifer Forest', links: [{ href: '/chapter3#c3-mixed-conifer', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Montane Chaparral', links: [{ href: '/chapter3#c3-montane-chaparral', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Montane Hardwood Woodlands', links: [{ href: '/chapter3#c3-montane-hardwood', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Montane Meadows', links: [{ href: '/chapter3#c3-montane-meadows', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Montane Riparian Woodlands', links: [{ href: '/chapter3#c3-montane-riparian', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Natural Heritage 2020', links: [{ href: '/chapter1#c1-background', short: 'Ch. I' }] },
  { label: 'NCWHR system', links: [{ href: '/chapter2#c2-habitat-classification', short: 'Ch. II' }, { href: '/chapter2#c2-whr', short: 'Ch. II' }] },
  { label: 'Nevada County watersheds', links: [{ href: '/chapter2#c2-elevation-zones', short: 'Ch. II' }] },
  { label: 'Non-native plants', links: [{ href: '/chapter2#c2-invasive', short: 'Ch. II' }, { href: '/chapter3#c3-non-native-plants', short: 'Ch. III' }] },
  { label: 'Noxious weeds', links: [{ href: '/chapter2#c2-invasive', short: 'Ch. II' }, { href: '/chapter3#c3-non-native-plants', short: 'Ch. III' }] },
  { label: 'Oak-Foothill Pine Woodlands', links: [{ href: '/chapter3#c3-oak-foothill-pine', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Orchards', links: [{ href: '/chapter3#c3-orchards', short: 'Ch. III' }] },
  { label: 'Peer review', links: [{ href: '/chapter1#c1-peer-review', short: 'Ch. I' }, { href: '/summary#es-peer-review', short: 'Summary' }] },
  { label: 'Plant diversity', links: [{ href: '/chapter2#c2-plant-diversity', short: 'Ch. II' }, { href: '/chapter3#c3-plant-diversity', short: 'Ch. III' }] },
  { label: 'Ponderosa Pine Forest', links: [{ href: '/chapter3#c3-ponderosa-pine', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Public & private lands', links: [{ href: '/chapter3#c3-public-private', short: 'Ch. III' }] },
  { label: 'Red Fir Forest', links: [{ href: '/chapter3#c3-red-fir', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Redlist animals', links: [{ href: '/chapter2#c2-redyellow-animals', short: 'Ch. II' }, { href: '/chapter3#c3-redlist-animals', short: 'Ch. III' }] },
  { label: 'Redlist plants', links: [{ href: '/chapter2#c2-redyellow-plants', short: 'Ch. II' }, { href: '/chapter3#c3-redlist-plants', short: 'Ch. III' }] },
  { label: 'Riparian woodlands', links: [{ href: '/chapter3#c3-foothill-riparian', short: 'Foothill' }, { href: '/chapter3#c3-montane-riparian', short: 'Montane' }, { href: '/chapter3#c3-eastside-riparian', short: 'Eastside' }] },
  { label: 'Riverine ecosystems', links: [{ href: '/chapter3#c3-riverine', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Roadless areas', links: [{ href: '/chapter3#c3-roads', short: 'Ch. III' }] },
  { label: 'Roads', links: [{ href: '/chapter3#c3-roads', short: 'Ch. III' }] },
  { label: 'SAC (Scientific Advisory Committee)', links: [{ href: '/chapter1#c1-sac', short: 'Ch. I' }, { href: '/summary#es-sac', short: 'Summary' }] },
  { label: 'Seeps & Springs', links: [{ href: '/chapter3#c3-seeps-springs', short: 'Ch. III' }] },
  { label: 'Serpentine Soils', links: [{ href: '/chapter3#c3-serpentine-soils', short: 'Ch. III' }] },
  { label: 'Sierra Business Council', links: [{ href: '/chapter1#c1-background', short: 'Ch. I' }] },
  { label: 'Slope', links: [{ href: '/chapter3#c3-slope', short: 'Ch. III' }] },
  { label: 'Small-patch ecosystems', links: [{ href: '/chapter2#c2-habitat-classification', short: 'Ch. II' }, { href: '/chapter3#c3-seeps-springs', short: 'Ch. III' }] },
  { label: 'Subalpine Conifer Forest', links: [{ href: '/chapter3#c3-subalpine-conifer', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Subalpine Dwarf-Scrub', links: [{ href: '/chapter3#c3-subalpine-scrub', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Tahoe National Forest', links: [{ href: '/chapter2#c2-plant-diversity', short: 'Ch. II' }] },
  { label: 'Truckee River', links: [{ href: '/chapter1#c1-watershed', short: 'Ch. I' }] },
  { label: 'Urban & Residential Areas', links: [{ href: '/chapter3#c3-urban', short: 'Ch. III' }, { href: '/summary#es-species', short: 'Summary' }] },
  { label: 'Vernal Pools', links: [{ href: '/chapter3#c3-vernal-pools', short: 'Ch. III' }] },
  { label: 'Vertebrate diversity', links: [{ href: '/chapter2#c2-vertebrate-diversity', short: 'Ch. II' }, { href: '/chapter3#c3-vertebrate-diversity', short: 'Ch. III' }] },
  { label: 'Vineyards', links: [{ href: '/chapter3#c3-vineyards', short: 'Ch. III' }] },
  { label: 'Volcanic Lava Caps', links: [{ href: '/chapter3#c3-volcanic', short: 'Ch. III' }] },
  { label: 'Watershed approach', links: [{ href: '/chapter1#c1-watershed', short: 'Ch. I' }, { href: '/summary#es-mapping', short: 'Summary' }] },
  { label: 'Watershed surveys', links: [{ href: '/chapter2#c2-watershed-surveys', short: 'Ch. II' }] },
  { label: 'Whitebark Pine', links: [{ href: '/chapter3#c3-whitebark-pine', short: 'Ch. III' }] },
  { label: 'Wildlife Habitat Relationships', links: [{ href: '/chapter2#c2-whr', short: 'Ch. II' }, { href: '/chapter3#c3-wildlife-habitat', short: 'Ch. III' }] },
  { label: 'Yellowlist animals', links: [{ href: '/chapter2#c2-redyellow-animals', short: 'Ch. II' }, { href: '/chapter3#c3-yellowlist-animals', short: 'Ch. III' }] },
  { label: 'Yellowlist plants', links: [{ href: '/chapter2#c2-redyellow-plants', short: 'Ch. II' }, { href: '/chapter3#c3-yellowlist-plants', short: 'Ch. III' }] },
  { label: 'Yuba River', links: [{ href: '/chapter1#c1-watershed', short: 'Ch. I' }] },
];

// Group alphabetically
const grouped: Record<string, IndexEntry[]> = {};
for (const entry of indexEntries) {
  const letter = entry.label[0].toUpperCase();
  if (!grouped[letter]) grouped[letter] = [];
  grouped[letter].push(entry);
}
const letters = Object.keys(grouped).sort();

export default function NavIndex() {
  const [open, setOpen] = useState(false);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  return (
    <div className="mt-1">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 rounded text-xs font-bold uppercase tracking-wide text-gray-500 hover:text-[#cc6600] transition-colors"
        style={{ fontVariant: 'small-caps' }}
        aria-expanded={open}
      >
        <span>Index</span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="mt-1 border-l-2 border-[#CCCC99] ml-3">
          {/* Letter navigation */}
          <div className="flex flex-wrap gap-0.5 px-2 pb-1">
            {letters.map(l => (
              <button
                key={l}
                onClick={() => setActiveLetter(activeLetter === l ? null : l)}
                className={`text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded transition-colors ${
                  activeLetter === l
                    ? 'bg-[#666600] text-white'
                    : 'text-gray-500 hover:text-[#cc6600]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Entries for active letter */}
          {activeLetter && grouped[activeLetter] && (
            <div className="max-h-[50vh] overflow-y-auto pb-2">
              {grouped[activeLetter].map(entry => (
                <div key={entry.label} className="px-2 mb-1">
                  <div className="text-[10px] font-semibold text-gray-700 leading-tight">{entry.label}</div>
                  <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 mt-0.5">
                    {entry.links.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-[9px] text-[#4a5722] hover:text-[#cc6600] transition-colors underline"
                      >
                        {link.short}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {!activeLetter && (
            <p className="px-2 pb-2 text-[9px] text-gray-400 italic">Select a letter above</p>
          )}
        </div>
      )}
    </div>
  );
}
