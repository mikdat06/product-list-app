import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Navbar from "../components/nav/NavBar";
import Electronics from "../pages/Electronics";
import Jewelery from "../pages/Jewelery";
import MensCloting from "../pages/MensCloting";
import WowensCloting from "../pages/WowensCloting";

const ProductRouter = () => {
  return (
    <div>
      <h1 className="text-center mt-5 text-warning-emphasis">Product List</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/electronics" element={<Electronics />} />

        <Route path="/jewelery" element={<Jewelery />} />

        <Route path="/menClotings" element={<MensCloting />} />

        <Route path="/womenClotings" element={<WowensCloting />} />

      </Routes>
    </div>
  );
};

export default ProductRouter;
