import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Calculator, HelpCircle, Plus, Minus } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';
import { emailConfig } from '../config/email';

interface FormData {
  name: string;
  email: string;
  package: string;
  billingCycle: 'monthly' | 'annual';
  message: string;
  additionalServices: {
    flowModification: { selected: boolean; hours: number };
    nodeDevelopment: { selected: boolean; quantity: number };
    prioritySupport: { selected: boolean; months: number };
  };
}

interface FormErrors {
  name?: string;
  email?: string;
  package?: string;
  message?: string;
}

const PACKAGE_EXECUTIONS = {
  starter: { max: 1000 },
  growth: { max: 5000 },
  business: { max: 10000 }
};

const PACKAGE_PRICES = {
  starter: { monthly: 0.05, annual: 0.04 },
  growth: { monthly: 0.04, annual: 0.032 },
  business: { monthly: 0.03, annual: 0.024 }
};

const SERVICE_PRICES = {
  flowModification: 75,
  nodeDevelopment: 500,
  prioritySupport: { monthly: 299, annual: 239 }
};

const ContactForm: React.FC = () => {
  const t = useTranslations();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    package: '',
    billingCycle: 'monthly',
    message: '',
    additionalServices: {
      flowModification: { selected: false, hours: 1 },
      nodeDevelopment: { selected: false, quantity: 1 },
      prioritySupport: { selected: false, months: 1 }
    }
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleServiceSelection = (event: CustomEvent<{ serviceKey: string }>) => {
      const { serviceKey } = event.detail;
      setFormData(prev => ({
        ...prev,
        additionalServices: {
          ...prev.additionalServices,
          [serviceKey]: {
            ...prev.additionalServices[serviceKey as keyof typeof prev.additionalServices],
            selected: true
          }
        }
      }));
    };

    const handlePlanSelection = (event: CustomEvent<{ planKey: string; billingCycle: 'monthly' | 'annual' }>) => {
      const { planKey, billingCycle } = event.detail;
      setFormData(prev => ({
        ...prev,
        package: planKey,
        billingCycle
      }));
    };

    window.addEventListener('selectService', handleServiceSelection as EventListener);
    window.addEventListener('selectPlan', handlePlanSelection as EventListener);
    
    return () => {
      window.removeEventListener('selectService', handleServiceSelection as EventListener);
      window.removeEventListener('selectPlan', handlePlanSelection as EventListener);
    };
  }, []);

  if (!t?.contact?.form) {
    return (
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="animate-pulse text-gray-600">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  const calculateTotalPrice = () => {
    let total = 0;

    if (formData.package) {
      const executions = PACKAGE_EXECUTIONS[formData.package as keyof typeof PACKAGE_EXECUTIONS];
      const pricePerExecution = PACKAGE_PRICES[formData.package as keyof typeof PACKAGE_PRICES][formData.billingCycle];
      total += executions.max * pricePerExecution;
    }

    if (formData.additionalServices.flowModification.selected) {
      total += SERVICE_PRICES.flowModification * formData.additionalServices.flowModification.hours;
    }
    if (formData.additionalServices.nodeDevelopment.selected) {
      total += SERVICE_PRICES.nodeDevelopment * formData.additionalServices.nodeDevelopment.quantity;
    }
    if (formData.additionalServices.prioritySupport.selected) {
      const supportPrice = SERVICE_PRICES.prioritySupport[formData.billingCycle];
      total += supportPrice * formData.additionalServices.prioritySupport.months;
    }

    return total;
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t.contact.form.errors.name;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.errors.email;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.contact.form.errors.emailInvalid;
    }

    if (!formData.package) {
      newErrors.package = t.contact.form.errors.package;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t.contact.form.errors.message;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleBillingCycleChange = (cycle: 'monthly' | 'annual') => {
    setFormData(prev => ({
      ...prev,
      billingCycle: cycle
    }));
  };

  const handleServiceChange = (service: keyof FormData['additionalServices']) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: {
        ...prev.additionalServices,
        [service]: {
          ...prev.additionalServices[service],
          selected: !prev.additionalServices[service].selected
        }
      }
    }));
  };

  const handleQuantityChange = (
    service: keyof FormData['additionalServices'],
    value: number,
    field: 'hours' | 'quantity' | 'months'
  ) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: {
        ...prev.additionalServices,
        [service]: {
          ...prev.additionalServices[service],
          [field]: Math.max(1, value)
        }
      }
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormStatus('submitting');

      try {
        const totalPrice = calculateTotalPrice();
        const selectedServices = Object.entries(formData.additionalServices)
          .filter(([_, value]) => value.selected)
          .map(([key, value]) => ({
            name: key,
            quantity: value.hours || value.quantity || value.months
          }));

        const response = await fetch('https://n8n.atomicflow.net/webhook/af/api/landing/contact-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            package: formData.package,
            billingCycle: formData.billingCycle,
            message: formData.message,
            additionalServices: selectedServices,
            totalPrice
          })
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          package: '',
          billingCycle: 'monthly',
          message: '',
          additionalServices: {
            flowModification: { selected: false, hours: 1 },
            nodeDevelopment: { selected: false, quantity: 1 },
            prioritySupport: { selected: false, months: 1 }
          }
        });
        
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      } catch (error) {
        console.error('Error sending form:', error);
        setFormStatus('error');
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      }
    }
  };

  const totalPrice = calculateTotalPrice();
  const annualSavings = formData.billingCycle === 'annual' ? totalPrice * 0.2 : 0;
  
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {formStatus === 'success' ? (
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {t.contact.form.success}
              </h3>
              <p className="text-text-secondary">
                {t.contact.form.response}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                  {t.contact.form.name?.label}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.name ? 'border-error' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-atomic-blue/50`}
                  placeholder={t.contact.form.name?.placeholder}
                />
                {errors.name && (
                  <p className="text-error text-sm mt-1">{errors.name}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                  {t.contact.form.email?.label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.email ? 'border-error' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-atomic-blue/50`}
                  placeholder={t.contact.form.email?.placeholder}
                />
                {errors.email && (
                  <p className="text-error text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="package" className="block text-text-primary font-medium mb-2">
                  {t.contact.form.package?.label}
                </label>
                <div className="space-y-4">
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.package ? 'border-error' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-atomic-blue/50`}
                  >
                    <option value="">{t.contact.form.package?.placeholder}</option>
                    {t.pricing?.tiers && Object.entries(t.pricing.tiers).map(([key, tier]) => (
                      <option key={key} value={key}>
                        {tier.name} ({tier.executions} {t.contact.form.package?.executions})
                      </option>
                    ))}
                  </select>

                  <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md border border-gray-200">
                    <button
                      type="button"
                      onClick={() => handleBillingCycleChange('monthly')}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        formData.billingCycle === 'monthly'
                          ? 'bg-atomic-blue text-white'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                      aria-pressed={formData.billingCycle === 'monthly'}
                    >
                      {t.pricing?.billing?.monthly}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleBillingCycleChange('annual')}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        formData.billingCycle === 'annual'
                          ? 'bg-atomic-blue text-white'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                      aria-pressed={formData.billingCycle === 'annual'}
                    >
                      {t.pricing?.billing?.annual}
                    </button>
                  </div>
                </div>
                {errors.package && (
                  <p className="text-error text-sm mt-1">{errors.package}</p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-text-primary font-medium mb-4">
                  {t.contact.form.additionalServices?.label}
                </label>
                <div className="space-y-6">
                  {Object.entries(t.additionalServices?.categories.support.services || {}).map(([key, service]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={formData.additionalServices[key as keyof FormData['additionalServices']].selected}
                            onChange={() => handleServiceChange(key as keyof FormData['additionalServices'])}
                            className="h-5 w-5 text-atomic-blue rounded border-gray-300 focus:ring-atomic-blue"
                          />
                          <div>
                            <h4 className="font-medium text-text-primary">{service.name}</h4>
                            <p className="text-sm text-text-secondary">{service.description}</p>
                          </div>
                        </div>
                        <span className="text-atomic-blue font-medium">{service.price}</span>
                      </div>

                      {formData.additionalServices[key as keyof FormData['additionalServices']].selected && (
                        <div className="ml-8 flex items-center space-x-4">
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(
                                key as keyof FormData['additionalServices'],
                                Math.max(1, (key === 'prioritySupport'
                                  ? formData.additionalServices[key].months
                                  : key === 'nodeDevelopment'
                                  ? formData.additionalServices[key].quantity
                                  : formData.additionalServices[key].hours) - 1),
                                key === 'prioritySupport'
                                  ? 'months'
                                  : key === 'nodeDevelopment'
                                  ? 'quantity'
                                  : 'hours'
                              )}
                              className="p-1 hover:bg-atomic-blue-50 rounded text-atomic-blue border border-atomic-blue/20"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            
                            <input
                              type="number"
                              min="1"
                              value={
                                key === 'prioritySupport'
                                  ? formData.additionalServices[key].months
                                  : key === 'nodeDevelopment'
                                  ? formData.additionalServices[key].quantity
                                  : formData.additionalServices[key].hours
                              }
                              onChange={(e) =>
                                handleQuantityChange(
                                  key as keyof FormData['additionalServices'],
                                  parseInt(e.target.value),
                                  key === 'prioritySupport'
                                    ? 'months'
                                    : key === 'nodeDevelopment'
                                    ? 'quantity'
                                    : 'hours'
                                )
                              }
                              className="w-16 px-3 py-1 mx-2 text-center border border-gray-300 rounded"
                            />
                            
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(
                                key as keyof FormData['additionalServices'],
                                (key === 'prioritySupport'
                                  ? formData.additionalServices[key].months
                                  : key === 'nodeDevelopment'
                                  ? formData.additionalServices[key].quantity
                                  : formData.additionalServices[key].hours) + 1,
                                key === 'prioritySupport'
                                  ? 'months'
                                  : key === 'nodeDevelopment'
                                  ? 'quantity'
                                  : 'hours'
                              )}
                              className="p-1 hover:bg-atomic-blue-50 rounded text-atomic-blue border border-atomic-blue/20"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <span className="text-text-secondary">
                            {key === 'prioritySupport'
                              ? t.contact.form.additionalServices?.months
                              : key === 'nodeDevelopment'
                              ? t.contact.form.additionalServices?.quantity
                              : t.contact.form.additionalServices?.hours}
                          </span>

                          <button
                            type="button"
                            onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                            className="p-1 hover:bg-atomic-blue-50 rounded-full transition-colors"
                            title="Ver más detalles"
                          >
                            <HelpCircle className="w-5 h-5 text-atomic-blue/60" />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {(formData.package || totalPrice > 0) && (
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      <Calculator className="h-5 w-5 text-atomic-blue mr-2" />
                      <h4 className="font-medium text-text-primary">
                        {t.contact.form.summary?.title}
                      </h4>
                    </div>

                    {formData.package && (
                      <div className="flex justify-between text-sm py-2 border-b border-gray-200">
                        <span className="text-text-secondary">
                          {t.pricing?.tiers?.[formData.package as keyof typeof t.pricing.tiers]?.name} (
                          {PACKAGE_EXECUTIONS[formData.package as keyof typeof PACKAGE_EXECUTIONS].max} {t.contact.form.summary?.executions})
                        </span>
                        <span className="font-medium text-text-primary">
                          {(PACKAGE_PRICES[formData.package as keyof typeof PACKAGE_PRICES][formData.billingCycle] * 
                            PACKAGE_EXECUTIONS[formData.package as keyof typeof PACKAGE_EXECUTIONS].max).toFixed(2)}€
                        </span>
                      </div>
                    )}
                    
                    {Object.entries(formData.additionalServices).map(([key, value]) => {
                      if (value.selected) {
                        const service = t.additionalServices?.categories.support.services[key as keyof typeof t.additionalServices.categories.support.services];
                        if (!service) return null;

                        const quantity = value.hours || value.quantity || value.months;
                        const price = key === 'prioritySupport' 
                          ? SERVICE_PRICES[key][formData.billingCycle]
                          : SERVICE_PRICES[key as keyof typeof SERVICE_PRICES];
                        const subtotal = price * quantity;
                        
                        return (
                          <div key={key} className="flex justify-between text-sm py-2 border-b border-gray-200 last:border-0">
                            <span className="text-text-secondary">
                              {service.name} ({quantity} × {price.toFixed(2)}€)
                            </span>
                            <span className="font-medium text-text-primary">
                              {subtotal.toFixed(2)}€
                            </span>
                          </div>
                        );
                      }
                      return null;
                    })}
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                      <span className="font-medium text-text-primary">{t.contact.form.summary?.total}:</span>
                      <div className="text-right">
                        <span className="text-lg font-bold text-atomic-blue">
                          {totalPrice.toFixed(2)}€
                        </span>
                        {formData.billingCycle === 'annual' && (
                          <div className="text-sm text-accent-success">
                            {t.contact.form.summary?.annualSavings}: {annualSavings.toFixed(2)}€
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                  {t.contact.form.message?.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.message ? 'border-error' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-atomic-blue/50`}
                  placeholder={t.contact.form.message?.placeholder}
                ></textarea>
                {errors.message && (
                  <p className="text-error text-sm mt-1">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-atomic-blue hover:bg-atomic-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-colors shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.contact.form.submitting}
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    {t.contact.form.submit}
                  </>
                )}
              </button>
              
              <p className="text-text-secondary text-sm mt-4 text-center">
                {t.contact.form.response}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;