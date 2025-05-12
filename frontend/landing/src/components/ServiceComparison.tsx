import React from 'react';
import { CheckCircle, XCircle, Atom } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

const ServiceComparison: React.FC = () => {
  const t = useTranslations();

  if (!t?.services) return null;

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Atomic Flow */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-atomic-blue">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-atomic-blue mb-2 flex items-center justify-center">
                  <Atom className="w-8 h-8 mr-2" />
                  <span className="font-light">atomic</span>
                  <strong>flow</strong>
                </h3>
                <p className="text-text-secondary">{t.services.atomicflow.subtitle}</p>
              </div>
              <ul className="space-y-4">
                {t.services.atomicflow.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-atomic-blue flex-shrink-0" />
                    <span className="ml-3 text-text-secondary font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Solutions */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-text-primary mb-2">
                  {t.services.others.title}
                </h3>
                <p className="text-text-secondary">{t.services.others.subtitle}</p>
              </div>
              <ul className="space-y-4">
                {t.services.others.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <XCircle className="h-5 w-5 text-error flex-shrink-0" />
                    <span className="ml-3 text-text-secondary font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-atomic-blue hover:bg-atomic-blue-600 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-lg inline-flex items-center hover:scale-105"
            >
              {t.services.cta}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;