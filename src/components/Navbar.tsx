import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleVacanciesClick = () => {
    navigate('/vacancies');
    setIsMenuOpen(false);
  };

  const handleHashClick = (hash) => {
    // First navigate to home if we're not there
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    // Then scroll to the section
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', hash: '#home' },
    { name: 'About', hash: '#about' },
    { name: 'Services', hash: '#services' },
    { name: 'Solutions', hash: '#solutions' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white shadow-md' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button onClick={() => handleHashClick('#home')} className="flex items-center">
          <img 
            src="https://i.ibb.co/5W3yQydc/pydahsoft-original-logo.png" 
            alt="PYDAH SOFT Logo" 
            className="h-28 w-62 md:h-20 md:w-68 transition-all duration-300 hover:scale-100"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleHashClick(link.hash)}
              className="font-medium text-pydah-dark-gray hover:text-pydah-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pydah-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={handleVacanciesClick}
            className="font-medium to-pydah-accent text-black px-2 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Vacancies
          </button>
          <button 
            onClick={() => handleHashClick('#contact')}
            className="font-medium text-pydah-dark-gray hover:text-pydah-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pydah-primary after:transition-all hover:after:w-full"
          >
            Contact
          </button>
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
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button 
              className="text-pydah-dark" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 px-6 py-4 flex flex-col space-y-6 overflow-y-auto">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleHashClick(link.hash)}
                className="font-medium text-pydah-dark-gray hover:text-pydah-primary transition-colors py-2 text-lg text-left"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={handleVacanciesClick}
              className="font-medium pr-32 to-pydah-accent text-black rounded-lg hover:opacity-90 transition-opacity text-center"
            >
              Vacancies
            </button>
            <button 
              onClick={() => handleHashClick('#contact')}
              className="font-medium text-pydah-dark-gray hover:text-pydah-primary transition-colors py-2 text-lg text-left"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 md:hidden"
          style={{ zIndex: 999 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
