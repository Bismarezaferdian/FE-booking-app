import Steper from "./element/Steper";
import Home from "./pages/Home";
import HotelDetail from "./pages/HotelDetail.js";
import List from "./pages/List";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Soon from "./pages/soon";
import { Routes, Route } from "react-router-dom";

//update

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/steper" element={<Steper />} />
        <Route path="/flight" element={<Soon />} />
        <Route path="/taxi" element={<Soon />} />
        <Route path="/rental" element={<Soon />} />
        <Route path="/atracttion" element={<Soon />} />
        <Route path="/train" element={<Soon />} />
      </Routes>
    </>
  );
}

export default App;
