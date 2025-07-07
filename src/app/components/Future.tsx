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
    <section className="future">
      <div ref={particleContainerRef} className="future-bg"></div>
      
      <div className="future-content">
        <h2 className="future-title">
          使ってるつもり、<br />
          から使いこなすへ
        </h2>
        
        <div className="future-grid">
          <div className="future-item">
            <div className="future-number">6年</div>
            <div className="future-label">ぶりの開催</div>
          </div>
          <div className="future-item">
            <div className="future-number">∞</div>
            <div className="future-label">広がる可能性</div>
          </div>
          <div className="future-item">
            <div className="future-number">1日</div>
            <div className="future-label">で変わる未来</div>
          </div>
        </div>
        
        <p style={{ fontSize: '1.3rem', opacity: 0.8 }}>
          開発者も、経営者も、マーケターも。<br />
          決済に関わるすべての人が、次のステージへ。
        </p>
      </div>
    </section>
  );
} 