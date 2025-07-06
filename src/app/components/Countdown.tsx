'use client';

import { useEffect, useState } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const eventDate = new Date('2025-11-23T12:00:00+09:00');
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="text-center">
            <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-2 drop-shadow-lg">
              {formatTime(timeLeft.days)}
            </div>
            <div className="text-sm uppercase tracking-widest opacity-80">
              Days
            </div>
          </div>
          
          <div className="text-6xl md:text-7xl font-extralight opacity-50 time-separator">
            :
          </div>
          
          <div className="text-center">
            <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-2 drop-shadow-lg">
              {formatTime(timeLeft.hours)}
            </div>
            <div className="text-sm uppercase tracking-widest opacity-80">
              Hours
            </div>
          </div>
          
          <div className="text-6xl md:text-7xl font-extralight opacity-50 time-separator">
            :
          </div>
          
          <div className="text-center">
            <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-2 drop-shadow-lg">
              {formatTime(timeLeft.minutes)}
            </div>
            <div className="text-sm uppercase tracking-widest opacity-80">
              Minutes
            </div>
          </div>
          
          <div className="text-6xl md:text-7xl font-extralight opacity-50 time-separator">
            :
          </div>
          
          <div className="text-center">
            <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-2 drop-shadow-lg">
              {formatTime(timeLeft.seconds)}
            </div>
            <div className="text-sm uppercase tracking-widest opacity-80">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 