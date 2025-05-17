import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-pydah-primary to-pydah-accent relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg')] opacity-5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/10 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white/5 animate-float-delay-2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6 animate-fade-in-up">
            Ready to Transform <br />Your Business?
          </h2>
          <p className="body-text text-white/90 mb-10 animate-fade-in-up" style={{animationDelay: "0.2s"}}>
            Let's build the perfect digital solution tailored to your needs. From websites to custom tools, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{animationDelay: "0.4s"}}>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-pydah-primary px-8 py-3 rounded-lg font-medium hover:bg-pydah-light transition-colors duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2 group"
            >
              Get In Touch
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;