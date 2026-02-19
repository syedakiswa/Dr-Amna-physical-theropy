
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { SERVICES, WHY_CHOOSE_US } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.png" 
            alt="Physical Therapy Facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-medical-primary/90 via-medical-primary/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper className="max-w-2xl text-white">
            <span className="inline-block px-3 py-1 bg-medical-secondary text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
              Recovery Starts Here
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Regain Your Strength, <br />
              <span className="text-medical-secondary">Reclaim Your Life</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-50 text-light leading-relaxed">
              Dr. Amna's Physical Therapy & Rehab Center offers comprehensive physical therapy 
              solutions for a wide range of conditions. Our experienced team is dedicated to 
              helping you regain your mobility and strength.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-medical-secondary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-white hover:text-medical-primary transition-all shadow-lg group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-white/20 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-medical-primary mb-4">Why Choose Us?</h2>
            <div className="w-20 h-1.5 bg-medical-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {WHY_CHOOSE_US.map((item, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1} className="text-center p-8 rounded-2xl bg-medical-light border border-medical-primary/5 hover:shadow-xl transition-all">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-medical-primary text-white mb-6 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-medical-primary mb-3">{item.title}</h3>
                <p className="text-medical-muted leading-relaxed">
                  {item.description}
                </p>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Services Preview */}
      <section className="py-24 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-medical-primary mb-4">Our Core Specializations</h2>
              <p className="text-medical-muted">Expert care delivered by certified specialists using evidence-based techniques.</p>
            </div>
            <Link to="/services" className="text-medical-primary font-bold flex items-center hover:text-medical-secondary transition-colors">
              View All Services <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1} className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
                <img src={service.imageUrl} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-primary/90 via-medical-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl inline-block mb-4">
                    {React.cloneElement(service.icon as React.ReactElement, { className: 'w-6 h-6 text-white' })}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-blue-100 line-clamp-2">{service.description}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionWrapper className="bg-medical-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-medical-secondary rounded-full -mr-32 -mt-32 opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to start your recovery?</h2>
              <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
                Join hundreds of patients who have regained their freedom of movement. Book your initial assessment today.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-white text-medical-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-medical-secondary hover:text-white transition-all shadow-2xl"
              >
                Book Appointment Now
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
};

export default Home;
