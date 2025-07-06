import { Link } from "react-router-dom";
import MapCanvas from "../components/MapCanvas";


function MyButton({ title }: { title: string }) {
  return <button>{title}</button>;
}

export default function Map() {
  return (
    <div className="relative w-screen h-screen flex flex-col overflow-hidden bg-gradient-to-b from-[#05060a] to-transparent text-white">
      {/* Header */}

      {/* Map canvas full screen behind header */}
      <main className="flex-1 w-full">
      <header className="absolute z-1 bg-gradient-to-b from-[#05060a] to-[#0b1122 text-white flex justify-between items-center px-8 py-4 w-full  mx-auto">
        <Link to="/">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full">Go back</button>
        </Link>
        <h2 className="font-bold">World Map Moon theme</h2>
      </header>
         <MapCanvas /> 
      </main>
    </div>
  );
}
