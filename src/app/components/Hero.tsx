import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        {/* 暗い青紫から黒へのグラデーション背景 */}
        <div className="gradient-overlay"></div>
        
        {/* 右上の抽象的幾何学形状 */}
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="date-ticker">2025.11.23</div>
        
        {/* ロゴアイコンとタイトル */}
        <div className="logo-title-container">
          <div className="logo-circle">
            <Image 
              src="/jpstripes-zebra.png" 
              alt="JP_Stripes Logo" 
              width={120} 
              height={120}
              className="zebra-logo"
            />
          </div>
          <div className="title-wrapper">
            <h1 className="hero-title">
              <span className="title-line">JP_Stripes</span>
              <span className="title-line">Connect 2025</span>
            </h1>
          </div>
        </div>
        
        <p className="tagline">理論と実践、そして未来</p>
        
        <div className="hero-info">
          <div className="info-item">
            <div className="info-label">Date</div>
            <div className="info-value">2025.11.23 Sun</div>
          </div>
          <div className="info-item">
            <div className="info-label">Location</div>
            <div className="info-value">Yokohama</div>
          </div>
        </div>
        
        <div className="hero-tagline">
          <div className="catchphrase">今さら聞けないを、<br />今こそ聞ける</div>
        </div>
        
        <a href="https://jpstripes.connpass.com/" className="cta-button" target="_blank" rel="noopener noreferrer">Connpassに登録してイベントのお知らせを受け取る</a>
      </div>
    </section>
  );
} 