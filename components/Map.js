"use client";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";

// CRITICAL FIX: Re-adding the icon paths so the pins actually render
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function MapController({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, 13, { duration: 1.5, easeLinearity: 0.25 });
    }
  }, [center, map]);
  return null;
}

export default function Map({ onSelectCenter, activeCity, center }) {
  const [centers, setCenters] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    fetch("/centers.json")
      .then(res => res.json())
      .then(setCenters)
      .catch(err => console.error("Could not load centers.json. Check if it's in /public", err));
  }, []);

  // FUZZY FILTER: This is safer. It checks if the city name matches or is part of the string.
  const filteredCenters = centers.filter(c => {
    if (!c.city || !activeCity) return false;
    const normalizedData = c.city.toLowerCase().replace(/\s/g, '');
    const normalizedActive = activeCity.toLowerCase().replace(/\s/g, '');
    return normalizedData.includes(normalizedActive) || normalizedActive.includes(normalizedData);
  });

  if (!isMounted) return null;

  return (
    <MapContainer 
      center={center} 
      zoom={13} 
      className="h-full w-full"
      zoomControl={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
      <MapController center={center} />

      {filteredCenters.map(center => (
        <Marker 
          key={center.id} 
          position={[center.lat, center.lng]}
          // Ensure this correctly bubbles up the center data
          eventHandlers={{ click: () => onSelectCenter(center) }}
        />
      ))}
    </MapContainer>
  );
}