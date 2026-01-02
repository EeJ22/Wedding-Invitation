import React, { useState } from 'react';
import { RsvpFormState } from '../types';
import { generateWeddingWish } from '../services/geminiService';

const InputLabel = ({ children }: React.PropsWithChildren<{}>) => (
  <label className="block text-xs font-bold uppercase tracking-widest text-gold mb-2">
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
      <div className="w-full text-center py-20 bg-porcelain border border-gold p-8 shadow-xl">
        <div className="text-4xl mb-4 text-rouge">囍</div>
        <h3 className="text-3xl font-serif mb-4 text-charcoal">Thank You</h3>
        <p className="font-sans text-sm tracking-widest text-gray-500">Your response has been recorded.</p>
      </div>
    );
  }

  const inputClasses = "w-full border-b-2 border-gray-200 focus:border-rouge outline-none py-3 bg-transparent transition-colors font-serif text-lg text-charcoal placeholder-gray-300";

  return (
    <div className="bg-white p-8 md:p-12 shadow-2xl border-t-4 border-rouge relative">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gold"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gold"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gold"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-gold"></div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <InputLabel>Guest Name</InputLabel>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              className={inputClasses}
              placeholder="Full Name"
            />
          </div>
          <div>
            <InputLabel>Email Address</InputLabel>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              className={inputClasses}
              placeholder="email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <InputLabel>Number of Guests</InputLabel>
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
          <InputLabel>Message for the Couple</InputLabel>
          <div className="mt-2 bg-porcelain p-4 border border-gray-100">
            <textarea
              name="message"
              value={form.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-transparent outline-none font-serif text-charcoal resize-none"
              placeholder="Write a wish..."
            />
            <div className="flex justify-end mt-2 pt-2 border-t border-gray-200">
              <button
                type="button"
                onClick={handleAiRefine}
                disabled={isGenerating || !form.message}
                className="text-xs font-bold uppercase tracking-widest text-gold hover:text-rouge transition-colors flex items-center gap-2"
              >
                {isGenerating ? (
                  <span>Polishing...</span>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                    <span>Polish with AI</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="text-center pt-6">
          <button
            type="submit"
            className="bg-rouge text-white px-10 py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-charcoal transition-colors duration-300 shadow-lg"
          >
            Confirm RSVP
          </button>
        </div>
      </form>
    </div>
  );
};

export default Rsvp;