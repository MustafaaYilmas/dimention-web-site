import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-primary-900 to-dark-800">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`}}></div>
      
      <div className="absolute top-20 left-10 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-primary-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm text-primary-300 bg-primary-900/30 rounded-full border border-primary-700/50">
            <Sparkles size={16} />
            <span>{t('hero.badge')}</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
            <span className="block gradient-text">{t('hero.titleHighlight')}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              {t('hero.startProject')}
              <ArrowRight size={20} />
            </a>
            <a href="#features" className="btn-secondary">
{t('hero.exploreWork')}
            </a>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center animate-fade-up delay-300">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">50+</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-400">{t('hero.stats.appsDelivered')}</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">98%</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-400">{t('hero.stats.clientSatisfaction')}</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">5M+</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-400">{t('hero.stats.downloads')}</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;