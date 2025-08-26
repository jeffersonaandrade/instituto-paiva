import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import DiferenciaisSection from './components/DiferenciaisSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileOptimizations from './components/MobileOptimizations';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <MobileOptimizations />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <DiferenciaisSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
