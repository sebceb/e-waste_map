"use client";
import dynamic from 'next/dynamic';

const MapNoSSR = dynamic(() => import('../components/Map'), { 
  ssr: false,
  loading: () => <div className="h-[600px] w-full flat-card animate-pulse bg-[#e5d8b1]" />
});

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b-2 border-[#005F02]">
        <h1 className="text-3xl">
          <span className="font-min text-[#427A43]">min</span>
          <span className="font-dispose text-[#005F02]">DISPOSE</span>
        </h1>
        <div className="flex gap-10 font-bold text-xs tracking-widest text-[#005F02]">
          <a href="#map" className="font-min hover:text-[#C0B87A]">Map</a>
          <a href="#about" className="font-min hover:text-[#C0B87A]">About</a>
          <a href="/docs" className="font-min hover:text-[#C0B87A]">Documentation</a>
        </div>
      </nav>

      {/* Map Section */}
      <section id="map" className="space-y-4">
        <div className="flex items-center gap-4">
          <h1 className="text-60 font-dispose text-[#005F02] uppercase tracking-tighter">Mindanao E-Waste Recycling Centers</h1>
          <div className="flex-grow bg-[#005F02]"></div>
        </div>
        <MapNoSSR />
      </section>

      {/* About Grid */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        <div className="md:col-span-2 flat-card p-12">
          <h3 className="text-3xl font-black text-[#005F02] uppercase italic mb-6 underline decoration-[#C0B87A] decoration-4 underline-offset-8">
            The_Protocol
          </h3>
          <p className="text-xl text-[#427A43] font-medium leading-relaxed">
            Protecting the Davao watershed by mapping certified e-waste reclamation centers. 
            We track the digital end-of-life to ensure heavy metals stay out of Mindanaoan soil.
          </p>
          <button className="btn-flat mt-8">Download_System_Brief</button>
        </div>

        <div className="flat-accent p-8 flex flex-col justify-between">
          <span className="text-[10px] font-bold text-[#005F02] tracking-widest">BUILD_v1.0</span>
          <div>
            <div className="text-6xl font-black text-[#005F02] mb-2">12.4k</div>
            <p className="text-xs font-bold uppercase text-[#427A43]">Tons of regional e-waste annually.</p>
          </div>
        </div>
      </section>
    </main>
  );
}