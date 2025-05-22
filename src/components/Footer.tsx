import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pydah-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <a href="#home" className="inline-block mb-4">
              <img 
                src="https://i.ibb.co/dw75NxCj/pydahlogo.jpg" 
                alt="PYDAH SOFT Logo" 
                className="h-16  w-48 md:h-20 transition-all duration-300 hover:scale-105"
              />
            </a>
            <p className="text-pydah-light/80 mb-6">
              Building future-ready digital solutions that drive innovation and business transformation.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-pydah-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-pydah-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-pydah-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-pydah-light/80 hover:text-pydah-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="text-pydah-light/80 hover:text-pydah-secondary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-pydah-light/80 hover:text-pydah-secondary transition-colors">Services</a></li>
              <li><a href="#solutions" className="text-pydah-light/80 hover:text-pydah-secondary transition-colors">Solutions</a></li>
              <li><a href="#contact" className="text-pydah-light/80 hover:text-pydah-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#solutions" className="text-pydah-light/80 hover:text-pydah-secondary transition-colors">Web Development</a></li>
              <li><a href="#solutions" className="text-pydah-light/80 hover:text-pydah-secondary transition-colors">Mobile Apps</a></li>
              <li><a href="#solutions" className="text-pydah-light/80 hover:text-pydah-secondary transition-colors">Cloud Solutions</a></li>
              <li><a href="#solutions" className="text-pydah-light/80 hover:text-pydah-secondary transition-colors">AI & ML Solutions</a></li>
              <li><a href="#solutions" className="text-pydah-light/80 hover:text-pydah-secondary transition-colors">Tech Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 text-pydah-secondary" />
                <span className="text-pydah-light/80">    Kakinada - Yanam Road, Patavala, Tallarevu (M),
                  Kakinada District, Andhra Pradesh, India
                  Pincode 533461  </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-pydah-secondary" />
                <a href="tel:9951354444" className="text-pydah-light/80 hover:text-pydah-secondary transition-colors">+91 9951354444</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-pydah-secondary" />
                <a href="mailto:team@pydahsoft.in" className="text-pydah-light/80 hover:text-pydah-secondary transition-colors">team@pydahsoft.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-pydah-light/60">
          <p>© {new Date().getFullYear()} PYDAH SOFT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
