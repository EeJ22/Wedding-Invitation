import React from 'react';
import Countdown from './components/Countdown';
import Rsvp from './components/Rsvp';

const App: React.FC = () => {
  const weddingDate = new Date('2026-02-14T18:00:00');

  return (
    <div className="min-h-screen bg-wedding-cream text-wedding-charcoal overflow-x-hidden selection:bg-wedding-gold selection:text-white">
      {/* Navigation / Header */}
      <nav className="fixed w-full z-50 bg-wedding-cream/90 backdrop-blur-sm border-b border-gray-200/50 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-xl tracking-wide">L & T</div>
          <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-sans">
            <a href="#details" className="hover:text-wedding-gold transition-colors">Details</a>
            <a href="#location" className="hover:text-wedding-gold transition-colors">Location</a>
            <a href="#rsvp" className="hover:text-wedding-gold transition-colors">RSVP</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-center px-4">
        {/* Abstract Background Decoration */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
           <div className="absolute -top-20 -left-20 w-96 h-96 bg-wedding-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
           <div className="absolute top-1/2 -right-20 w-96 h-96 bg-wedding-sage rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
           <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 fade-in space-y-8">
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500">The Wedding Celebration Of</p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-wedding-charcoal leading-none">
            Lee Jia Xuan <br />
            <span className="text-4xl md:text-6xl italic text-wedding-gold font-light">&</span> <br />
            Tan Yi Qi
          </h1>
          <div className="pt-8">
            <p className="font-serif text-xl md:text-2xl italic text-gray-600">February 14th, 2026</p>
            <p className="font-sans text-xs uppercase tracking-widest mt-2 text-gray-400">Padang Kota Lama, Penang</p>
          </div>
          
          <div className="pt-12">
            <a href="#rsvp" className="inline-block border border-wedding-charcoal px-8 py-3 text-xs uppercase tracking-widest hover:bg-wedding-charcoal hover:text-white transition-all duration-300">
              Save the Date
            </a>
          </div>
        </div>
      </header>

      {/* Countdown Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
           <p className="text-center font-sans text-xs uppercase tracking-widest text-gray-400 mb-6">Counting down to Forever</p>
           <Countdown targetDate={weddingDate} />
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="py-24 md:py-32 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div className="space-y-8 text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl text-wedding-charcoal">The Details</h2>
            <p className="font-serif text-xl italic text-gray-600 leading-relaxed">
              We joyfully invite you to share in our happiness as we unite in marriage. 
              Join us for an evening of love, laughter, and celebration under the stars.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="bg-wedding-gold/10 p-3 rounded-full text-wedding-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0h18M5.25 12h13.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-sm uppercase tracking-widest font-bold">When</h4>
                  <p className="font-serif text-lg text-gray-700">Saturday, February 14th, 2026</p>
                  <p className="font-sans text-sm text-gray-500">Ceremony: 6:00 PM | Reception: 7:30 PM</p>
                </div>
              </div>

              <div id="location" className="flex flex-col md:flex-row items-center md:items-start gap-4">
                 <div className="bg-wedding-gold/10 p-3 rounded-full text-wedding-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-sm uppercase tracking-widest font-bold">Where</h4>
                  <p className="font-serif text-lg text-gray-700">Padang Kota Lama (Esplanade)</p>
                  <p className="font-sans text-sm text-gray-500">Jalan Tun Syed Sheh Barakbah, George Town, Penang</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Padang+Kota+Lama+Penang" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-wedding-gold underline underline-offset-4 text-xs uppercase tracking-widest mt-2 inline-block hover:text-wedding-charcoal transition-colors"
                  >
                    View Map
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 w-full">
            {/* Using abstract shapes or architectural images instead of generic stock photos for a cleaner look */}
             <div className="absolute inset-0 bg-gray-200 overflow-hidden rounded-t-[10rem] rounded-b-sm">
                <img 
                  src="https://picsum.photos/800/1000?grayscale&blur=1" 
                  alt="Venue Ambience" 
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-1000"
                />
             </div>
             <div className="absolute -bottom-6 -left-6 w-full h-full border border-wedding-gold/50 rounded-t-[10rem] rounded-b-sm pointer-events-none -z-10"></div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-wedding-charcoal text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif text-2xl md:text-4xl italic leading-relaxed">
            "We loved with a love that was more than love."
          </p>
          <p className="mt-6 font-sans text-xs uppercase tracking-widest text-wedding-gold">— Edgar Allan Poe</p>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <Rsvp />
        </div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-wedding-cream -z-0"></div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 text-center border-t border-gray-100">
        <h2 className="font-serif text-2xl mb-4">Lee Jia Xuan & Tan Yi Qi</h2>
        <p className="font-sans text-xs uppercase tracking-widest text-gray-400">See you in Penang</p>
        <p className="mt-8 font-sans text-[10px] text-gray-300">Designed with AI • 2026</p>
      </footer>
    </div>
  );
};

export default App;