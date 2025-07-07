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
    <section className="countdown">
      <div className="countdown-wrapper">
        <div className="time-block">
          <span className="time-value">{formatTime(timeLeft.days)}</span>
          <span className="time-label">Days</span>
        </div>
        <span className="time-separator">:</span>
        <div className="time-block">
          <span className="time-value">{formatTime(timeLeft.hours)}</span>
          <span className="time-label">Hours</span>
        </div>
        <span className="time-separator">:</span>
        <div className="time-block">
          <span className="time-value">{formatTime(timeLeft.minutes)}</span>
          <span className="time-label">Minutes</span>
        </div>
        <span className="time-separator">:</span>
        <div className="time-block">
          <span className="time-value">{formatTime(timeLeft.seconds)}</span>
          <span className="time-label">Seconds</span>
        </div>
      </div>
    </section>
  );
} 