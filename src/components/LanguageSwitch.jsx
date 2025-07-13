import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitch = ({ isScrolled }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
        isScrolled 
          ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
          : 'bg-white/10 hover:bg-white/20 text-white'
      }`}
      aria-label="Change language"
    >
      <Globe size={18} />
      <span className="text-sm font-medium uppercase">
        {i18n.language === 'en' ? 'TR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitch;