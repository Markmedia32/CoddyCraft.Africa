import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';




function App() {
  return (
    <>
      <Navbar />
          <main>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Services" element={<Services />} />
                  <Route path="/Contact" element={<Contact />} />
              </Routes>
          </main>
          <Footer />
          </>
  );
}

export default App;
