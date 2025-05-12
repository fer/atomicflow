import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors text-white font-medium text-sm border border-white/20 backdrop-blur-sm"
      aria-label={`Switch to ${language === 'es' ? 'English' : 'Spanish'}`}
    >
      <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold">
        {language === 'es' ? 'ES' : 'EN'}
      </span>
      {language === 'es' ? 'EN' : 'ES'}
    </button>
  );
};