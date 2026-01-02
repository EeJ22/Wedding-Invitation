import React, { useState } from 'react';
import { RsvpFormState } from '../types';
import { generateWeddingWish } from '../services/geminiService';

const InputLabel = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-[10px] uppercase tracking-widest-xl text-wedding-charcoal/60 mb-3 text-center md:text-left">
    {children}
  </label>
);

const Rsvp: React.FC = () => {
  const [form, setForm] = useState<RsvpFormState>({
    name: '',
    email: '',
    attending: 'yes',
    guests: 1,
    message: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAiRefine = async () => {
    if (!form.message) return;
    setIsGenerating(true);
    const refinedMessage = await generateWeddingWish(form.message, form.name);
    setForm(prev => ({ ...prev, message: refinedMessage }));
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="w-full text-center py-20 fade-in-up">
        <div className="inline-block p-10 border border-wedding-gold/30 bg-white">
          <h3 className="text-4xl font-serif mb-6 text-wedding-charcoal italic">Merci</h3>
          <p className="font-sans text-sm tracking-widest uppercase text-gray-500 mb-2">We have received your response</p>
          <div className="w-12 h-[1px] bg-wedding-gold mx-auto mt-6"></div>
        </div>
      </div>
    );
  }

  const inputClasses = "w-full border-b border-gray-200 focus:border-wedding-gold outline-none py-3 bg-transparent transition-all font-serif text-xl text-wedding-charcoal text-center md:text-left placeholder-gray-200";

  return (
    <div className="bg-white p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 max-w-3xl mx-auto relative">
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-wedding-gold/50"></div>
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-wedding-gold/50"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-wedding-gold/50"></div>
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-wedding-gold/50"></div>

      <h3 className="text-3xl md:text-4xl font-serif text-center mb-12 text-wedding-charcoal tracking-wide">
        Répondez s'il vous plaît
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="group">
            <InputLabel>Full Name</InputLabel>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              className={inputClasses}
              placeholder="Your Name"
            />
          </div>
          <div>
            <InputLabel>Email</InputLabel>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              className={inputClasses}
              placeholder="Your Email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
             <InputLabel>Attendance</InputLabel>
             <select
                name="attending"
                value={form.attending}
                onChange={handleInputChange}
                className={inputClasses}
             >
               <option value="yes">Joyfully Accepts</option>
               <option value="no">Regretfully Declines</option>
               <option value="maybe">Uncertain</option>
             </select>
          </div>
          <div>
            <InputLabel>Guests</InputLabel>
            <input
              type="number"
              name="guests"
              min="1"
              max="5"
              value={form.guests}
              onChange={handleInputChange}
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <InputLabel>Your Wishes</InputLabel>
          <div className="relative mt-2">
            <textarea
              name="message"
              value={form.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full bg-wedding-bg/50 border border-gray-100 p-6 focus:border-wedding-gold outline-none font-serif text-lg resize-none text-center md:text-left"
              placeholder="Leave a message for the couple..."
            />
            <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={handleAiRefine}
                disabled={isGenerating || !form.message}
                className="text-[10px] uppercase tracking-widest text-wedding-gold hover:text-wedding-charcoal transition-colors flex items-center gap-2"
              >
                {isGenerating ? (
                  <span>Polishing...</span>
                ) : (
                  <>
                    <span className="w-4 h-[1px] bg-current"></span>
                    <span>Refine with AI</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <button
            type="submit"
            className="group relative inline-block px-12 py-4 border border-wedding-charcoal overflow-hidden transition-all duration-300 hover:bg-wedding-charcoal"
          >
            <span className="relative z-10 font-sans text-xs uppercase tracking-[0.2em] text-wedding-charcoal group-hover:text-white transition-colors duration-300">
              Confirm Attendance
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Rsvp;