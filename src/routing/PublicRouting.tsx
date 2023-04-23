import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "../features/contactus/ContactUs";
import BlogPage from "../features/blogpage/blogpage";
import HomePage from "../features/home/home";
import ProductPage from "../features/product-list/product-list";
import AboutPage from "../features/about/about";
import GalleryPage from "../features/gallery/gallery";
import ServicePage from "../features/services/services";

const PublicRouting = () => {

  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Services" element={<ServicePage />} />
        <Route path="/Blogs" element={<BlogPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );

}
export default PublicRouting;