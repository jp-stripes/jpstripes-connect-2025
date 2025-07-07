'use client';

import { useState } from 'react';

export default function Themes() {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

  return (
    <section className="themes">
      <div className="themes-header">
        <h2 className="themes-title">理論と実践、そして未来</h2>
        <p className="themes-subtitle">Stripeで実現する、次世代の決済体験</p>
      </div>
      <div className="themes-container">
        <div className="themes-grid">
          <div 
            className="theme-panel"
            onMouseEnter={() => setHoveredPanel(0)}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <div className="theme-content">
              <div className="theme-header">
                <div className="theme-number">01</div>
                <h3 className="theme-title">理論</h3>
                <p className="theme-subtitle">Theory</p>
              </div>
              <div className="theme-visual">
                <div className="visual-element"></div>
              </div>
              <p className="theme-description">
                Stripeの全体像を体系的に理解。基礎から応用まで、ビジネスに必要な知識を段階的に習得。
              </p>
            </div>
          </div>

          <div 
            className="theme-panel"
            onMouseEnter={() => setHoveredPanel(1)}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <div className="theme-content">
              <div className="theme-header">
                <div className="theme-number">02</div>
                <h3 className="theme-title">実践</h3>
                <p className="theme-subtitle">Practice</p>
              </div>
              <div className="theme-visual">
                <div className="visual-element">
                  <div className="flow-dot"></div>
                  <div className="flow-dot"></div>
                  <div className="flow-dot"></div>
                </div>
              </div>
              <p className="theme-description">
                実際のビジネスでの活用事例。成功も失敗も、すべてが学びに。現場のリアルな声をお届け。
              </p>
            </div>
          </div>

          <div 
            className="theme-panel"
            onMouseEnter={() => setHoveredPanel(2)}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <div className="theme-content">
              <div className="theme-header">
                <div className="theme-number">03</div>
                <h3 className="theme-title">未来</h3>
                <p className="theme-subtitle">Future</p>
              </div>
              <div className="theme-visual">
                <div className="visual-element">
                  <div className="orbit-ring"><div className="orbit-dot"></div></div>
                  <div className="orbit-ring"></div>
                  <div className="orbit-ring"></div>
                </div>
              </div>
              <p className="theme-description">
                決済の未来とビジネスの可能性。新しいテクノロジーがもたらす、次世代のビジネスモデル。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 