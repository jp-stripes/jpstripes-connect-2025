'use client';

import { useState } from 'react';

export default function Themes() {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

  const themes = [
    {
      number: "01",
      title: "理論",
      subtitle: "Theory",
      description: "Stripeの全体像を体系的に理解。基礎から応用まで、ビジネスに必要な知識を段階的に習得。",
      visual: "grid",
    },
    {
      number: "02",
      title: "実践",
      subtitle: "Practice",
      description: "実際のビジネスでの活用事例。成功も失敗も、すべてが学びに。現場のリアルな声をお届け。",
      visual: "flow",
    },
    {
      number: "03",
      title: "未来",
      subtitle: "Future",
      description: "決済の未来とビジネスの可能性。新しいテクノロジーがもたらす、次世代のビジネスモデル。",
      visual: "orbit",
    },
  ];

  const renderVisual = (type: string) => {
    switch (type) {
      case "grid":
        return (
          <div className="relative w-32 h-32 mx-auto theme-visual-grid">
            {/* CSS でグリッドを描画 */}
          </div>
        );
      case "flow":
        return (
          <div className="flex items-center justify-center gap-8 w-full">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative">
                <div className="w-5 h-5 bg-primary rounded-full"></div>
                {i < 3 && (
                  <div className="absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        );
      case "orbit":
        return (
          <div className="relative w-32 h-32 mx-auto theme-visual-orbit">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`absolute border border-primary/50 rounded-full ${
                  i === 1 ? 'w-10 h-10 top-11 left-11' :
                  i === 2 ? 'w-20 h-20 top-6 left-6' :
                  'w-32 h-32 top-0 left-0'
                }`}
              >
                {i === 1 && (
                  <div className="absolute w-2 h-2 bg-primary rounded-full -top-1 left-1/2 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
      </div>

      {/* ヘッダー */}
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          理論と実践、そして未来
        </h2>
        <p className="text-xl opacity-60 font-light">
          Stripeで実現する、次世代の決済体験
        </p>
      </div>

      {/* テーマグリッド */}
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 bg-primary/20 p-0.5">
          {themes.map((theme, index) => (
            <div
              key={index}
              className={`theme-panel bg-black relative overflow-hidden cursor-pointer transition-all duration-500 cubic-bezier-[0.23,1,0.32,1] min-h-[500px] ${
                hoveredPanel === index ? 'scale-[0.98]' : ''
              }`}
              onMouseEnter={() => setHoveredPanel(index)}
              onMouseLeave={() => setHoveredPanel(null)}
            >
              {/* ホバー時の背景グラデーション */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent transition-opacity duration-500 ${
                hoveredPanel === index ? 'opacity-100' : 'opacity-0'
              }`}></div>

              <div className="relative p-12 h-full flex flex-col">
                {/* ヘッダー */}
                <div className="mb-auto">
                  <div className={`text-8xl font-black leading-none mb-8 bg-gradient-to-b from-primary/30 to-primary/10 bg-clip-text text-transparent ${
                    hoveredPanel === index ? 'glitch-number' : ''
                  }`}>
                    {theme.number}
                  </div>
                  <h3 className="text-5xl font-black mb-2 tracking-tight text-white">
                    {theme.title}
                  </h3>
                  <p className="text-sm uppercase tracking-widest opacity-40 text-primary-light">
                    {theme.subtitle}
                  </p>
                </div>

                {/* ビジュアル */}
                <div className={`my-12 h-36 flex items-center justify-center transition-transform duration-500 ${
                  hoveredPanel === index ? 'scale-110' : ''
                }`}>
                  {renderVisual(theme.visual)}
                </div>

                {/* 説明 */}
                <p className="text-lg leading-relaxed opacity-70 text-white mt-auto">
                  {theme.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 