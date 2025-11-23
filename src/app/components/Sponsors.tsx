import Image from 'next/image';
import Link from 'next/link';

export default function Sponsors() {
  return (
    <section className="sponsors">
      <div className="sponsors-content">
        <h2 className="sponsors-title">Sponsors</h2>
        
        <div className="sponsors-section">
          <h3 className="sponsor-category">スペシャルスポンサー</h3>
          <div className="sponsor-list">
            <div className="sponsor-item special">
              <Link
                href="https://stripe.com"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="sponsor-link"
              >
                <Image
                  src="/sponsors/Stripe_logo.png"
                  alt="Stripe"
                  width={200}
                  height={80}
                  className="sponsor-logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="sponsors-section">
          <h3 className="sponsor-category">ゴールドスポンサー</h3>
          <div className="sponsor-list">
            <div className="sponsor-item special">
              <Link
                href="https://sios.jp"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="sponsor-link"
              >
                <Image
                  src="/sponsors/sios.png"
                  alt="サイオステクノロジー株式会社"
                  width={200}
                  height={80}
                  className="sponsor-logo"
                />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="sponsors-section">
          <h3 className="sponsor-category">スポンサー</h3>
          <div className="sponsor-list">
            <div className="sponsor-item">
              <Link
                href="https://digitaljet.co.jp"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="sponsor-link"
              >
                <Image
                  src="/sponsors/digitaljet.png"
                  alt="digitaljet"
                  width={180}
                  height={80}
                  className="sponsor-logo"
                />
              </Link>
            </div>
            <div className="sponsor-item">
              <Link
                href="https://revtrona.com"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="sponsor-link"
              >
                <Image
                  src="/sponsors/Revtrona.png"
                  alt="revtrona"
                  width={180}
                  height={80}
                  className="sponsor-logo"
                />
              </Link>
            </div>
            <div className="sponsor-item">
              <Link
                href="https://anti-pattern.co.jp"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="sponsor-link"
              >
                <Image
                  src="/sponsors/anti-pattern.png"
                  alt="Anti-Pattern Inc."
                  width={180}
                  height={80}
                  className="sponsor-logo"
                />
              </Link>
            </div>
            <div className="sponsor-item">
              <Link
                href="https://spectrumtokyo.com/jp/"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="sponsor-link"
              >
                <Image
                  src="/sponsors/spectrum-tokyo.jpeg"
                  alt="Spectrum Tokyo"
                  width={180}
                  height={80}
                  className="sponsor-logo"
                />
              </Link>
            </div>
            <div className="sponsor-item">
              <Link
                href="https://www.designium.jp/"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="sponsor-link"
              >
                <Image
                  src="/sponsors/designium.png"
                  alt="株式会社デザイニウム"
                  width={180}
                  height={80}
                  className="sponsor-logo"
                />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="sponsors-section">
          <h3 className="sponsor-category">ツールスポンサー</h3>
          <div className="sponsor-list">
            <div className="sponsor-item">
              <Link
                href="https://nulab.com/ja/"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="sponsor-link"
              >
                <Image
                  src="/sponsors/Nulab_logo.png"
                  alt="nulab"
                  width={180}
                  height={80}
                  className="sponsor-logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="sponsors-section">
          <h3 className="sponsor-category">会場スポンサー</h3>
          <div className="sponsor-list">
            <div className="sponsor-item">
              <Link
                href="https://techhub-yokohama.com/"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="sponsor-link"
              >
                <Image
                  src="/sponsors/coWorkingLogo_M.png"
                  alt="Tech Hub Yokohama"
                  width={180}
                  height={80}
                  className="sponsor-logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


