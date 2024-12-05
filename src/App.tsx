import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home1 from './pages/Home1/Home1'
import Home2 from './pages/Home2/Home2'
import About from './pages/About/About'
import Service from './pages/Service/Service'
import Team from './pages/Team/Team'
import Gallery from './pages/Gallery/Gallery'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/home-2" element={<Home2 />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
