import { Link } from "react-router-dom";
import MapCanvas from "../components/MapCanvas";


function MyButton({ title }: { title: string }) {
  return <button>{title}</button>;
}

export default function Map() {
  return (
    <div className="relative w-screen h-screen flex flex-col overflow-hidden bg-gradient-to-b from-[#0B0F19] to-[#000] text-white">
      {/* Radial background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial at-top from-blue-600/30 via-transparent to-transparent" />

      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 w-full max-w-7xl mx-auto">
        <h1 className="text-lg font-bold">🌍 World Map</h1>
        <Link to="/">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">Go back</button>
        </Link>
      </header>

      {/* Map canvas full screen behind header */}
      <main className="flex-1 w-full">
         <MapCanvas /> 
      </main>
    </div>
  );
}
