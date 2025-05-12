import React from 'react';
import { Wrench, HelpCircle } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

const AdditionalServices: React.FC = () => {
  const t = useTranslations();

  if (!t?.additionalServices) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const handleServiceSelection = (serviceKey: string) => {
    // Scroll to contact form
    const contactForm = document.getElementById('contacto');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }

    // Create and dispatch custom event with service data
    const event = new CustomEvent('selectService', {
      detail: { serviceKey }
    });
    window.dispatchEvent(event);
  };

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t.additionalServices.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t.additionalServices.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(t.additionalServices.categories.support.services).map(([key, service]) => (
            <div key={key} className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="flex-grow">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-text-primary mb-2">
                    {service.name}
                  </h4>
                  <p className="text-text-secondary">
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="inline-block bg-atomic-blue-50 text-atomic-blue px-4 py-2 rounded-full text-sm font-medium">
                    {service.price}
                  </span>
                </div>

                <ul className="space-y-3 min-h-[160px]">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start min-h-[48px]">
                      <HelpCircle className="w-5 h-5 text-atomic-blue flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleServiceSelection(key)}
                className="w-full mt-6 bg-atomic-blue-50 hover:bg-atomic-blue-100 text-atomic-blue font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center"
              >
                Solicitar información
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;