import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const footerLinks = {
    [t('footer.company')]: [
      t('footer.links.aboutUs'),
      t('footer.links.ourProcess'),
      t('footer.links.caseStudies'),
      t('footer.links.blog')
    ],
    [t('footer.services')]: [
      t('footer.links.iosDevelopment'),
      t('footer.links.uiuxDesign'),
      t('footer.links.appMaintenance'),
      t('footer.links.consulting')
    ],
    [t('footer.support')]: [
      t('footer.links.contact'),
      t('footer.links.faq'),
      t('footer.links.privacy'),
      t('footer.links.terms')
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Dimention</h3>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright', { year: currentYear })}
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              {t('footer.madeWith')} <Heart size={16} className="text-red-500" /> {t('footer.in')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;