
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const coreValues = [
    { name: 'Innovation', description: 'Driving change and continuously evolving to meet emerging needs and create value.' },
    { name: 'Integrity', description: 'We act with high moral and ethical standards, ensuring transparency and accountability.' },
    { name: 'Excellence', description: 'We strive to set new limits, exceed expectations, and improve everything we do.' },
    { name: 'Collaboration', description: 'We believe in the power of teamwork and shared perspective to achieve brilliant results.' },
    { name: 'Customer Focus', description: 'We focus deeply on understanding needs and deliver solutions that exceed expectations.' },
    { name: 'Sustainability', description: 'We design solutions that create lasting positive impact for people and the planet.' }
  ];
  
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-pydah-light animate-float-delay"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-pydah-secondary/10 animate-float-delay-2"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-6 animate-fade-in-up">The Principles That <span className="gradient-text">Define Us</span></h2>
          <p className="body-text text-pydah-gray animate-fade-in-up" style={{animationDelay: "0.2s"}}>
            Our values are the foundation of our culture and the compass that guides our decisions and actions.
          </p>
        </div>
        
        {/* Who We Are Section */}
        <div className="mb-20 mt-09">
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 animate-scale-in" style={{animationDelay: "0.1s"}}>
              <div className="mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-pydah-primary flex items-center justify-center text-white mr-3">
                  <Check size={18} />
                </div>
                <h4 className="font-montserrat font-bold text-xl">EXPERT DEVELOPERS</h4>
              </div>
              <p className="text-pydah-gray">
                Our skilled team designs specializes in custom development for various industries and challenging business needs.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-scale-in" style={{animationDelay: "0.3s"}}>
              <div className="mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-pydah-primary flex items-center justify-center text-white mr-3">
                  <Check size={18} />
                </div>
                <h4 className="font-montserrat font-bold text-xl">INDUSTRY 
EXPERTISE</h4>
              </div>
              <p className="text-pydah-gray">
               Leveraging our profound industry knowledge, we deliver software that achieves
tangible results for your business.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-scale-in" style={{animationDelay: "0.5s"}}>
              <div className="mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-pydah-primary flex items-center justify-center text-white mr-3">
                  <Check size={18} />
                </div>
                <h4 className="font-montserrat font-bold text-xl">CUTTING-EDGE TECHNOLOGY</h4>
              </div>
              <p className="text-pydah-gray">
                We stay ahead of the curve with the latest frameworks, tools, and methodologies.
              </p>
            </div>
          </div>
        </div>
        
        {/* Core Values Grid */}
        
      </div>
    </section>
  );
};

export default AboutSection;
