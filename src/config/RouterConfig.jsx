import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../components/ProductDetails";
import ProductList from "../components/ProductList";
import About from "../pages/About";
import Contact from "../pages/Contact";

function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="category-papper" element={<ProductList />} />
        <Route path="category-cleaning" element={<ProductList />} />
        <Route path="category-bez" element={<ProductList />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default RouterConfig;
