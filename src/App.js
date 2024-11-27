import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import PageWrapper from './components/PageWrapper';
import Gallery from './pages/gallary';
import ContactPage from './pages/contact';
import Header from './components/Header';
import AuthPage from './pages/AuthPage';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <Header />
      <ScrollToHash />
      <Routes>
        <Route path="/JR-Preporatory-School" element={<PageWrapper />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/authentication" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
