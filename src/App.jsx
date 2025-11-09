import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventHighlights from './components/EventHighlights';
import AuthSections from './components/AuthSections';

const App = () => {
  // Inject Bootstrap via CDN so Bootstrap utility and component classes work
  useEffect(() => {
    const bsLink = document.createElement('link');
    bsLink.rel = 'stylesheet';
    bsLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    bsLink.integrity = 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH';
    bsLink.crossOrigin = 'anonymous';

    const bsScript = document.createElement('script');
    bsScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    bsScript.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
    bsScript.crossOrigin = 'anonymous';

    document.head.appendChild(bsLink);
    document.body.appendChild(bsScript);

    return () => {
      document.head.removeChild(bsLink);
      document.body.removeChild(bsScript);
    };
  }, []);

  return (
    <div className="bg-light text-dark" style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <EventHighlights />
      <AuthSections />
    </div>
  );
};

export default App;
