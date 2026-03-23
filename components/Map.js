"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";

// FIX: This fixes the "Mark" text issue by providing the correct icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Map() {
  const [centers, setCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    fetch("/centers.json").then(res => res.json()).then(setCenters);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative h-[600px] w-full border border-slate-200 rounded-xl overflow-hidden shadow-inner">
      {/* Detail Panel - High Z-index and Solid White */}
      <div 
        className={`absolute top-0 left-0 z-[1005] w-80 h-full 
        bg-white border-r border-slate-200 p-8 transition-transform duration-500 ease-in-out
        ${selectedCenter ? "translate-x-0" : "-translate-x-full"}`}
      >
        {selectedCenter && (
          <div className="flex flex-col h-full">
            <button onClick={() => setSelectedCenter(null)} className="self-end text-[10px] font-bold text-slate-400 hover:text-red-500 uppercase tracking-widest">[ CLOSE ]</button>
            <h3 className="text-2xl font-black uppercase text-[#005F02] mt-8 mb-2 leading-tight">{selectedCenter.name}</h3>
            <p className="text-sm text-slate-500 mb-8">{selectedCenter.address}</p>
            <div className="mt-auto pt-4 border-t border-slate-100">
              <p className="text-[10px] font-bold uppercase text-[#C0B87A] mb-4">Accepted Items:</p>
              <div className="flex flex-wrap gap-2">
                {selectedCenter.types.map(t => (
                  <span key={t} className="px-3 py-1 text-[10px] font-bold border border-[#005F02] text-[#005F02] rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <MapContainer center={[7.064, 125.608]} zoom={13} className="h-full w-full">
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
        {centers.map(center => (
          <Marker 
            key={center.id} 
            position={[center.lat, center.lng]}
            eventHandlers={{ click: () => setSelectedCenter(center) }}
          />
        ))}
      </MapContainer>
    </div>
  );
}