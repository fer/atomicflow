import React from 'react';
import { ChevronRight, Atom, Repeat, ArrowRight } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';
import { siteConfig } from '../config/site';

const Hero: React.FC = () => {
  const t = useTranslations();

  if (!t?.hero) {
    return (
      <div className="pt-32 pb-20 bg-atomic-blue">
        <div className="container mx-auto px-6">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6">
              <div className="h-8 bg-white/20 rounded w-3/4"></div>
              <div className="h-4 bg-white/20 rounded w-1/2"></div>
              <div className="h-12 bg-white/20 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="pt-32 pb-20 bg-atomic-blue relative overflow-hidden">
      <div className="workflow-grid absolute inset-0 opacity-20"></div>
      <div className="workflow-dots absolute inset-0 opacity-30"></div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <p className="text-sm uppercase tracking-wider text-white/80 mb-4">{siteConfig.tagline}</p>
            <p className="text-4xl md:text-5xl text-white mb-4 drop-shadow-md leading-tight">
              {t.hero.title.split('máquina de beneficios').map((part, i) => 
                i === 0 ? (
                  <React.Fragment key={i}>
                    {part}<span className="font-semibold bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg inline-block transform hover:scale-105 transition-all duration-300">profit machine</span>
                  </React.Fragment>
                ) : part
              )}
            </p>
            <p className="text-xl text-white mb-8 drop-shadow-md">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={scrollToContact}
                className="bg-white hover:bg-white/90 text-atomic-blue font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-lg flex items-center justify-center hover:scale-105"
              >
                {t.hero.cta.primary}
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={() => document.getElementById('proceso')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 flex items-center justify-center hover:scale-105 backdrop-blur-sm shadow-lg"
              >
                {t.hero.cta.secondary}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-atomic-blue-50 rounded-full">
                    <Atom className="w-8 h-8 text-atomic-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg text-text-primary">{t.hero.benefits.title}</h3>
                    <p className="text-text-secondary text-sm">{t.hero.benefits.subtitle}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {t.hero.benefits.list.map((benefit, index) => (
                    <div key={index} className="flex items-center transform hover:translate-x-1 transition-transform">
                      <div className="bg-atomic-blue-50 p-2 rounded-full">
                        <svg className="w-4 h-4 text-atomic-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-text-secondary font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center bg-atomic-blue-50 p-4 rounded-lg">
                  <Repeat className="w-5 h-5 mr-2 text-atomic-blue" />
                  <span className="text-sm font-semibold text-atomic-blue">
                    {t.hero.benefits.optimization}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;