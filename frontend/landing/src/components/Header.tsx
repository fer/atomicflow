import React, { useState, useEffect } from 'react';
import { Atom, Menu, X } from 'lucide-react';
import { siteConfig } from '../config/site';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../hooks/useTranslations';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = useTranslations();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  if (!t?.nav) return null;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-atomic-blue shadow-lg py-3' : 'bg-atomic-blue py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Atom className="h-8 w-8 text-white" />
            <span className="text-2xl text-white">
              <span className="font-light">atomic</span><strong>flow</strong>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-white/90 hover:text-white transition-colors"
            >
              {t.nav.solutions}
            </button>
            <button 
              onClick={() => scrollToSection('proceso')}
              className="text-white/90 hover:text-white transition-colors"
            >
              {t.nav.methodology}
            </button>
            <button 
              onClick={() => scrollToSection('precios')}
              className="text-white/90 hover:text-white transition-colors"
            >
              {t.nav.pricing}
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-white/90 hover:text-white transition-colors"
            >
              {t.nav.additionalServices}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white/90 hover:text-white transition-colors"
            >
              {t.nav.faq}
            </button>
            <LanguageSwitcher />
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-white hover:bg-white/90 text-atomic-blue font-semibold py-2 px-6 rounded-md transition-all duration-300 shadow-lg hover:scale-105"
            >
              {language === 'es' ? siteConfig.cta.primary : 'Start Transformation'}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        <div 
          className={`fixed inset-x-0 top-[72px] bottom-0 bg-atomic-blue shadow-lg transition-all duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="container h-full px-6 py-8">
            <div className="flex flex-col h-full">
              <div className="flex-1 space-y-6">
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="w-full text-left text-2xl font-light text-white/90 hover:text-white transition-colors py-2"
                >
                  {t.nav.solutions}
                </button>
                <button 
                  onClick={() => scrollToSection('proceso')}
                  className="w-full text-left text-2xl font-light text-white/90 hover:text-white transition-colors py-2"
                >
                  {t.nav.methodology}
                </button>
                <button 
                  onClick={() => scrollToSection('precios')}
                  className="w-full text-left text-2xl font-light text-white/90 hover:text-white transition-colors py-2"
                >
                  {t.nav.pricing}
                </button>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="w-full text-left text-2xl font-light text-white/90 hover:text-white transition-colors py-2"
                >
                  {t.nav.additionalServices}
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="w-full text-left text-2xl font-light text-white/90 hover:text-white transition-colors py-2"
                >
                  {t.nav.faq}
                </button>
              </div>
              <div className="pt-6 border-t border-white/10">
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="w-full bg-white hover:bg-white/90 text-atomic-blue font-semibold py-4 px-6 rounded-md transition-all duration-300 shadow-lg hover:scale-105 text-lg"
                >
                  {language === 'es' ? siteConfig.cta.primary : 'Start Transformation'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;