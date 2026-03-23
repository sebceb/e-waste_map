"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Zap, Droplets, Trash2, ArrowRight, Menu, Image as ImageIcon, Cpu } from 'lucide-react';

const MapNoSSR = dynamic(() => import('../components/Map'), { ssr: false });

const CITY_COORDS = {
  "Davao City": [7.064, 125.608],
  "Northern Mindanao": [7.447, 125.809],
  "Digos": [6.757, 125.356],
  "Panabo": [7.308, 125.682]
};

const CITIES = Object.keys(CITY_COORDS);

export default function Home() {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [activeCity, setActiveCity] = useState("Davao City");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen pt-20 bg-white">
      {/* 1. TOP NAV */}
      <nav className="fixed top-0 w-full z-[3000] h-20 px-8 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-brand-primary/10">
        <h1 className="text-3xl tracking-tighter">
          <span className="font-min text-brand-secondary">min</span>
          <span className="font-dispose text-brand-yellow">DISPOSE</span>
        </h1>
        <div className="flex gap-8 font-bold text-xs uppercase tracking-widest text-brand-primary">
          <a href="#map" className="hover:text-safety-orange transition-colors">Map</a>
          <a href="#about" className="hover:text-safety-orange transition-colors">About</a>
          <a href="/docs" className="hover:text-safety-orange transition-colors">Docs</a>
        </div>
      </nav>

      {/* 2. MAP SECTION */}
      <section id="map" className="relative h-[80vh] w-full overflow-hidden border-b border-brand-primary/5">
        <MapNoSSR 
          activeCity={activeCity} 
          center={CITY_COORDS[activeCity]} 
          onSelectCenter={(center) => setSelectedCenter(center)} 
        />

        {/* 3. LEFT SIDE PANEL */}
        <AnimatePresence>
          {selectedCenter && (
            <motion.div 
              initial={{ x: '-110%' }}
              animate={{ x: 0 }}
              exit={{ x: '-110%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 150 }}
              className="absolute top-4 left-4 bottom-4 w-full md:w-[420px] z-[1000] glass-panel rounded-[2.5rem] p-10 overflow-y-auto custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedCenter(null)} 
                className="p-2 rounded-full bg-brand-primary/5 text-brand-primary hover:bg-safety-orange hover:text-white transition-all mb-8"
              >
                <X size={20} />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-black text-brand-secondary uppercase tracking-widest opacity-40">Verified E-Waste Center</span>
                  <h2 className="text-4xl font-dispose text-brand-primary mt-2 uppercase leading-none">{selectedCenter.name}</h2>
                  <p className="text-sm text-slate-500 mt-4 leading-relaxed font-text">{selectedCenter.address}</p>
                </div>
                <div className="h-px bg-brand-primary/10 w-full" />
                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase text-brand-secondary tracking-widest">Recyclable Items</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCenter.types?.map(t => (
                      <span key={t} className="px-4 py-2 rounded-xl bg-brand-primary text-white font-bold text-[11px] uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4. DYNAMIC BOUNCE MENU (Fixed Styling) */}
        <div className="absolute top-6 right-6 z-[1000] flex flex-col items-end gap-3">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-4 rounded-full shadow-2xl transition-all z-[1001] ${isMenuOpen ? 'bg-safety-orange text-white' : 'bg-white text-brand-primary hover:scale-110'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                className="bg-white/95 backdrop-blur-md p-4 rounded-[2.5rem] shadow-2xl border border-brand-primary/10 flex flex-col gap-2 min-w-[200px]"
              >
                {CITIES.map((city) => (
                  <button
                    key={city}
                    onClick={() => { setActiveCity(city); setIsMenuOpen(false); }}
                    className={`px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest text-right transition-all
                      ${activeCity === city ? "bg-brand-primary text-white" : "hover:bg-brand-primary/5 text-brand-primary"}`}
                  >
                    {city}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. ABOUT SECTION (Refined Placeholders) */}
      <section id="about" className="max-w-7xl mx-auto px-8 py-32 space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <h2 className="text-7xl font-min tracking-tighter text-brand-primary leading-[0.85]">
                digital <br/> <span className="text-brand-yellow font-dispose uppercase">mindfulness</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed font-text border-l-2 border-brand-yellow pl-8 italic">
                As we emerge in the digital landscape, waste from electronics are increasingly rising.
                Rooted in mindfulness, minDISPOSE aims to make disposing of e-waste accessible throughout Mindanao. 
            </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bento-card flex flex-col justify-between h-[450px]">
            <div className="flex justify-between items-start">
                <Zap className="text-brand-yellow" size={48} />
                <span className="text-[10px] font-mono opacity-40 uppercase">2022 National Statistics</span>
            </div>
            <div>
                <h3 className="text-[10rem] font-black tracking-tighter text-brand-primary leading-none">537k</h3>
                <p className="text-2xl font-bold uppercase opacity-60 ml-2">Metric Tons of E-Waste / Year</p>
            </div>
          </div>
          <div className="md:col-span-4 bento-card bg-brand-primary text-white flex flex-col justify-between overflow-hidden relative border-none">
            <Cpu size={120} className="absolute -right-10 -top-10 opacity-10" />
            <Droplets size={40} className="text-brand-yellow" />
            <div className="space-y-4">
                <h4 className="text-3xl font-dispose uppercase leading-tight">Watershed <br/> Security</h4>
                <p className="text-sm text-white/60 leading-relaxed">Protecting the Davao aquifer from heavy metal leaching through systematic node mapping.</p>
            </div>
          </div>
        </div>

        {/* Narrative & Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
                <h4 className="text-sm font-black uppercase  text-brand-secondary">What is E-Waste?</h4>
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis, massa nec volutpat gravida, lectus ipsum sodales odio, aliquam finibus libero quam at risus. Vivamus fringilla leo dolor, luctus placerat ipsum pellentesque ac. Cras ipsum metus, dapibus vestibulum erat in, iaculis eleifend nunc. Cras posuere et tortor varius fermentum. Nulla et neque a felis rhoncus bibendum at finibus nibh. Fusce mattis vestibulum neque. Proin vitae sapien nisi.</p>
                    <p className="font-bold text-brand-primary italic">Nam tortor velit, luctus eget massa sit amet, lobortis posuere massa.</p>
                    <p>Aliquam at facilisis libero, id sollicitudin velit. Donec non justo mauris. Nam efficitur neque et velit vulputate volutpat. Morbi id nibh commodo, varius lectus quis, pellentesque magna. Fusce tincidunt dictum lacus, at pretium eros facilisis eu. </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="aspect-[4/5] bg-brand-primary/5 rounded-[3.5rem] border-2 border-dashed border-brand-primary/10 flex items-center justify-center photo-placeholder">
                    <ImageIcon className="text-brand-primary/10" size={64} />
                </div>
                <div className="aspect-[4/5] bg-brand-primary/5 rounded-[3.5rem] border-2 border-dashed border-brand-primary/10 flex items-center justify-center mt-16 photo-placeholder">
                    <ImageIcon className="text-brand-primary/10" size={64} />
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}