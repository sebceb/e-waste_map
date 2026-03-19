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
            <h2 className="text-xl font-bold tracking-widest text-lime-400 uppercase italic">
              min<span className="text-cyan-400">DISPOSE</span>_SYS
            </h2>
            <p className="text-xs text-slate-500 font-mono leading-relaxed max-w-xs">
              Localized e-waste tracking engine optimized for the Mindanaoan ecological landscape. 
              Initial deployment: Davao Region [PH_R11].
            </p>
            <div className="flex items-center space-x-2 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
              </span>
              <span className="text-[10px] font-mono text-lime-400 uppercase tracking-tighter">System_Status: Operational</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-mono text-slate-400 uppercase border-b border-slate-800 pb-2">Directory</h3>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#map" className="hover:text-cyan-400 transition-colors">&gt; Interactive_Map</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">&gt; E-Waste_101</a></li>
              <li><a href="/docs" className="hover:text-cyan-400 transition-colors">&gt; Documentation</a></li>
            </ul>
          </div>

          {/* Social/External */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-mono text-slate-400 uppercase border-b border-slate-800 pb-2">External_Nodes</h3>
            <ul className="space-y-2 text-xs font-mono text-slate-500">
              <li><a href="#" className="hover:text-lime-400 transition-colors">GitHub_Repository</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Developer_Contact</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">OSM_Contribution</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-slate-600 uppercase">
            © {currentYear} minDISPOSE // All_Bytes_Reserved.
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