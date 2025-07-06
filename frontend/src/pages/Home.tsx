import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="relative w-[100vw] h-[100vh]  text-white">
      {/* Full-screen radial gradient background */}
      <div className="" />

      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="text-xl font-bold">CartoPress</div>
        <nav className="hidden md:flex space-x-8 text-white">
             <Link to="/">
          <a href="#" className="hover:text-indigo-400">Home</a>
      </Link>
        <Link to="/map">
         <a href="#" className="hover:text-indigo-400">Map</a>
      </Link>
         
        </nav>
        <Link to="/map">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full">Get started</button>
      </Link>
       
      </header>

      {/* Hero */}
      <main className="flex flex-col justify-center items-center flex-grow text-center px-4 max-w-4xl mx-auto">
  
        <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-16">
          Find your way.<br /> Explore the world.
        </h1>
        <p className="text-gray-400 max-w-2xl mb-8">
          Powerful, modern world map design created with Mapbox.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
             <Link to="/map">
 <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full">Explore</button>
      </Link>
          
        </div>
        <div className="mt-12 text-gray-500 text-sm">Trusted by 500+ companies</div>
        
      </main>
    </div>
  );
}
