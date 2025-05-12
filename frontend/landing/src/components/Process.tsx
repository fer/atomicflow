import React from 'react';
import { ClipboardCheck, Wrench, BarChart as ChartBar, ArrowRight } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

const Process: React.FC = () => {
  const t = useTranslations();

  if (!t?.process) {
    return (
      <section className="py-20 bg-atomic-blue">
        <div className="container mx-auto px-6">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-white/20 rounded w-1/3 mx-auto"></div>
            <div className="h-4 bg-white/20 rounded w-1/2 mx-auto"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/10 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="h-6 bg-white/20 rounded w-3/4"></div>
                    <div className="h-4 bg-white/20 rounded w-full"></div>
                    <div className="h-4 bg-white/20 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="proceso" className="py-20 bg-atomic-blue relative overflow-hidden">
      <div className="workflow-grid absolute inset-0 opacity-10"></div>
      <div className="workflow-dots absolute inset-0 opacity-30"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.process.title}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.process.steps.map((step, index) => (
            <div key={index} className="relative">
              {index < t.process.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-white/30" />
                </div>
              )}
              
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1 flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-atomic-blue-50 rounded-full">
                    {index === 0 ? (
                      <ClipboardCheck className="w-6 h-6 text-atomic-blue" />
                    ) : index === 1 ? (
                      <Wrench className="w-6 h-6 text-atomic-blue" />
                    ) : (
                      <ChartBar className="w-6 h-6 text-atomic-blue" />
                    )}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-3 mb-6">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-text-secondary transform hover:translate-x-1 transition-transform">
                        <div className="w-1.5 h-1.5 bg-atomic-blue rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {step.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-atomic-blue-50 rounded-lg p-3">
                        <div className="text-sm text-text-secondary">
                          {metric.label}
                        </div>
                        <div className="text-lg font-bold text-atomic-blue">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-text-secondary">
                      Typical duration
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-atomic-blue-50 text-atomic-blue">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-white/90 text-atomic-blue font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-lg inline-flex items-center hover:scale-105 transform"
          >
            {t.process.cta}
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;