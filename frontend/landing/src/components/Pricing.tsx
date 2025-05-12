import React, { useState, useEffect } from 'react';
import { Check, HelpCircle, AlertCircle } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

interface PricingTierProps {
  name: string;
  executions: string;
  price: string;
  features: string[];
  recommended?: boolean;
  isAnnual: boolean;
  planKey: string;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  name, 
  executions, 
  price, 
  features, 
  recommended, 
  isAnnual,
  planKey 
}) => {
  const displayPrice = isAnnual ? 
    parseFloat(price.replace(',', '.')) * 0.8 : 
    parseFloat(price.replace(',', '.'));

  const handlePlanSelection = () => {
    // Create and dispatch custom event with plan data
    const event = new CustomEvent('selectPlan', {
      detail: { 
        planKey,
        billingCycle: isAnnual ? 'annual' : 'monthly'
      }
    });
    window.dispatchEvent(event);

    // Scroll to contact form
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`bg-white rounded-lg p-8 shadow-lg border ${
      recommended 
        ? 'border-atomic-blue' 
        : 'border-gray-200'
    } relative flex flex-col h-full`}>
      {recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-atomic-blue text-white px-4 py-1 rounded-full text-sm font-medium">
            Recomendado
          </span>
        </div>
      )}
      {isAnnual && (
        <div className="absolute -top-4 right-4">
          <span className="bg-accent-success text-white px-3 py-1 rounded-full text-xs font-medium">
            -20%
          </span>
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-text-primary mb-2">{name}</h3>
        <p className="text-text-secondary mb-4">{executions} ejecuciones/mes</p>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-atomic-blue transition-all duration-300">
            {displayPrice.toFixed(2).replace('.', ',')}€
          </span>
          <span className="text-text-secondary ml-2">/ejecución</span>
        </div>
      </div>
      <ul className="space-y-4 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-atomic-blue flex-shrink-0 mt-0.5" />
            <span className="ml-3 text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={handlePlanSelection}
        className={`w-full mt-8 py-3 px-6 rounded-md font-medium transition-colors ${
          recommended
            ? 'bg-atomic-blue text-white hover:bg-atomic-blue-600'
            : 'border-2 border-atomic-blue text-atomic-blue hover:bg-atomic-blue-50'
        }`}
      >
        Empezar ahora
      </button>
    </div>
  );
};

const Pricing: React.FC = () => {
  const t = useTranslations();
  const [isAnnual, setIsAnnual] = useState(() => {
    const saved = localStorage.getItem('pricingPeriod');
    return saved ? saved === 'annual' : false;
  });

  useEffect(() => {
    localStorage.setItem('pricingPeriod', isAnnual ? 'annual' : 'monthly');
  }, [isAnnual]);

  if (!t?.pricing) return null;

  return (
    <section id="precios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            {t.pricing.subtitle}
          </p>

          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md border border-gray-200">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                !isAnnual
                  ? 'bg-atomic-blue text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
              aria-pressed={!isAnnual}
            >
              {t.pricing.billing.monthly}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                isAnnual
                  ? 'bg-atomic-blue text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
              aria-pressed={isAnnual}
            >
              {t.pricing.billing.annual}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingTier
            name={t.pricing.tiers.starter.name}
            executions={t.pricing.tiers.starter.executions}
            price="0,05"
            features={t.pricing.tiers.starter.features}
            isAnnual={isAnnual}
            planKey="starter"
          />
          <PricingTier
            name={t.pricing.tiers.growth.name}
            executions={t.pricing.tiers.growth.executions}
            price="0,04"
            features={t.pricing.tiers.growth.features}
            recommended
            isAnnual={isAnnual}
            planKey="growth"
          />
          <PricingTier
            name={t.pricing.tiers.business.name}
            executions={t.pricing.tiers.business.executions}
            price="0,03"
            features={t.pricing.tiers.business.features}
            isAnnual={isAnnual}
            planKey="business"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;