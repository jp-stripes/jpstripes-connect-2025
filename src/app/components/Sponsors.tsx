import Image from 'next/image';

export default function Sponsors() {
  return (
    <section className="sponsors">
      <div className="sponsors-content">
        <h2 className="sponsors-title">Sponsors</h2>
        
        <div className="sponsors-section">
          <h3 className="sponsor-category">スペシャルスポンサー</h3>
          <div className="sponsor-list">
            <div className="sponsor-item special">
              <Image
                src="/sponsors/Stripe_logo.png"
                alt="Stripe"
                width={200}
                height={80}
                className="sponsor-logo"
              />
            </div>
          </div>
        </div>
        
        <div className="sponsors-section">
          <h3 className="sponsor-category">スポンサー</h3>
          <div className="sponsor-list">
            <div className="sponsor-item">
              <Image
                src="/sponsors/digitaljet.png"
                alt="digitaljet"
                width={180}
                height={80}
                className="sponsor-logo"
              />
            </div>
            <div className="sponsor-item">
              <Image
                src="/sponsors/Revtrona.png"
                alt="revtrona"
                width={180}
                height={80}
                className="sponsor-logo"
              />
            </div>
          </div>
        </div>
        
        <div className="sponsors-section">
          <h3 className="sponsor-category">ツールスポンサー</h3>
          <div className="sponsor-list">
            <div className="sponsor-item">
              <Image
                src="/sponsors/Nulab_logo.png"
                alt="nulab"
                width={180}
                height={80}
                className="sponsor-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


