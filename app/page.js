"use client";
import dynamic from 'next/dynamic';

const MapNoSSR = dynamic(() => import('../components/Map'), { 
  ssr: false,
  loading: () => <div className="h-[600px] w-full flat-card animate-pulse bg-gray-100 flex items-center justify-center font-mono">INITIALIZING_SYSTEM...</div>
});

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 space-y-24 pb-20">
      {/* Navigation - Stickied & Enriched */}
      <nav className="sticky top-0 z-[2000] bg-white/90 backdrop-blur-md flex justify-between items-center px-8 py-6 border-b-2 border-[#005F02]">
        <h1 className="text-4xl tracking-tighter">
          <span className="font-min text-[#427A43]">min</span>
          <span className="font-dispose text-[#005F02]">DISPOSE</span>
        </h1>
        <div className="flex gap-12 font-bold text-sm tracking-widest text-[#005F02]">
          <a href="#map" className="font-text hover:text-[#C0B87A] transition-colors">Map</a>
          <a href="#about" className="font-text hover:text-[#C0B87A] transition-colors">About</a>
          <a href="/docs" className="font-text hover:text-[#C0B87A] transition-colors">Documentation</a>
        </div>
      </nav>

      {/* Map Section */}
      <section id="map" className="space-y-6 pt-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-5xl font-dispose text-[#005F02] uppercase tracking-tighter leading-none">
            Mindanao E-Waste <br/> Recycling Centers
          </h2>
        </div>
        <MapNoSSR />
      </section>

      {/* About Section - Patterned after Davao Bus Guide */}
      <section id="about" className="space-y-16 py-10 max-w-5xl mx-auto">
        {/* Centered Header */}
        <div className="text-center space-y-6">
          <h2 className="font-text text-5xl text-[#005F02]">
            About <span className="font-min text-[#427A43]">min</span><span className="font-dispose uppercase">DISPOSE</span>
          </h2>
          <p className="font-text text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Davao City's digital landscape is growing. Our mission is to build a sustainable network that connects residents to certified recycling centers, reduces heavy metal leaching, and provides equitable access to e-waste disposal solutions across the metro.
          </p>
        </div>


        {/* Content Cards (Patterned after the Transit Systems grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flat-card p-8 space-y-4 hover:border-[#C0B87A] transition-colors group">
            <span className="bg-[#005F02] text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase">The Protocol</span>
            <h4 className="text-2xl font-black text-[#005F02]">Watershed Protection</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              We focus on the Davao watershed area, identifying nodes where hazardous materials like Lead and Mercury can be safely handed over to verified third-party recyclers.
            </p>
            <ul className="text-xs space-y-2 text-[#427A43] font-bold">
              <li>• Target: CRT Monitors & Batteries</li>
              <li>• Verification: DENR-EMB Certified</li>
            </ul>
          </div>

          <div className="flat-accent p-8 space-y-4 hover:border-[#005F02] transition-colors group">
             <span className="bg-[#C0B87A] text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase">Current Metrics</span>
             <h4 className="text-2xl font-black text-[#005F02]">Regional Impact</h4>
             <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-[#005F02]">12.4k</span>
                <span className="text-sm font-bold text-[#427A43]">TONS / YEAR</span>
             </div>
             <p className="text-slate-600 text-sm leading-relaxed">
               Estimations show a rising trend in regional e-waste generation. Our engine tracks these nodes to ensure maximum reclamation efficiency.
             </p>
          </div>
        </div>
      </section>

              <section id="about" className="max-w-6xl mx-auto mt-32 space-y-16 pb-20">
        
        {/* Header & Hero Image */}
        <div className="space-y-6">
            <div className="border-l-4 border-lime-400 pl-4">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic">
                E-WASTE_PROTOCOL_<span className="text-cyan-400">101</span>
            </h2>
            <p className="font-mono text-xs text-slate-500 mt-2 uppercase tracking-widest">
                System_Subject: Global impact and local mitigation strategies.
            </p>
            </div>

            {/* Hero Photo Placeholder */}
            <div className="relative w-full h-[400px] bg-slate-800 border-2 border-slate-700 overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-xl opacity-20 group-hover:opacity-40 transition-opacity">
                [HERO_VISUAL_ASSET_01]
            </div>
            <div className="absolute bottom-4 left-4 glass-morphism p-4 border border-cyan-400/30">
                <p className="text-[10px] font-mono text-cyan-400 underline">IMG_REF: WASTE_ACCUMULATION_2026</p>
            </div>
            </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
            <h3 className="text-xl font-bold text-lime-400 font-mono uppercase underline decoration-2 underline-offset-8">
                The_Digital_Labyrinth
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>

            {/* Small Photo Grid */}
            <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px] font-mono text-slate-500 italic">
                [ASSET_02_CRT]
            </div>
            <div className="aspect-square bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px] font-mono text-slate-500 italic">
                [ASSET_03_CIRCUIT]
            </div>
            </div>
        </div>

        {/* Secondary Info Block */}
        <div className="glass-morphism p-8 border-t-2 border-cyan-400 relative overflow-hidden">
            {/* Background watermark */}
            <span className="absolute -bottom-4 -right-4 text-8xl font-black text-white/5 pointer-events-none select-none">
            DISPOSE
            </span>
            
            <h3 className="font-mono text-cyan-400 mb-6 uppercase tracking-[0.2em] text-sm font-bold">
            Subheading: Toxic_Heavy_Metals
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "LEAD", desc: "Found in CRT glass and solder. Highly neurotoxic to developing organisms." },
                { title: "MERCURY", desc: "Present in LCD backlights and switches. Accumulates in aquatic food chains." },
                { title: "CADMIUM", desc: "Common in rechargeable batteries. Known carcinogen affecting bone density." }
            ].map((metal, i) => (
                <div key={i} className="space-y-2">
                <h4 className="text-lime-400 font-mono text-xs font-bold border-b border-lime-400/30 pb-1 w-fit">
                    {metal.title}
                </h4>
                <p className="text-[11px] text-slate-500 font-sans leading-tight">
                    {metal.desc}
                </p>
                </div>
            ))}
            </div>
        </div>
        </section>
    </main>
  );
}