import React from 'react';
import { Code2, Palette, Zap, Shield, Users, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: Code2,
      title: t('features.items.performance.title'),
      description: t('features.items.performance.description'),
    },
    {
      icon: Palette,
      title: t('features.items.design.title'),
      description: t('features.items.design.description'),
    },
    {
      icon: Zap,
      title: t('features.items.speed.title'),
      description: t('features.items.speed.description'),
    },
    {
      icon: Shield,
      title: t('features.items.security.title'),
      description: t('features.items.security.description'),
    },
    {
      icon: Users,
      title: t('features.items.userCentric.title'),
      description: t('features.items.userCentric.description'),
    },
    {
      icon: Smartphone,
      title: t('features.items.crossDevice.title'),
      description: t('features.items.crossDevice.description'),
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('features.title')} <span className="gradient-text">{t('features.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            {t('features.cta.title')}
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('features.cta.description')}
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
{t('features.cta.button')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;