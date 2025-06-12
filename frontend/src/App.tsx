// MapCanvas.tsx – React komponenta s MapLibre kartom i SVG frameom

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapCanvas(): JSX.Element {
  // Referenca na HTML element koji će sadržavati kartu
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Inicijalizacija MapLibre instance
    const map = new maplibregl.Map({
      container: mapRef.current,
      style: "/map-styles/my-style.json", // Tvoj Maputnik stil
      center: [15.9819, 45.815], // Zagreb
      zoom: 12,
    });

    return () => {
      map.remove(); // Čišćenje instance prilikom unmounta
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Element za MapLibre kartu */}
      <div ref={mapRef} className="w-full h-full" />

      {/* SVG frame preko karte (vizualni overlay) */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <img
          src="/frames/frame1.svg"
          alt="Poster Frame"
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
    </div>
  );
}
