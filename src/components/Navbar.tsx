
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-md' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <span className="text-2xl font-montserrat font-bold text-pydah-primary">PYDAH</span>
          <span className="text-2xl font-montserrat font-bold text-pydah-secondary">SOFT</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-medium text-pydah-dark-gray hover:text-pydah-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pydah-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-pydah-dark" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-medium text-pydah-dark-gray hover:text-pydah-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="primary-btn self-start">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
