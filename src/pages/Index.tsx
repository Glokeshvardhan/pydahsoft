
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  // Apply animation classes when elements become visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-up, .animate-scale-in, .animate-slide-in-right');
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SolutionsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
