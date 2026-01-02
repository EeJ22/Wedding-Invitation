import React from 'react';
import Countdown from './components/Countdown';
import Rsvp from './components/Rsvp';

const App: React.FC = () => {
  const weddingDate = new Date('2026-02-14T18:00:00');

  return (
    <div className="min-h-screen bg-porcelain bg-paper-texture text-charcoal overflow-x-hidden">
      
      {/* Navigation - Minimalist & Centered */}
      <nav className="fixed w-full z-50 py-4 bg-porcelain/90 backdrop-blur-md border-b border-gold/20">
        <div className="container mx-auto px-6 flex justify-between md:justify-center items-center relative">
          <div className="md:absolute md:left-6 font-serif text-rouge font-bold text-xl tracking-widest">
            2026.02.14
          </div>
          
          <div className="flex gap-8 text-xs font-sans font-bold tracking-[0.2em] text-charcoal uppercase">
            <a href="#ceremony" className="hover:text-rouge transition-colors">Ceremony</a>
            <span className="text-gold hidden md:inline">♦</span>
            <a href="#rsvp" className="hover:text-rouge transition-colors">RSVP</a>
          </div>

          <div className="md:absolute md:right-6 font-serif text-rouge font-bold text-xl">
             囍
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative pt-20">
        {/* Decorative corner frames */}
        <div className="absolute top-24 left-4 md:left-10 w-16 h-16 border-t-2 border-l-2 border-rouge opacity-50"></div>
        <div className="absolute top-24 right-4 md:right-10 w-16 h-16 border-t-2 border-r-2 border-rouge opacity-50"></div>
        <div className="absolute bottom-10 left-4 md:left-10 w-16 h-16 border-b-2 border-l-2 border-rouge opacity-50"></div>
        <div className="absolute bottom-10 right-4 md:right-10 w-16 h-16 border-b-2 border-r-2 border-rouge opacity-50"></div>

        <div className="fade-in max-w-4xl mx-auto z-10">
          <div className="mb-6">
            <span className="inline-block px-4 py-1 border border-gold text-gold text-[10px] tracking-[0.3em] uppercase bg-white">
              The Wedding Celebration Of
            </span>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl text-rouge leading-tight mb-4">
            Lee Jia Xuan
            <span className="block text-2xl md:text-3xl text-gold my-4 font-light font-sans tracking-widest">&</span>
            Teoh Yi Qi
          </h1>

          <div className="w-24 h-[2px] bg-rouge mx-auto my-10"></div>

          <p className="font-sans text-sm md:text-base tracking-[0.2em] text-charcoal uppercase mb-2">
            Saturday, February 14th, 2026
          </p>
          <p className="font-serif text-xl italic text-gray-500">
            Padang Kota Lama, Penang
          </p>
        </div>
      </header>

      {/* Section Divider */}
      <div className="w-full flex justify-center py-10">
        <div className="w-[1px] h-24 bg-gold"></div>
      </div>

      {/* Quote Section - Red Block */}
      <section className="py-20 bg-rouge text-porcelain relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="font-serif text-2xl md:text-4xl leading-relaxed max-w-2xl mx-auto">
            "Two souls with but a single thought,<br/> two hearts that beat as one."
          </p>
          <div className="mt-8">
            <Countdown targetDate={weddingDate} />
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="ceremony" className="py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 max-w-6xl mx-auto">
          
          {/* Moon Gate Image */}
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-double border-gold overflow-hidden shadow-2xl">
                <img 
                  src="https://www.caridestinasi.com/wp-content/uploads/2017/03/1-tempat-menarik-padang-kota-lama.jpg" 
                  alt="Padang Kota Lama" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
             </div>
          </div>

          {/* Text Info */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-serif text-4xl text-rouge mb-8">The Ceremony</h2>
            
            <div className="space-y-8 border-l-2 border-gold/30 pl-8 md:pl-12 py-4">
              <div>
                <h3 className="font-sans text-xs font-bold text-gold uppercase tracking-widest mb-2">When</h3>
                <p className="font-serif text-xl text-charcoal">February 14, 2026</p>
                <p className="font-sans text-sm text-gray-500">6:00 PM Reception</p>
              </div>

              <div>
                <h3 className="font-sans text-xs font-bold text-gold uppercase tracking-widest mb-2">Where</h3>
                <p className="font-serif text-xl text-charcoal">Padang Kota Lama</p>
                <p className="font-sans text-sm text-gray-500 mb-3">Esplanade Road, George Town, Penang</p>
                <a 
                  href="https://maps.google.com/?q=Padang+Kota+Lama" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block px-6 py-2 border border-charcoal text-xs uppercase tracking-widest hover:bg-rouge hover:text-white hover:border-rouge transition-all"
                >
                  View Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-white border-t border-gold/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="text-gold text-2xl mb-2">囍</div>
            <h2 className="font-serif text-4xl text-rouge">RSVP</h2>
            <p className="font-sans text-sm tracking-widest mt-4 text-gray-500 uppercase">Kindly reply by January 1st, 2026</p>
          </div>
          
          <Rsvp />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rouge text-porcelain py-12 text-center">
        <h2 className="font-serif text-2xl italic mb-4">Lee Jia Xuan & Teoh Yi Qi</h2>
        <div className="flex justify-center items-center gap-4 text-[10px] uppercase tracking-widest opacity-70">
          <span>Made with Love</span>
          <span>•</span>
          <span>Penang</span>
        </div>
      </footer>
    </div>
  );
};

export default App;