export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景グラデーション球体 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>
      
      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        {/* 日付 */}
        <div className="absolute top-12 right-12 text-sm tracking-widest opacity-50 font-light transform rotate-90 origin-top-right">
          2025.11.23
        </div>
        
        {/* メインタイトル */}
        <div className="overflow-hidden mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
            <span className="title-line block">JP_Stripes</span>
            <span className="title-line block">Connect</span>
            <span className="title-line block bg-gradient-to-r from-primary via-primary-light to-white bg-clip-text text-transparent">
              2025
            </span>
          </h1>
        </div>
        
        {/* サブタイトル */}
        <p className="text-2xl md:text-3xl font-light mb-16 opacity-90">
          理論と実践、そして未来
        </p>
        
        {/* 情報 */}
        <div className="flex flex-wrap justify-center gap-16 mb-16">
          <div className="text-center">
            <div className="text-sm uppercase tracking-widest opacity-60 mb-2">Date</div>
            <div className="text-xl font-semibold">2025.11.23 Sun</div>
          </div>
          <div className="text-center">
            <div className="text-sm uppercase tracking-widest opacity-60 mb-2">Location</div>
            <div className="text-xl font-semibold">Yokohama</div>
          </div>
        </div>
        
        {/* キャッチフレーズ */}
        <div className="mb-16">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 relative inline-block underline-grow">
            今さら聞けないを、<br />
            今こそ聞ける
          </div>
        </div>
        
        {/* CTA */}
        <a 
          href="#" 
          className="cursor-hover inline-block px-12 py-6 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary"
        >
          詳細は近日公開
        </a>
      </div>
    </section>
  );
} 