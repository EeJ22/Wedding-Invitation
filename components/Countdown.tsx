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

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center mx-4 md:mx-8">
      <span className="text-3xl md:text-5xl font-serif font-light text-wedding-charcoal mb-2">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-widest-xl text-wedding-gold border-t border-wedding-gold/30 pt-2 w-full text-center">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center items-center py-12">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="h-8 w-[1px] bg-gray-200 hidden md:block"></div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="h-8 w-[1px] bg-gray-200 hidden md:block"></div>
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <div className="h-8 w-[1px] bg-gray-200 hidden md:block"></div>
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

export default Countdown;