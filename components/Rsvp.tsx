import React, { useState } from 'react';
import { RsvpFormState } from '../types';
import { generateWeddingWish } from '../services/geminiService';

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
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-10 bg-white shadow-xl text-center border-t-4 border-wedding-gold rounded-sm fade-in">
        <h3 className="text-3xl font-serif mb-4 text-wedding-charcoal">Thank You</h3>
        <p className="font-sans font-light text-gray-600">Your RSVP has been received. We look forward to celebrating with you.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 shadow-2xl rounded-sm border border-gray-100">
      <h3 className="text-3xl md:text-4xl font-serif text-center mb-8 text-wedding-charcoal">R.S.V.P</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 focus:border-wedding-gold outline-none py-2 bg-transparent transition-colors font-serif text-lg"
              placeholder="Guest Name"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 focus:border-wedding-gold outline-none py-2 bg-transparent transition-colors font-serif text-lg"
              placeholder="email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
             <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Attending?</label>
             <select
                name="attending"
                value={form.attending}
                onChange={handleInputChange}
                className="w-full border-b border-gray-300 focus:border-wedding-gold outline-none py-2 bg-transparent transition-colors font-serif text-lg"
             >
               <option value="yes">Joyfully Accepts</option>
               <option value="no">Regretfully Declines</option>
               <option value="maybe">Uncertain</option>
             </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Number of Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              max="5"
              value={form.guests}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 focus:border-wedding-gold outline-none py-2 bg-transparent transition-colors font-serif text-lg"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message to the Couple</label>
          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full border border-gray-200 p-4 focus:border-wedding-gold outline-none rounded-sm font-serif text-lg resize-none"
              placeholder="Write a message or wish..."
            />
            <button
              type="button"
              onClick={handleAiRefine}
              disabled={isGenerating || !form.message}
              className="absolute bottom-4 right-4 text-xs bg-wedding-gold/10 hover:bg-wedding-gold/20 text-wedding-charcoal px-3 py-1 rounded-full transition-colors flex items-center gap-1"
              title="Use AI to polish your message"
            >
              {isGenerating ? (
                <span>Polishing...</span>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                  <span>Refine with AI</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-wedding-charcoal text-white px-10 py-3 uppercase tracking-widest text-sm hover:bg-wedding-gold transition-colors duration-300"
          >
            Confirm Attendance
          </button>
        </div>
      </form>
    </div>
  );
};

export default Rsvp;