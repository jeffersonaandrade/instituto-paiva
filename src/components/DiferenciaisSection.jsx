import React, { useEffect, useState, useRef } from 'react';
import { Award, Users, Clock, Target, CheckCircle, Star, Zap, Shield } from 'lucide-react';

const DiferenciaisSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeOrbit, setActiveOrbit] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOrbit((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const diferenciais = [
    {
      icon: Award,
      title: 'Reconhecimento MEC',
      description: 'Todos os nossos cursos são reconhecidos pelo Ministério da Educação',
      color: 'from-yellow-400 to-orange-500',
      delay: '0s'
    },
    {
      icon: Users,
      title: 'Professores Especialistas',
      description: 'Corpo docente com mestrado, doutorado e experiência prática',
      color: 'from-blue-400 to-blue-600',
      delay: '0.2s'
    },
    {
      icon: Clock,
      title: 'Flexibilidade de Horários',
      description: 'Turmas nos períodos manhã, tarde, noite e fins de semana',
      color: 'from-green-400 to-green-600',
      delay: '0.4s'
    },
    {
      icon: Target,
      title: 'Foco na Prática',
      description: 'Metodologia hands-on com casos reais e supervisão clínica',
      color: 'from-purple-400 to-purple-600',
      delay: '0.6s'
    }
  ];

  const orbitalElements = [
    { icon: CheckCircle, label: 'Qualidade', angle: 0 },
    { icon: Star, label: 'Excelência', angle: 90 },
    { icon: Zap, label: 'Inovação', angle: 180 },
    { icon: Shield, label: 'Confiança', angle: 270 }
  ];

  const stats = [
    { value: '98%', label: 'Taxa de Aprovação', icon: Target },
    { value: '5000+', label: 'Alunos Formados', icon: Users },
    { value: '15+', label: 'Anos de Experiência', icon: Clock },
    { value: '4.9', label: 'Avaliação Média', icon: Star }
  ];

  return (
    <section id="diferenciais" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Nossos Diferenciais
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que Escolher o
            <span className="block text-primary">Instituto Paiva?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais de uma década de excelência em educação, com metodologia inovadora 
            e compromisso com o sucesso dos nossos alunos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Orbital Animation - Inspired by Sydle */}
          <div className="relative flex items-center justify-center">
            {/* Central Hub */}
            <div className="relative z-10">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">IP</div>
                  <div className="text-xs opacity-80">Instituto</div>
                  <div className="text-xs opacity-80">Paiva</div>
                </div>
              </div>
            </div>

            {/* Orbital Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outer Ring */}
              <div className="w-80 h-80 border-2 border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
                {orbitalElements.map((element, index) => (
                  <div
                    key={index}
                    className={`absolute w-16 h-16 -ml-8 -mt-8 transition-all duration-500 ${
                      activeOrbit === index ? 'scale-125' : 'scale-100'
                    }`}
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${element.angle}deg) translateX(160px) rotate(-${element.angle}deg)`,
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    <div className={`w-full h-full rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                      activeOrbit === index 
                        ? 'bg-gradient-to-br from-accent to-yellow-400 text-accent-foreground' 
                        : 'bg-white text-primary border-2 border-primary/20'
                    }`}>
                      <element.icon className="w-6 h-6" />
                    </div>
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs font-medium whitespace-nowrap transition-opacity duration-500 ${
                      activeOrbit === index ? 'opacity-100' : 'opacity-60'
                    }`}>
                      {element.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Inner Ring */}
              <div className="w-56 h-56 border border-blue-200 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-300 rounded-full -ml-1 -mt-1"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 45}deg) translateX(112px)`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="space-y-8">
            {diferenciais.map((diferencial, index) => (
              <div
                key={index}
                className={`group flex items-start space-x-4 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ 
                  animationDelay: diferencial.delay,
                  transitionDelay: diferencial.delay 
                }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${diferencial.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <diferencial.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {diferencial.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {diferencial.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section with Circular Progress */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative w-24 h-24 mx-auto mb-4">
                {/* Circular Progress Background */}
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-200"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.85)}`}
                    className="text-primary transition-all duration-1000 ease-out"
                    style={{
                      transitionDelay: `${index * 0.2}s`
                    }}
                  />
                </svg>
                
                {/* Icon in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary via-blue-600 to-primary rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full animate-float"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Pronto para Transformar sua Carreira?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Junte-se a mais de 5.000 profissionais que já transformaram suas vidas 
                com a qualidade de ensino do Instituto Paiva.
              </p>
              <button className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 animate-pulse-glow">
                Comece Sua Jornada Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;

