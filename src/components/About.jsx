import React from 'react';
import { Award, Globe, Heart, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every line of code and pixel of design.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technologies and creative solutions.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Deeply committed to creating apps that make a real difference.',
    },
    {
      icon: Rocket,
      title: 'Growth',
      description: 'Helping businesses scale and succeed in the mobile-first world.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Crafting Digital Excellence
              <span className="block gradient-text">Since Day One</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Dimention App Studio, we're more than just developers – we're digital craftsmen 
              dedicated to creating iOS applications that redefine user expectations. Our team 
              combines years of expertise with a passion for innovation to deliver solutions that 
              truly matter.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From startups to enterprise clients, we've helped businesses transform their ideas 
              into powerful mobile experiences. Every project is an opportunity to push the 
              boundaries of what's possible on iOS.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-gray-900 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">Our Process</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Discovery & Strategy</h4>
                    <p className="text-gray-300 text-sm">Understanding your vision, goals, and target audience.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Design & Prototype</h4>
                    <p className="text-gray-300 text-sm">Creating beautiful, intuitive interfaces that users love.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Development & Testing</h4>
                    <p className="text-gray-300 text-sm">Building robust apps with clean, maintainable code.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Launch & Support</h4>
                    <p className="text-gray-300 text-sm">Seamless deployment and ongoing maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;