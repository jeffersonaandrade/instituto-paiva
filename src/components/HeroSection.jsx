import React, { useEffect, useState } from 'react';
import { Play, ArrowRight, Star, Users, Award, Clock } from 'lucide-react';

const HeroSection = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles for background animation
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 6
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const stats = [
    { icon: Users, value: '5000+', label: 'Alunos Formados' },
    { icon: Award, value: '15+', label: 'Anos de Experiência' },
    { icon: Star, value: '4.9', label: 'Avaliação Média' },
    { icon: Clock, value: '100%', label: 'Aprovação MEC' }
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-700 to-blue-900">
        {/* Particles */}
        <div className="particles-bg">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Star className="w-4 h-4 mr-2 text-accent" />
                Melhor Pós-graduação 2020/2021/2022/2023/2024
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transforme sua
                <span className="block text-accent animate-gradient bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                  Carreira
                </span>
                com Excelência
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                Cursos de pós-graduação e capacitações reconhecidos pelo MEC. 
                Seja um profissional de destaque na área da saúde.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 animate-pulse-glow flex items-center justify-center">
                Conheça Nossos Cursos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Assista ao Vídeo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-3 group-hover:bg-white/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Video/Image Section */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 animate-float">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-accent-foreground ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Vídeo Institucional</h3>
                  <p className="text-gray-300">Conheça nossa história e metodologia</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-lg p-4 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Certificado MEC</div>
                  <div className="text-sm text-gray-600">Reconhecido</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Turmas Abertas</div>
                  <div className="text-sm text-gray-600">Inscreva-se já!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

