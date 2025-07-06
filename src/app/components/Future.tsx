'use client';

import { useEffect, useRef } from 'react';

export default function Future() {
  const particleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particleContainerRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      particleContainerRef.current.appendChild(particle);
      
      // アニメーション
      const animation = particle.animate([
        { transform: 'translate(0, 0) scale(0)', opacity: 0 },
        { transform: 'translate(0, -50px) scale(1)', opacity: 1 },
        { transform: 'translate(0, -100px) scale(0)', opacity: 0 }
      ], {
        duration: 3000,
        easing: 'ease-out'
      });
      
      animation.onfinish = () => particle.remove();
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-dark flex items-center justify-center overflow-hidden">
      {/* パーティクル背景 */}
      <div ref={particleContainerRef} className="absolute inset-0 pointer-events-none"></div>
      
      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-12 bg-gradient-to-br from-primary to-primary-light bg-clip-text text-transparent">
          使ってるつもり、<br />
          から使いこなすへ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {[
            { number: "6年", label: "ぶりの開催" },
            { number: "∞", label: "広がる可能性" },
            { number: "1日", label: "で変わる未来" }
          ].map((item, index) => (
            <div 
              key={index}
              className="future-item relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:transform hover:-translate-y-4 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/30"
            >
              <div className="text-6xl font-black text-primary mb-2">
                {item.number}
              </div>
              <div className="text-lg opacity-80">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-xl md:text-2xl opacity-80 leading-relaxed">
          開発者も、経営者も、マーケターも。<br />
          決済に関わるすべての人が、次のステージへ。
        </p>
      </div>
    </section>
  );
} 