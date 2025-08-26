import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Clock, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Contato', href: '#contato' }
  ];

  const courses = [
    'Pós-Graduação em Acupuntura',
    'Acompanhante Terapêutico',
    'Terapia Manual',
    'Neurofuncional',
    'Estética Avançada',
    'ABA - Análise do Comportamento'
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/institutopaiva', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/institutopaiva', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com/company/institutopaiva', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Instituto Paiva</h3>
                <p className="text-gray-400 text-sm">Cursos & Capacitações</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Há mais de 15 anos transformando vidas através da educação de qualidade 
              na área da saúde. Reconhecido pelo MEC e com excelência comprovada.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Cursos</h4>
            <ul className="space-y-3">
              {courses.slice(0, 6).map((course, index) => (
                <li key={index}>
                  <a
                    href="#cursos"
                    className="text-gray-300 hover:text-accent transition-colors duration-300 text-sm leading-relaxed block group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {course}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(81) 99841-9268</p>
                  <p className="text-gray-400 text-sm">WhatsApp disponível</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">contato@institutopaiva.com.br</p>
                  <p className="text-gray-400 text-sm">Resposta em até 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Recife & Caruaru</p>
                  <p className="text-gray-400 text-sm">Pernambuco, Brasil</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Seg - Sex: 8h às 18h</p>
                  <p className="text-gray-400 text-sm">Sáb: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; 2024 Instituto Paiva. Todos os direitos reservados.</p>
              <p className="mt-1">
                CNPJ: 00.000.000/0001-00 | 
                <a href="#" className="hover:text-accent transition-colors ml-1">Política de Privacidade</a> | 
                <a href="#" className="hover:text-accent transition-colors ml-1">Termos de Uso</a>
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Desenvolvido com ❤️</span>
              
              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-300 hover:scale-110 group"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-blue-600" />
    </footer>
  );
};

export default Footer;

