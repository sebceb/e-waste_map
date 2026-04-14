import Link from "next/link";
import { ArrowLeft, BookOpen, Cpu, Database, MapPin, Terminal } from "lucide-react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "map", label: "Using the map" },
  { id: "data", label: "Center data" },
  { id: "stack", label: "Tech stack" },
  { id: "develop", label: "Local development" },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen pt-20 pb-24 bg-white">
      <nav className="fixed top-0 w-full z-[3000] h-20 px-8 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-brand-primary/10">
        <Link href="/" className="text-3xl tracking-tighter">
          <span className="font-min text-brand-secondary">min</span>
          <span className="font-dispose text-brand-yellow">DISPOSE</span>
        </Link>
        <div className="flex gap-8 font-bold text-xs uppercase tracking-widest text-brand-primary">
          <Link href="/#map" className="hover:text-safety-orange transition-colors">
            Map
          </Link>
          <Link href="/#about" className="hover:text-safety-orange transition-colors">
            About
          </Link>
          <span className="text-safety-orange">Docs</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8">
        <header className="mb-16 border-b border-brand-primary/10 pb-12">
          <p className="text-[10px] font-black text-brand-secondary uppercase tracking-widest mb-4">
            Documentation
          </p>
          <h1 className="text-5xl md:text-6xl font-min text-brand-primary tracking-tighter leading-[0.95] mb-6">
            How <span className="font-dispose text-brand-yellow">minDISPOSE</span> works
          </h1>
          <p className="text-lg text-slate-600 font-text max-w-2xl leading-relaxed">
            This page describes the interactive map, how drop-off locations are stored, and how to run or extend the project.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          <aside className="lg:w-48 shrink-0">
            <nav className="lg:sticky lg:top-28 space-y-1" aria-label="On this page">
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-secondary/60 mb-3">On this page</p>
              <ul className="space-y-2 text-sm font-text">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-slate-500 hover:text-safety-orange transition-colors"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="flex-1 min-w-0 space-y-20 font-text text-slate-600 leading-relaxed">
            <section id="overview" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-brand-yellow shrink-0" size={28} strokeWidth={1.75} />
                <h2 className="text-3xl font-dispose text-brand-primary uppercase tracking-tight">Overview</h2>
              </div>
              <p className="text-lg mb-4">
                minDISPOSE is a web map that highlights verified e-waste collection points in Mindanao. Visitors pick a region,
                explore markers on the map, and open a detail panel for addresses and accepted materials.
              </p>
              <p>
                Location records live in a static JSON file served from the public folder, so updates do not require a database.
                The map filters markers by city name so each regional view stays focused.
              </p>
            </section>

            <section id="map" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-brand-yellow shrink-0" size={28} strokeWidth={1.75} />
                <h2 className="text-3xl font-dispose text-brand-primary uppercase tracking-tight">Using the map</h2>
              </div>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-brand-primary font-semibold">Region menu</strong> — Use the floating menu (top right on the map) to switch between
                  Davao City, Northern Mindanao, Digos, and Panabo. The map animates to the chosen center.
                </li>
                <li>
                  <strong className="text-brand-primary font-semibold">Markers</strong> — Tap or click a pin to open the side panel with the facility name,
                  address, and list of recyclable item categories.
                </li>
                <li>
                  <strong className="text-brand-primary font-semibold">Closing the panel</strong> — Use the close control in the panel to return to the full map view.
                </li>
              </ul>
            </section>

            <section id="data" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-brand-yellow shrink-0" size={28} strokeWidth={1.75} />
                <h2 className="text-3xl font-dispose text-brand-primary uppercase tracking-tight">Center data</h2>
              </div>
              <p className="mb-4">
                Drop-off points are defined in{" "}
                <code className="text-sm bg-brand-primary/5 px-2 py-0.5 rounded-md text-brand-primary font-mono">public/centers.json</code>.
                Each entry is an object with the following fields:
              </p>
              <dl className="grid gap-3 mb-8 text-sm border border-brand-primary/10 rounded-2xl p-6 bg-[#F9FAF9]">
                <div className="grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4">
                  <dt className="font-mono text-brand-primary">id</dt>
                  <dd>Unique number for the record.</dd>
                </div>
                <div className="grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4">
                  <dt className="font-mono text-brand-primary">name</dt>
                  <dd>Display name shown in the panel.</dd>
                </div>
                <div className="grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4">
                  <dt className="font-mono text-brand-primary">city</dt>
                  <dd>Used for filtering when a region is selected (matching is fuzzy on the city string).</dd>
                </div>
                <div className="grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4">
                  <dt className="font-mono text-brand-primary">lat</dt>
                  <dd>Latitude in decimal degrees.</dd>
                </div>
                <div className="grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4">
                  <dt className="font-mono text-brand-primary">lng</dt>
                  <dd>Longitude in decimal degrees.</dd>
                </div>
                <div className="grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4">
                  <dt className="font-mono text-brand-primary">address</dt>
                  <dd>Full address text for the panel.</dd>
                </div>
                <div className="grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4">
                  <dt className="font-mono text-brand-primary">types</dt>
                  <dd>Array of short labels for accepted e-waste categories (for example, Batteries, Mobile Phones).</dd>
                </div>
              </dl>
              <p className="mb-3 text-sm font-black uppercase tracking-widest text-brand-secondary">Example</p>
              <pre className="text-xs sm:text-sm bg-[#0c0c0c] text-slate-200 p-6 rounded-2xl overflow-x-auto font-mono leading-relaxed border border-slate-800">
{`{
  "id": 1,
  "name": "SM Lanang",
  "city": "Davao City",
  "lat": 7.0992777646302505,
  "lng": 125.63158707288851,
  "address": "3/F, J.P. Laurel Ave., Poblacion, Davao City",
  "types": ["Batteries", "Small Electronics", "Lead-acid"]
}`}
              </pre>
            </section>

            <section id="stack" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="text-brand-yellow shrink-0" size={28} strokeWidth={1.75} />
                <h2 className="text-3xl font-dispose text-brand-primary uppercase tracking-tight">Tech stack</h2>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-brand-primary font-semibold">Next.js</strong> — App Router, server and client components.
                </li>
                <li>
                  <strong className="text-brand-primary font-semibold">React Leaflet</strong> — Map rendering; the map component is loaded on the client only (no SSR) so Leaflet runs in the browser.
                </li>
                <li>
                  <strong className="text-brand-primary font-semibold">Carto Voyager</strong> — Raster tiles for the basemap.
                </li>
                <li>
                  <strong className="text-brand-primary font-semibold">Framer Motion</strong> — Panel and menu transitions on the home page.
                </li>
                <li>
                  <strong className="text-brand-primary font-semibold">Tailwind CSS</strong> — Layout and theme colors.
                </li>
              </ul>
            </section>

            <section id="develop" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="text-brand-yellow shrink-0" size={28} strokeWidth={1.75} />
                <h2 className="text-3xl font-dispose text-brand-primary uppercase tracking-tight">Local development</h2>
              </div>
              <ol className="list-decimal pl-6 space-y-3 mb-8">
                <li>Install dependencies with <code className="text-sm bg-brand-primary/5 px-2 py-0.5 rounded-md font-mono text-brand-primary">npm install</code>.</li>
                <li>Start the dev server with <code className="text-sm bg-brand-primary/5 px-2 py-0.5 rounded-md font-mono text-brand-primary">npm run dev</code> and open the URL shown in the terminal (typically <code className="text-sm bg-brand-primary/5 px-1.5 rounded font-mono text-brand-primary">localhost:3000</code>).</li>
                <li>Production build: <code className="text-sm bg-brand-primary/5 px-2 py-0.5 rounded-md font-mono text-brand-primary">npm run build</code> then <code className="text-sm bg-brand-primary/5 px-2 py-0.5 rounded-md font-mono text-brand-primary">npm start</code>.</li>
              </ol>
              <p className="mb-4">After editing <code className="text-sm font-mono text-brand-primary">public/centers.json</code>, refresh the browser to see new or updated markers (no rebuild required in development).</p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-primary hover:text-safety-orange transition-colors"
              >
                <ArrowLeft size={18} strokeWidth={2.5} aria-hidden />
                Back to home
              </Link>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
