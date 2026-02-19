
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-medical-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-medical-primary mb-6">Our Specialized Care</h1>
          <p className="text-medical-muted text-lg">
            We offer a comprehensive range of physical therapy services tailored to meet your specific health goals and medical requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <SectionWrapper key={idx} delay={idx * 0.1} className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm border border-medical-primary/5 hover:shadow-xl transition-all group">
              <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="bg-medical-light p-3 rounded-xl inline-block mb-6 w-fit text-medical-primary">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-medical-primary mb-4">{service.title}</h3>
                <p className="text-medical-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="text-medical-primary font-bold flex items-center hover:text-medical-secondary transition-colors group">
                  Learn more about treatment 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </SectionWrapper>
          ))}
        </div>

        {/* Specialized Techniques */}
        <section className="mt-24">
          <SectionWrapper className="bg-white p-12 rounded-[2rem] border border-medical-primary/5">
            <h2 className="text-2xl font-bold text-medical-primary mb-12 text-center underline decoration-medical-secondary underline-offset-8">Clinical Modalities We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'Manual Therapy', desc: 'Hands-on tissue manipulation' },
                { name: 'Electrotherapy', desc: 'Stimulation for pain relief' },
                { name: 'Cryotherapy', desc: 'Advanced cold-pack treatment' },
                { name: 'Kinesio Taping', desc: 'Supporting joint movement' },
                { name: 'Ultrasound Therapy', desc: 'Deep tissue healing' },
                { name: 'Cupping Therapy', desc: 'Improved blood circulation' },
                { name: 'Dry Needling', desc: 'Targeted muscle trigger relief' },
                { name: 'Posture Correction', desc: 'Ergonomic rehabilitation' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-2 h-2 bg-medical-secondary rounded-full mx-auto mb-4"></div>
                  <h4 className="font-bold text-medical-primary">{item.name}</h4>
                  <p className="text-xs text-medical-muted mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
