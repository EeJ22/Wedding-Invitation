import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex justify-center space-x-6 md:space-x-12 py-10 text-wedding-charcoal">
      <div className="text-center">
        <span className="block text-4xl md:text-5xl font-serif font-light">{timeLeft.days}</span>
        <span className="text-xs md:text-sm uppercase tracking-widest text-gray-500">Days</span>
      </div>
      <div className="text-center">
        <span className="block text-4xl md:text-5xl font-serif font-light">{timeLeft.hours}</span>
        <span className="text-xs md:text-sm uppercase tracking-widest text-gray-500">Hours</span>
      </div>
      <div className="text-center">
        <span className="block text-4xl md:text-5xl font-serif font-light">{timeLeft.minutes}</span>
        <span className="text-xs md:text-sm uppercase tracking-widest text-gray-500">Mins</span>
      </div>
      <div className="text-center">
        <span className="block text-4xl md:text-5xl font-serif font-light">{timeLeft.seconds}</span>
        <span className="text-xs md:text-sm uppercase tracking-widest text-gray-500">Secs</span>
      </div>
    </div>
  );
};

export default Countdown;