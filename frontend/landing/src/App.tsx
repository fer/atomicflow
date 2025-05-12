import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KPISection from './components/KPISection';
import ServiceComparison from './components/ServiceComparison';
import Process from './components/Process';
import Pricing from './components/Pricing';
import AdditionalServices from './components/AdditionalServices';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white transition-colors duration-200 relative min-h-screen">
      <div className="workflow-pattern fixed inset-0 pointer-events-none opacity-5"></div>
      <div className="pattern-overlay fixed inset-0 pointer-events-none"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <KPISection />
          <ServiceComparison />
          <Process />
          <Pricing />
          <AdditionalServices />
          <Testimonials />
          <Faq />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;