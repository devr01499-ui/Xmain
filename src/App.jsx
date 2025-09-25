import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import theme
import theme from './theme/theme';

// Import mobile-specific styles
import './styles/mobile.css';
import './styles/mobile-force.css';
import './styles/about-page.css';
import './styles/services-page.css';
import './styles/careers-page.css';
import './styles/scroll-behavior.css';
import './styles/logo.css';
import './styles/performance.css';

// Import components
import ScrollToTop from './components/ScrollToTop';
import PerformanceMonitor from './components/PerformanceMonitor';

// Import pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Career from './pages/Career';
import PartnerWithUs from './pages/PartnerWithUs';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PerformanceMonitor />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
