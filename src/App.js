import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HotelDetail from "./pages/HotelDetail.js";
import List from "./pages/List";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
      </Routes>
    </div>
  );
}

export default App;
