
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionWrapper>
            <div className="relative">
              <img 
                src="/doctor.png" 
                alt="Dr. Amna in clinic" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-medical-secondary/10 rounded-full z-0"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-medical-primary/5 rounded-full z-0"></div>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.2}>
            <span className="text-medical-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Meet the Expert</span>
            <h1 className="text-4xl md:text-5xl font-bold text-medical-primary mb-6">Empowering You to Move Without Pain</h1>
            <p className="text-medical-muted text-lg mb-8 leading-relaxed">
              Dr. Amna, founder of the center, holds a Doctorate in Physical Therapy (DPT) with a vision to redefine the rehabilitation experience. 
              Our clinic was established with a singular mission: to provide high-quality, evidence-based care that focuses on the individual, 
              not just the injury.
            </p>
            <div className="space-y-4 mb-10">
              {[
                'Certified Orthopedic Clinical Specialist',
                'Expertise in Manual Therapy & Spinal Rehab',
                'Holistic Approach to Patient Wellness',
                'Over 10,000+ Successful Patient Outcomes'
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-medical-secondary" />
                  <span className="text-medical-primary font-medium">{text}</span>
                </div>
              ))}
            </div>
            <div className="p-6 bg-medical-light border-l-4 border-medical-primary rounded-r-2xl">
              <p className="italic text-medical-primary font-medium">
                "My goal isn't just to fix the pain you feel today, but to equip you with the strength 
                and knowledge to prevent it from ever coming back."
              </p>
              <p className="mt-4 font-bold text-medical-primary text-sm">— Dr. Amna, DPT</p>
            </div>
          </SectionWrapper>
        </div>
      </div>

      {/* Vision/Mission Section */}
      <section className="bg-medical-primary text-white mt-24 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <SectionWrapper>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              To provide accessible, high-standard physical therapy that restores function, improves mobility, 
              and enhances the quality of life for every patient through compassionate and expert clinical care.
            </p>
          </SectionWrapper>
          <SectionWrapper delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              To be the leading center of excellence in rehabilitation, known for innovation in physical therapy 
              and a commitment to the long-term well-being of our community.
            </p>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
};

export default About;
