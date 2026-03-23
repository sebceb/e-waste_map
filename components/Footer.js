export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800 bg-[#0c0c0c] relative overflow-hidden">
      {/* Decorative Scanline Effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400 opacity-20 shadow-[0_0_15px_rgba(0,242,255,0.5)]"></div>
      
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand & Status */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h2 className="text-xl font-min font-bold text-[#427A43] tracking-widest">
              min<span className="font-dispose text-[#005F02]">DISPOSE</span>
            </h2>
            <p className="text-xs text-slate-500 font-text leading-relaxed max-w-xs">
              Localized e-waste tracking map optimized for the Mindanaoan ecological landscape.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-text text-slate-400 uppercase border-b border-slate-800 pb-2">Directory</h3>
            <ul className="space-y-2 text-xs font-text text-slate-500">
              <li><a href="#map" className="hover:text-lime-400 transition-colors">&gt; Interactive Map</a></li>
              <li><a href="#about" className="hover:text-lime-400 transition-colors">&gt; E-Waste 101</a></li>
              <li><a href="/docs" className="hhover:text-lime-400 transition-colors">&gt; Documentation</a></li>
            </ul>
          </div>

          {/* Social/External */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-text text-slate-400 uppercase border-b border-slate-800 pb-2">External Links</h3>
            <ul className="space-y-2 text-xs font-text text-slate-500">
              <li><a href="#" className="hover:text-lime-400 transition-colors">GitHub Repository</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Developer Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-text text-slate-600">
            © {currentYear} minDISPOSE // all ewastes disposed.
          </p>
          <div className="flex space-x-6 text-[9px] font-mono text-slate-700">
            <span>BUILD: 2026.03.20-ALPHA</span>
            <span>LAT: 7.1907° N</span>
            <span>LNG: 125.4553° E</span>
          </div>
        </div>
      </div>
    </footer>
  );
}