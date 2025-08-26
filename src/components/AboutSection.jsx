import React from 'react';
import { Target, Heart, Lightbulb, Users, CheckCircle, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Excelência',
      description: 'Comprometimento com a qualidade em todos os nossos cursos e atendimento.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Metodologias modernas e atualizadas com as melhores práticas do mercado.'
    },
    {
      icon: Users,
      title: 'Humanização',
      description: 'Formação técnica aliada ao desenvolvimento humano e ético.'
    },
    {
      icon: Target,
      title: 'Resultados',
      description: 'Foco na empregabilidade e sucesso profissional dos nossos alunos.'
    }
  ];

  const achievements = [
    'Mais de 15 anos de experiência em educação',
    'Reconhecimento pelo MEC e órgãos competentes',
    'Corpo docente altamente qualificado',
    'Metodologia prática e atualizada',
    'Parcerias com instituições renomadas',
    'Acompanhamento pós-formação'
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Sobre o Instituto Paiva
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transformando Vidas Através da
            <span className="block text-primary">Educação de Qualidade</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Há mais de uma década, o Instituto Paiva se dedica à formação de profissionais 
            de excelência na área da saúde, combinando conhecimento técnico com valores humanos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Formar profissionais competentes e éticos na área da saúde, proporcionando 
                educação de qualidade que transforme vidas e contribua para o desenvolvimento 
                da sociedade.
              </p>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button className="group bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300 hover:scale-105 flex items-center">
              Conheça Nossa História
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">5000+</div>
                  <div className="text-blue-100">Alunos Formados</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <div className="text-blue-100">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-blue-100">Taxa de Aprovação</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">4.9</div>
                  <div className="text-blue-100">Avaliação Média</div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-2">Reconhecimento Nacional</h4>
                <p className="text-blue-100">
                  Melhor instituição de pós-graduação em saúde do Nordeste
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

