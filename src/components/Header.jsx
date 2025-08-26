import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>(81) 99841-9268</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>contato@institutopaiva.com.br</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={14} />
            <span>Recife & Caruaru</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h1 className={`text-xl font-bold transition-colors ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}>
                  Instituto Paiva
                </h1>
                <p className={`text-sm transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-blue-100'
                }`}>
                  Cursos & Capacitações
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary' 
                      : 'text-white hover:text-accent'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-medium hover:bg-yellow-400 transition-all duration-300 hover:scale-105 animate-pulse-glow">
                Matricule-se
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-primary font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-accent text-accent-foreground py-3 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                Matricule-se
              </button>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone size={14} />
                  <span>(81) 99841-9268</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail size={14} />
                  <span>contato@institutopaiva.com.br</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

