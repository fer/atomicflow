import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

const Faq: React.FC = () => {
  const t = useTranslations();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!t?.faq) return null;

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t.faq.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {t.faq.questions?.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className={`w-full px-6 py-4 text-left font-medium flex justify-between items-center transition-colors ${
                  openIndex === index 
                    ? 'bg-atomic-blue text-white' 
                    : 'bg-white text-text-primary hover:bg-gray-50'
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 bg-white border-t border-gray-200">
                  <p className="text-text-secondary">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-6">
            {t.faq.cta.text}
          </p>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-atomic-blue hover:bg-atomic-blue-600 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:scale-105"
          >
            {t.faq.cta.button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;