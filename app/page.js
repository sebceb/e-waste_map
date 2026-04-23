"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Zap, Droplets, Trash2, ArrowRight, Menu, Image as ImageIcon, Cpu, Smartphone, BarChart2 } from 'lucide-react';

const MapNoSSR = dynamic(() => import('../components/Map'), { ssr: false });

const CITY_COORDS = {
  "Davao City": [7.064, 125.608],
  "Cagayan de Oro": [8.4803, 124.6498],
  "General Santos City": [6.1433, 125.1929],
  "Butuan City": [8.9475, 125.5406],
  "Zamboanga City": [6.9044, 122.0761]
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
                The theme, digital mindfulness, shows the core identity of minDISPOSE. 
                The brand itself is established in Mindanao, strengthening local relevance and mindful digital disposal, 
                which encourages responsibility in managing the electronic waste. As minDISPOSE supports sustainability, environmental awareness, 
                and responsive digital habits, it presents itself as a movement that supports individuals and communities in Mindanao 
                by raising awareness on e-waste.
            </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bento-card flex flex-col justify-between h-[450px]">
            <div className="flex justify-between items-start">
                <Zap className="text-brand-yellow" size={48} />
            </div>
            <div>
                <h3 className="text-[10rem] font-black tracking-tighter text-brand-primary leading-none">537k</h3>
                <p className="text-2xl font-bold uppercase opacity-60 ml-2">Metric Tons of E-Waste / Year</p>
            </div>
          </div>
          <div className="md:col-span-4 bento-card bg-brand-primary text-white flex flex-col justify-between overflow-hidden relative border-none">
            <Cpu size={120} className="absolute -right-10 -top-10 opacity-10" />
            <BarChart2 size={40} className="text-brand-yellow" />
            <div className="space-y-4">
                <h4 className="text-3xl font-dispose text-brand-primary uppercase leading-tight">2022 National <br/> Statistics</h4>
                <p className="text-sm text-brand-primary/60 leading-relaxed">
                As of 2022, the country reached around 537,000 metric tons of e-waste, 
                which indicates the necessity for effective waste disposal. The issue, in particular, comes to mind in parts of Mindanao 
                where management facilities available for e-waste and awareness actions are limited.
            </p>
            </div>
          </div>
        </div>

        {/* Combined Hero and Narrative Section */}
        <div>
          {/* Hero Photo */}
          <div className="relative w-full h-[500px] md:h-[600px] rounded-[1.5rem] overflow-hidden">
              <Image 
                  src="/hero-ewaste.jpeg"
                  alt="A collection of discarded electronic devices, illustrating e-waste."
                  fill
                  loading="eager"
                  className="object-cover bg-brand-primary/5"
              />      
          </div>

          <div className="text-right text-slate-600 italic">
            <p>Photo by Antoine GIRET on Unsplash</p>
          </div>

          {/* Narrative Section */}
          <div className="grid grid-cols-1 mt-8">
              <div className="space-y-8 max-w-4xl mx-auto">
                  <h4 className="text-sm font-black uppercase text-brand-secondary">What is E-Waste?</h4>
                  <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-text text-left">
                      <p>E-waste refers to discarded or obsolete electronic devices such as cellphones, laptops, and appliances. These items have valuable materials, but some parts are hazardous, especially the battery, and it requires proper handling.</p>
                      <p>E-waste is part of the fastest in increasing waste streams in the environment due to the rise of digital demands, and some electronics easily become useless. Some people upgrade devices without proper disposal, and this can lead to a lot of e-waste in landfills and less recycling.</p>
                      <p>Improper disposal of e-waste can release hazardous substances such as lead, mercury, and cadmium. These can affect the pollution and contaminate the natural resources in our environment. This can also affect our health.</p>
                      <p>In the Philippines, e-waste continues to increase reaching hundreds of thousands of metric tons produced yearly. In Mindanao, the e-waste becomes critical due to limited access to recycling areas and unawareness of safe disposal.</p>
                      <p>As individuals and even as students, it is important to address the issue in terms of e-waste and properly dispose of old devices to help extend their lifespan. Small actions makes meaningful impact.</p>
                      <p className="font-bold text-brand-primary italic">Digital mindfulness then becomes the understanding of the importance of consumption habits.</p>
                      <p>Educational institutions can also encourage awareness by including sustainability and responsibility in the technology usage. Students may support the campaigns and the community to advocate proper e-waste disposal.</p>
                      <p>Let’s take action and be part of the solution by practicing proper disposal, especially of electronics, supporting recycling, and spreading awareness to make our environment sustainable and responsible behavior.</p>
                  </div>
                </div>
          </div>
        </div>
      </section>
    </main>
  );
}