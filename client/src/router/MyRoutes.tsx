import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import AllProducts from "../components/allProducts/AllProducts";
import { Home } from "../pages/Home";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
