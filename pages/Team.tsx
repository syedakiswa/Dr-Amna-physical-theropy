
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { TEAM } from '../constants';
import { Linkedin, Mail } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-medical-primary mb-6">Our Medical Team</h1>
          <p className="text-medical-muted text-lg max-w-2xl mx-auto">
            Our experts are highly trained professionals committed to delivering the highest quality of patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map((member, idx) => (
            <SectionWrapper key={idx} delay={idx * 0.1} className="group">
              <div className="bg-white border-2 border-medical-light rounded-3xl overflow-hidden transition-all hover:border-medical-primary/20 hover:shadow-2xl">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-8 text-center">
                  <span className="text-medical-secondary font-bold text-xs uppercase tracking-widest mb-2 block">{member.role}</span>
                  <h3 className="text-2xl font-bold text-medical-primary mb-2">{member.name}</h3>
                  <p className="text-medical-muted text-sm mb-6">{member.specialization}</p>
                  <div className="flex justify-center space-x-4 pt-4 border-t border-medical-light">
                    <a href="#" className="p-2 bg-medical-light rounded-full text-medical-primary hover:bg-medical-primary hover:text-white transition-all">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-medical-light rounded-full text-medical-primary hover:bg-medical-primary hover:text-white transition-all">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>

        {/* Accreditations */}
        <section className="mt-32 py-16 bg-medical-light rounded-[3rem]">
          <h2 className="text-center text-medical-muted font-bold tracking-[0.2em] text-sm uppercase mb-12">Proud Member of</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 px-8">
            <span className="text-2xl font-bold text-medical-primary">APTA</span>
            <span className="text-2xl font-bold text-medical-primary">PHYSIONOW</span>
            <span className="text-2xl font-bold text-medical-primary">HEALTH+</span>
            <span className="text-2xl font-bold text-medical-primary">REHAB-CERT</span>
            <span className="text-2xl font-bold text-medical-primary">MED-ASSIST</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
