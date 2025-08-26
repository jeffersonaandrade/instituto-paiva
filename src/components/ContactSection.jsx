import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone / WhatsApp',
      info: '(81) 99841-9268',
      description: 'Atendimento de segunda a sexta',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@institutopaiva.com.br',
      description: 'Resposta em até 24 horas',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'Boa Vista, Recife',
      description: 'R. Carlos Pôrto Carreiro, PE',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      info: 'Seg - Sex: 8h às 18h',
      description: 'Sáb: 8h às 12h',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const courses = [
    'Pós-Graduação em Acupuntura',
    'Acompanhante Terapêutico',
    'Terapia Manual',
    'Neurofuncional',
    'Estética Avançada',
    'ABA - Análise do Comportamento',
    'Outro curso'
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Entre em Contato
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vamos Conversar Sobre
            <span className="block text-primary">Seu Futuro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para esclarecer suas dúvidas e ajudar você a escolher 
            o curso ideal para sua carreira profissional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-yellow-400/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Solicite Informações
              </h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="Seu nome completo"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="(81) 99999-9999"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Curso de Interesse
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Selecione um curso</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Conte-nos mais sobre seus objetivos e dúvidas..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary text-white hover:bg-blue-800 hover:scale-105 animate-pulse-glow'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Mensagem Enviada!
                  </h4>
                  <p className="text-gray-600">
                    Obrigado pelo contato. Retornaremos em breve!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nossa equipe está pronta para atendê-lo e esclarecer todas as suas dúvidas. 
                Entre em contato através dos canais abaixo ou preencha o formulário ao lado.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {info.info}
                      </p>
                      <p className="text-sm text-gray-600">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Nossa Localização</h4>
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden relative group cursor-pointer">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.1234567890123!2d-34.88123456789012!3d-8.012345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18dd5f33db25%3A0xa62df833efd06622!2sR.%20Carlos%20P%C3%B4rto%20Carreiro%20-%20Boa%20Vista%2C%20Recife%20-%20PE%2C%2052010-040!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="group-hover:scale-105 transition-transform duration-300"
                  title="Localização do Instituto Paiva"
                ></iframe>
                
                {/* Overlay with info */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">Instituto Paiva</p>
                    <p className="text-sm text-gray-600">R. Carlos Pôrto Carreiro, Boa Vista</p>
                    <p className="text-sm text-gray-600">Recife - PE</p>
                  </div>
                </div>
              </div>
              
              {/* Address Info */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Instituto Paiva</p>
                    <p className="text-sm text-gray-600">R. Carlos Pôrto Carreiro, Boa Vista</p>
                    <p className="text-sm text-gray-600">Recife - PE, 52010-040</p>
                    <a 
                      href="https://www.google.com/maps/place/R.+Carlos+P%C3%B4rto+Carreiro+-+Boa+Vista,+Recife+-+PE,+52010-040/data=!4m2!3m1!1s0x7ab18dd5f33db25:0xa62df833efd06622?sa=X&ved=1t:242&ictx=111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-blue-800 text-sm font-medium mt-2 transition-colors"
                    >
                      Ver no Google Maps
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

