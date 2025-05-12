import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export function useTranslations() {
  const { language } = useLanguage();
  return translations[language];
}