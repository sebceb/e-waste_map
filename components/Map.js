"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";

export default function Map() {
  const [centers, setCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(null);

  useEffect(() => {
    fetch("/centers.json").then(res => res.json()).then(setCenters);
  }, []);

  return (
    <div className="relative h-[600px] w-full p-4 neo-inset">
      {/* Left Detail Panel */}
      <div className={`absolute top-8 left-8 z-[1000] w-80 h-[calc(100%-64px)] 
        neo-float p-8 transition-all duration-500 ease-out transform 
        ${selectedCenter ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0"}`}>
        
        {selectedCenter && (
          <div className="flex flex-col h-full text-brand-primary">
            <button 
              onClick={() => setSelectedCenter(null)}
              className="self-end text-[10px] font-bold tracking-widest mb-6 opacity-50 hover:opacity-100">[ CLOSE_DATA ]</button>
            
            <h3 className="text-2xl font-black italic uppercase leading-tight mb-2">
              {selectedCenter.name}
            </h3>
            <p className="text-sm font-medium text-brand-secondary mb-6">{selectedCenter.address}</p>
            
            <div className="mt-auto">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-3">Accepted_Materials:</p>
              <div className="flex flex-wrap gap-2">
                {selectedCenter.types.map(t => (
                  <span key={t} className="px-3 py-1 text-[10px] font-bold border border-brand-accent/40 rounded-full bg-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Actual Map */}
      <MapContainer center={[7.1907, 125.4553]} zoom={13} className="h-full w-full rounded-2xl">
        <TileLayer 
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" 
          className="grayscale contrast-[0.8] opacity-70"
        />
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