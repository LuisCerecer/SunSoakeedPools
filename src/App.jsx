import React, { createContext, useContext, useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Process from './pages/Process';
import Contact from './pages/Contact';

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
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      <Header />
      {renderPage()}
    </NavigationContext.Provider>
  );
}
