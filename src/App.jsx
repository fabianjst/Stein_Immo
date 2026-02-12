import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Valuation from './pages/Valuation';
import References from './pages/References';
import Selling from './pages/Selling';
import About from './pages/About';
import Impressum from './pages/Impressum';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import News from './pages/News';

function App() {
  return (
    <Router basename="/Stein_Immo">
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/angebote" element={<Properties />} />
            <Route path="/verkauf" element={<Selling />} />
            <Route path="/wertermittlung" element={<Valuation />} />
            <Route path="/referenzen" element={<References />} />
            <Route path="/unternehmen/*" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/aktuelles" element={<News />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
