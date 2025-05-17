import React from 'react';
import { Globe, Smartphone, Code, Search, Server, Zap, Layers, Database, Cpu, BarChart2 } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Web Solutions',
      description: 'Beautiful, responsive websites that captivate your audience and drive engagement. We create digital experiences that leave lasting impressions.',
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: 'Mobile Experiences',
      description: 'Seamless mobile applications that users love. We build intuitive interfaces with fluid navigation and delightful interactions.',
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      title: 'Cloud Architecture',
      description: 'Future-proof cloud infrastructure designed for scalability and performance. We optimize your digital foundation for growth.',
      icon: <Server className="w-8 h-8" />,
    },
    {
      title: 'Data Intelligence',
      description: 'Transform raw data into actionable insights. Our analytics solutions help you make informed business decisions with confidence.',
      icon: <BarChart2 className="w-8 h-8" />,
    },
    {
      title: 'Digital Strategy',
      description: 'Comprehensive technology roadmaps aligned with your business goals. We help navigate the digital landscape effectively.',
      icon: <Layers className="w-8 h-8" />,
    },
    {
      title: 'Innovation Labs',
      description: 'Cutting-edge solutions leveraging emerging technologies. We experiment so you can stay ahead of the curve.',
      icon: <Zap className="w-8 h-8" />,
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-pydah-light to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pydah-secondary/5 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-pydah-primary/5 animate-float-delay-2"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pydah-accent/5 animate-float-delay-4"></div>
      
      {/* Central SVG Illustration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg 
          width="600" 
          height="600" 
          viewBox="0 0 600 600" 
          className="opacity-10 animate-pulse-slow"
        >
          <circle cx="300" cy="300" r="250" stroke="currentColor" strokeWidth="2" fill="none" className="text-pydah-primary" />
          <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-pydah-secondary" strokeDasharray="5,5" />
          <path 
            d="M300,50 A250,250 0 0,1 550,300 A250,250 0 0,1 300,550 A250,250 0 0,1 50,300 A250,250 0 0,1 300,50 Z" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none" 
            className="text-pydah-accent"
          />
          <polygon 
            points="300,100 400,300 300,500 200,300" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            className="text-pydah-primary"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">Elevate Your Digital Presence</span>
          </h2>
          <p className="text-xl text-pydah-gray mb-8 animate-fade-in-up" style={{animationDelay: "0.2s"}}>
            We don't just build solutions - we craft digital experiences that resonate with your audience and drive measurable results.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pydah-primary to-pydah-accent mx-auto animate-scale-x" style={{animationDelay: "0.4s"}}></div>
        </div>
        
        {/* Services Display */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up relative overflow-hidden"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-pydah-light/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-pydah-primary/10 flex items-center justify-center mb-6 text-pydah-primary group-hover:bg-pydah-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pydah-dark group-hover:text-pydah-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-pydah-gray mb-6">{service.description}</p>
                
                {/* Animated hover effect */}
                
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Information */}
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-pydah-primary/5 to-pydah-accent/5 p-10 rounded-3xl border border-pydah-light/20 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: "0.6s"}}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-full bg-pydah-primary/10 flex items-center justify-center text-pydah-primary animate-pulse">
                <Cpu className="w-20 h-20" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-pydah-dark">Why Choose Our Services?</h3>
              <p className="text-lg text-pydah-gray mb-6">
                We combine technical expertise with creative vision to deliver solutions that not only function flawlessly but also create meaningful connections with your users. Our approach is rooted in understanding your unique challenges and opportunities.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-pydah-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>User-centered design</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-pydah-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Future-proof architecture</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-pydah-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Agile development</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-pydah-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Continuous support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;