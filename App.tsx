import React from 'react';
import Countdown from './components/Countdown';
import Rsvp from './components/Rsvp';

const App: React.FC = () => {
  const weddingDate = new Date('2026-02-14T18:00:00');

  return (
    <div className="min-h-screen bg-wedding-bg text-wedding-charcoal selection:bg-wedding-charcoal selection:text-white">
      {/* Refined Navigation */}
      <nav className="fixed w-full z-50 py-6 mix-blend-difference text-wedding-charcoal transition-all duration-500">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="font-serif text-2xl italic tracking-wide font-bold">L & T</div>
          <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.2em] font-sans font-medium">
            <a href="#ceremony" className="hover:text-wedding-gold transition-colors relative group">
              Ceremony
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-wedding-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#location" className="hover:text-wedding-gold transition-colors relative group">
              Location
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-wedding-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#rsvp" className="hover:text-wedding-gold transition-colors relative group">
              RSVP
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-wedding-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section: High End Minimalist */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Subtle texture background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 z-0"></div>
        
        <div className="relative z-10 border border-wedding-charcoal/10 p-12 md:p-24 bg-white/50 backdrop-blur-[2px] shadow-sm fade-in-up">
           <div className="mb-8">
              <span className="block text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-500 mb-2">The Wedding Of</span>
              <div className="w-8 h-[1px] bg-wedding-gold mx-auto"></div>
           </div>
           
           <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-wedding-charcoal leading-tight tracking-wide">
             <span className="block mb-2 md:mb-4">Lee Jia Xuan</span>
             <span className="block text-2xl md:text-3xl text-gray-400 italic my-2 md:my-4 font-light">&</span>
             <span className="block">Teoh Yi Qi</span>
           </h1>

           <div className="mt-10 md:mt-14 space-y-2">
             <p className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-wedding-charcoal">February 14, 2026</p>
             <p className="font-serif text-lg italic text-gray-500">Padang Kota Lama, Penang</p>
           </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </header>

      {/* Quote Section - Minimalist */}
      <section className="py-24 md:py-32 bg-wedding-charcoal text-white text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="max-w-2xl mx-auto relative z-10 fade-in-up delay-100">
          <span className="text-6xl font-serif text-wedding-gold/20 absolute -top-10 -left-10">“</span>
          <p className="font-serif text-2xl md:text-4xl italic leading-relaxed font-light text-gray-200">
            Love implies an absolute gift of oneself.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
             <div className="w-8 h-[1px] bg-wedding-gold/50"></div>
             <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-wedding-gold">Celebration of Love</p>
             <div className="w-8 h-[1px] bg-wedding-gold/50"></div>
          </div>
        </div>
      </section>

      {/* Countdown & Details */}
      <section id="ceremony" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <Countdown targetDate={weddingDate} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-0 border border-gray-100 shadow-sm">
             {/* Text Content */}
             <div className="p-12 md:p-16 flex flex-col justify-center bg-wedding-bg">
                <h2 className="font-serif text-4xl text-wedding-charcoal mb-8">The Ceremony</h2>
                <div className="space-y-8">
                   <div className="group">
                      <h3 className="font-sans text-[10px] uppercase tracking-widest text-gray-500 mb-1">Date & Time</h3>
                      <p className="font-serif text-2xl text-wedding-charcoal">Saturday, Feb 14th, 2026</p>
                      <p className="font-serif text-lg italic text-gray-500">Starts at 6:00 PM</p>
                   </div>
                   <div className="group" id="location">
                      <h3 className="font-sans text-[10px] uppercase tracking-widest text-gray-500 mb-1">Venue</h3>
                      <p className="font-serif text-2xl text-wedding-charcoal">Padang Kota Lama</p>
                      <p className="font-serif text-lg italic text-gray-500 mb-4">George Town, Penang</p>
                      <a href="https://maps.google.com/?q=Padang+Kota+Lama" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs uppercase tracking-widest border-b border-wedding-gold pb-1 hover:text-wedding-gold transition-colors">
                        Get Directions
                      </a>
                   </div>
                </div>
             </div>
             
             {/* Image/Visual - Using a classy placeholder */}
             <div className="h-96 md:h-auto bg-gray-200 relative overflow-hidden grayscale contrast-[0.9] hover:grayscale-0 transition-all duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=1000&auto=format&fit=crop" 
                  alt="Wedding Venue Mood" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-wedding-charcoal/10"></div>
             </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-32 bg-wedding-bg relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center mb-16 fade-in-up">
            <p className="font-serif text-xl italic text-gray-500 mb-4">We would be honored by your presence</p>
            <h2 className="font-serif text-4xl md:text-5xl text-wedding-charcoal">Join Us</h2>
          </div>
          <Rsvp />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 text-center border-t border-gray-100">
        <h2 className="font-serif text-3xl mb-6 tracking-wide">L & T</h2>
        <div className="flex justify-center space-x-6 text-[10px] uppercase tracking-widest text-gray-400 font-sans">
           <span>Est. 2026</span>
           <span>•</span>
           <span>Penang, Malaysia</span>
        </div>
      </footer>
    </div>
  );
};

export default App;