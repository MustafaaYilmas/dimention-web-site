import React from 'react';
import { Code2, Palette, Zap, Shield, Users, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Code2,
      title: 'Yerli Performans',
      description: 'En iyi performans ve kullanıcı deneyimi için Swift ve en yeni iOS teknolojileriyle geliştirilmiştir.',
    },
    {
      icon: Palette,
      title: 'Muhteşem Tasarım',
      description: "Apple Human Interface Guidelines'ı takip ederken benzersiz marka kimliğinizi koruyan piksel mükemmeliğinde arayüzler.",
    },
    {
      icon: Zap,
      title: 'Şimşek Hızında',
      description: 'Optimize edilmiş kod ve verimli algoritmalar, uygulamanızın tüm iOS cihazlarda sorunsuz çalışmasını sağlar.',
    },
    {
      icon: Shield,
      title: 'Güvenli ve Gizli',
      description: 'Uçtan uca şifreleme ve gizlilik odaklı geliştirme yaklaşımı ile kurumsal düzeyde güvenlik.',
    },
    {
      icon: Users,
      title: 'Kullanıcı Odaklı',
      description: 'Kapsamlı kullanıcı araştırması ve yinelemeli testlere dayanan sezgisel UX tasarımı.',
    },
    {
      icon: Smartphone,
      title: 'Çapraz Cihaz',
      description: 'iPhone, iPad, Apple Watch ve diğer Apple ekosistem cihazlarında kesintisiz deneyim.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Neden <span className="gradient-text">Dimention</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            App Store'da öne çıkan iOS uygulamaları sunmak için teknik mükemmelliği yaratıcı yenilikle birleştiriyoruz.
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
            Harika Bir Şey İnşa Etmeye Hazır Mısınız?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Vizyonunuzu premium bir iOS uygulamasına nasıl dönüştürebileceğimizi konuşalım.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
Bugün Başlayın
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;