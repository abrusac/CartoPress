// MapCanvas.tsx – React komponenta s MapLibre kartom i SVG frameom

import MapCanvas from "./components/MapCanvas";


function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}
export default function Map(): React.JSX.Element {
  // Referenca na HTML element koji će sadržavati kartu




  return (
    <div className="w-screen h-screen flex flex-col">
       <div>
      <h1>Welcome to my apps</h1>
      <MyButton title="I'm a button" />
    </div>
  
      <div className="flex-1">
        <MapCanvas />
      </div>


    </div>
  );
}





