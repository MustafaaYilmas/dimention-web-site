import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  

  const footerLinks = {
    [t('footer.company')]: [
      { name: t('footer.links.aboutUs'), href: '#' },
      { name: t('footer.links.ourProcess'), href: '#' },
      { name: t('footer.links.caseStudies'), href: '#' },
      { name: t('footer.links.blog'), href: '#' }
    ],
    [t('footer.services')]: [
      { name: t('footer.links.iosDevelopment'), href: '#' },
      { name: t('footer.links.uiuxDesign'), href: '#' },
      { name: t('footer.links.appMaintenance'), href: '#' },
      { name: t('footer.links.consulting'), href: '#' }
    ],
    [t('footer.support')]: [
      { name: t('footer.links.contact'), href: '#contact' },
      { name: t('footer.links.faq'), href: '#' },
      { name: t('footer.links.privacy'), href: '/privacy' },
      { name: t('footer.links.terms'), href: '/terms' }
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold">Dimention</h3>
            <p className="text-sm sm:text-base text-gray-400">
              {t('footer.description')}
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-sm sm:text-base text-gray-400 hover:text-primary-400 transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm sm:text-base text-gray-400 hover:text-primary-400 transition-colors">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              {t('footer.copyright', { year: currentYear })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;