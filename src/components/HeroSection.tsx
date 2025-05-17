import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen w-full pb-10 relative overflow-hidden bg-gradient-to-br from-white to-pydah-light flex items-center"
      style={{ height: '100vh' }}
    >
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-pydah-secondary/10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-pydah-primary/10 animate-float-delay"></div>
      <div className="absolute top-40 left-1/4 w-32 h-32 rounded-full bg-pydah-accent/10 animate-float-delay-2"></div>
      
      <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        {/* Left Content - Enhanced Alignment */}
        <div className="lg:w-1/2 space-y-6 mb-8 lg:mb-0 animate-fade-in-up flex flex-col justify-center" style={{animationDelay: "0.2s"}}>
          {/* Enhanced Logo Container with better spacing */}
          <div className="relative group mb-6">
            <img 
              src="https://i.ibb.co/ZRR1GSQx/logo1.png" 
              alt="PYDAH SOFT Logo" 
              className="h-20 md:h-24 lg:h-52 transition-all duration-500 transform group-hover:scale-105" 
            />
            <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pydah-primary to-pydah-accent w-0 group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Enhanced Text Hierarchy */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pydah-dark leading-tight">
              Building Future-Ready
              <br /> 
              <span className="bg-gradient-to-r from-pydah-primary to-pydah-accent bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-pydah-gray max-w-xl leading-relaxed">
              We craft intelligent software solutions that drive business transformation through cutting-edge AI & cloud technologies.
            </p>
           
          </div>
        </div>

        {/* Right Content - Enhanced Image Presentation */}
        <div className="lg:w-1/2  justify-center mt-5 lg:mt-0 lg:justify-end ">
          <div className="relative">
            <img 
              src="https://i.ibb.co/BYr1y6j/hero.png" 
              alt="Digital Solutions Illustration" 
              className="max-w-full h-auto w-64 sm:w-80 md:w-96 lg:max-w-lg xl:max-w-3xl animate-float"
              style={{ maxHeight: '90vh' }}
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-pydah-primary/10 to-pydah-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
        </div>

        {/* Scroll Down Indicator - Enhanced */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center">
          <p className="text-sm text-pydah-gray mb-2">Scroll Down</p>
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-pydah-primary cursor-pointer hover:text-pydah-accent transition-colors"
          >
            <path 
              d="M7 10L12 15L17 10" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
