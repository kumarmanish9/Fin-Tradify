import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./common/navbar/Navbar.jsx";

import Home from "./pages/Home";    
import About from "./pages/About";
import Blog from "./pages/Blog/Blog.jsx";
import Services from "./pages/Services/Service.jsx";
import Fintech from "./pages/Fintech/Fintech.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />   {/* ✅ Common for all */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fintech" element={<Fintech />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;