"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

export default function Map() {
  const [centers, setCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Signal that client-side is ready
    fetch("/centers.json")
      .then((res) => res.json())
      .then((data) => setCenters(data));
  }, []);

  if (!isMounted) return null; // Prevent any Leaflet code from running on the server or during initial flicker

  return (
    <div className="relative h-[600px] w-full p-4 flat-card overflow-hidden">
      {/* Detail Panel */}
      <div 
        className={`absolute top-4 left-4 z-[1000] w-80 h-[calc(100%-32px)] 
        bg-[#F2E3BB] p-8 transition-transform duration-500 ease-in-out
        ${selectedCenter ? "translate-x-0" : "-translate-x-full"}`}
      >
        {selectedCenter && (
          <div className="flex flex-col h-full">
            <button 
              onClick={() => setSelectedCenter(null)}
              className="self-end text-[10px] font-bold tracking-widest text-[#427A43] hover:underline mb-8"
            >
              [ CLOSE_PANEL ]
            </button>
            <h3 className="text-2xl font-black uppercase text-[#005F02] mb-2 leading-tight">
              {selectedCenter.name}
            </h3>
            <p className="text-sm font-medium text-[#427A43] mb-8">{selectedCenter.address}</p>
            <div className="mt-auto">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#C0B87A] mb-4">Accepted_Waste:</p>
              <div className="flex flex-wrap gap-2">
                {selectedCenter.types.map((t) => (
                  <span key={t} className="px-3 py-1 text-[10px] font-bold border-2 border-[#005F02] rounded-full text-[#005F02]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <MapContainer 
        center={[7.064273726564481, 125.60814507143571]} 
        zoom={13} 
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer 
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" 
          className="grayscale opacity-60"
        />
        {centers.map((center) => (
          <Marker 
            key={`${center.id}-${center.lat}`} // Key prevents marker duplication
            position={[center.lat, center.lng]}
            eventHandlers={{
              click: () => setSelectedCenter(center),
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
}