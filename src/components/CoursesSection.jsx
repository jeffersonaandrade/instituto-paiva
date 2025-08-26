import React, { useState } from 'react';
import { Clock, Users, Award, Calendar, ArrowRight, Star, BookOpen } from 'lucide-react';

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos os Cursos' },
    { id: 'acupuntura', name: 'Acupuntura' },
    { id: 'terapias', name: 'Terapias' },
    { id: 'estetica', name: 'Estética' },
    { id: 'saude', name: 'Saúde' }
  ];

  const courses = [
    {
      id: 1,
      category: 'acupuntura',
      title: 'Pós-Graduação em Acupuntura',
      subtitle: 'Reconhecido pelo MEC',
      duration: '12 meses',
      students: '150+ alunos',
      rating: 4.9,
      price: 'R$ 499,00/mês',
      image: '/api/placeholder/400/250',
      features: ['100% Presencial', 'Certificado MEC', 'Prática Clínica', 'Material Incluso'],
      description: 'Formação completa em acupuntura tradicional chinesa com prática supervisionada.',
      popular: true
    },
    {
      id: 2,
      category: 'terapias',
      title: 'Acompanhante Terapêutico',
      subtitle: 'Formação Especializada',
      duration: '120h',
      students: '80+ alunos',
      rating: 4.8,
      price: 'R$ 299,00/mês',
      image: '/api/placeholder/400/250',
      features: ['Carga Horária 120h', 'Prática Supervisionada', 'Certificado Reconhecido'],
      description: 'Capacitação para atuar como acompanhante terapêutico em diversas áreas.'
    },
    {
      id: 3,
      category: 'terapias',
      title: 'Terapia Manual',
      subtitle: 'Técnicas Avançadas',
      duration: '6 meses',
      students: '120+ alunos',
      rating: 4.9,
      price: 'R$ 399,00/mês',
      image: '/api/placeholder/400/250',
      features: ['Técnicas Modernas', 'Prática Intensiva', 'Professores Especialistas'],
      description: 'Domine as principais técnicas de terapia manual e massoterapia.'
    },
    {
      id: 4,
      category: 'saude',
      title: 'Neurofuncional',
      subtitle: 'Especialização Avançada',
      duration: '8 meses',
      students: '90+ alunos',
      rating: 4.7,
      price: 'R$ 449,00/mês',
      image: '/api/placeholder/400/250',
      features: ['Abordagem Científica', 'Casos Clínicos', 'Atualização Constante'],
      description: 'Especialização em reabilitação neurofuncional com base científica.'
    },
    {
      id: 5,
      category: 'estetica',
      title: 'Estética Avançada',
      subtitle: 'Técnicas Modernas',
      duration: '10 meses',
      students: '200+ alunos',
      rating: 4.8,
      price: 'R$ 379,00/mês',
      image: '/api/placeholder/400/250',
      features: ['Equipamentos Modernos', 'Prática Real', 'Mercado Aquecido'],
      description: 'Formação completa em procedimentos estéticos faciais e corporais.'
    },
    {
      id: 6,
      category: 'saude',
      title: 'ABA - Análise do Comportamento',
      subtitle: 'Formação Especializada',
      duration: '12 meses',
      students: '110+ alunos',
      rating: 4.9,
      price: 'R$ 429,00/mês',
      image: '/api/placeholder/400/250',
      features: ['Metodologia Científica', 'Supervisão Clínica', 'Certificação Internacional'],
      description: 'Especialização em Análise do Comportamento Aplicada (ABA).'
    }
  ];

  const filteredCourses = activeCategory === 'todos' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section id="cursos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Nossos Cursos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Escolha Sua
            <span className="block text-primary">Especialização</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cursos reconhecidos pelo MEC com metodologia prática e professores especialistas. 
            Transforme sua carreira com a qualidade Instituto Paiva.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div 
              key={course.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-80" />
                    <div className="text-sm opacity-80">Imagem do Curso</div>
                  </div>
                </div>
                
                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                    🔥 Mais Procurado
                  </div>
                )}

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-800">{course.rating}</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-primary font-medium text-sm">{course.subtitle}</p>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Course Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary">{course.price}</div>
                    <div className="text-sm text-gray-500">Mensalidade</div>
                  </div>
                  <button className="group bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-all duration-300 hover:scale-105 flex items-center">
                    Saiba Mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Não encontrou o curso ideal?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e descubra outras opções de cursos e especializações 
              que podem ser perfeitas para seu perfil profissional.
            </p>
            <button className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105">
              Fale com um Consultor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

