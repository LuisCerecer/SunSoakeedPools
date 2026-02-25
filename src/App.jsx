import React, { createContext, useContext, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Process from './pages/Process';
import Services from './pages/Services';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';

const NavigationContext = createContext();

export function useNavigation() {
  return useContext(NavigationContext);
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'process':
        return <Process />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      case 'contactus':
        return <RequestQuote />;
      default:
        return <Home />;
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      <Header />
      {renderPage()}
      {import.meta.env.PROD && <Analytics />}
      {import.meta.env.PROD && <SpeedInsights />}
    </NavigationContext.Provider>
  );
}
