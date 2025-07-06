import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
import StarsCanvas from "./components/StarsCanvas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <StarsCanvas />
    </BrowserRouter>
  );
}
