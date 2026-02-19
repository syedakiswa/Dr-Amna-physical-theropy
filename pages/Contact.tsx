
import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Phone, Mail, MapPin, Clock, Send, Sparkles } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Inquiry',
    message: ''
  });

  const [aiLoading, setAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your appointment request. Dr. Amna's team will contact you shortly.");
    setFormData({ name: '', email: '', phone: '', service: 'General Inquiry', message: '' });
  };

  const handleAskAI = async () => {
    if (!formData.message.trim()) {
      alert("Please describe your condition in the message box for the AI assistant.");
      return;
    }

    setAiLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are a professional Physiotherapy Virtual Assistant for Dr. Amna's Rehab. 
        A patient says: "${formData.message}". 
        Provide a 2-3 sentence reassuring response explaining how physical therapy might help, but ALWAYS include a disclaimer that this is not medical advice and they should see Dr. Amna for a proper diagnosis.`,
        config: {
          temperature: 0.7,
        }
      });
      setAiResponse(response.text || "Our specialists can definitely help. Please book a physical consultation for a detailed plan.");
    } catch (error) {
      console.error("Gemini Error:", error);
      setAiResponse("We are ready to help! Please book a consultation to discuss your specific case with Dr. Amna.");
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="py-16 md:py-24 bg-medical-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-medical-primary mb-6">Get in Touch</h1>
          <p className="text-medical-muted text-lg max-w-2xl mx-auto">
            Book an appointment or ask a question. We're here to help you get back on your feet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Card */}
          <SectionWrapper className="lg:col-span-1 space-y-6">
            <div className="bg-medical-primary text-white p-10 rounded-3xl shadow-xl h-full">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Phone className="w-6 h-6 text-medical-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-blue-100/70">0336-2415036</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Mail className="w-6 h-6 text-medical-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-blue-100/70">Amnafarooq237@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-medical-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Location</h4>
                    <p className="text-blue-100/70">Karachi Division sindh</p>
                  </div>
                </div>
                
              </div>
            </div>
          </SectionWrapper>

          {/* Form and AI Assistant */}
          <SectionWrapper delay={0.2} className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-medical-primary/5">
              <h2 className="text-2xl font-bold text-medical-primary mb-8">Book an Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-medical-primary mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-medical-light border border-medical-primary/10 focus:outline-none focus:ring-2 focus:ring-medical-secondary transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-medical-primary mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-medical-light border border-medical-primary/10 focus:outline-none focus:ring-2 focus:ring-medical-secondary transition-all"
                      placeholder="Your Gmail"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-medical-primary mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-medical-light border border-medical-primary/10 focus:outline-none focus:ring-2 focus:ring-medical-secondary transition-all"
                      placeholder="01-234567891"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-medical-primary mb-2">Inquiry Type</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-medical-light border border-medical-primary/10 focus:outline-none focus:ring-2 focus:ring-medical-secondary transition-all"
                    >
                      <option>Musculoskeletal Rehab</option>
                      <option>Post-Surgical Recovery</option>
                      <option>Sports Injury</option>
                      <option>Geriatric Care</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-medical-primary mb-2">How can we help? (Describe symptoms)</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-medical-light border border-medical-primary/10 focus:outline-none focus:ring-2 focus:ring-medical-secondary transition-all"
                    placeholder="Tell us about your condition..."
                  ></textarea>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    type="submit"
                    className="flex-1 bg-medical-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-medical-secondary transition-all shadow-md active:scale-95"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Request
                  </button>
                  <button 
                    type="button"
                    onClick={handleAskAI}
                    disabled={aiLoading}
                    className="flex-1 bg-white border-2 border-medical-secondary text-medical-secondary px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-medical-secondary hover:text-white transition-all shadow-md active:scale-95 disabled:opacity-50"
                  >
                    <Sparkles className={`w-5 h-5 mr-2 ${aiLoading ? 'animate-pulse' : ''}`} />
                    {aiLoading ? 'Consulting Assistant...' : 'Quick AI Insight'}
                  </button>
                </div>

                {/* AI Response Display */}
                {aiResponse && (
                  <div className="mt-6 p-6 bg-medical-secondary/10 border border-medical-secondary/20 rounded-2xl animate-in fade-in slide-in-from-bottom-2">
                    <div className="flex items-center space-x-2 mb-3">
                      <Sparkles className="w-5 h-5 text-medical-secondary" />
                      <span className="font-bold text-medical-secondary uppercase text-xs tracking-widest">AI Clinical Assistant</span>
                    </div>
                    <p className="text-medical-primary leading-relaxed text-sm">
                      {aiResponse}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};

export default Contact;
