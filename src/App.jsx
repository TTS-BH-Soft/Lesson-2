import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./pages/Home1/Home1.jsx";
import Home2 from "./pages/Home2/Home2.jsx";
import About from "./pages/About/About.jsx";
import Service from "./pages/Service/Service.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/home-2" element={<Home2 />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
