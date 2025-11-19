import Image from 'next/image';

// スピーカーの画像リスト
const speakers = [
  { image: '/speakers/1516767400750.jpg', company: 'Stripe', name: 'Daniel Heffernanさん' },
  { image: '', company: 'Stripe プロフェッショナルサービスチーム', name: '齊藤 光正さん' },
  { image: '/speakers/ojima.jpg', company: '株式会社Still Day One', name: '小島 英揮さん' },
  { image: '/speakers/miura.jpg', company: '株式会社ヘプタゴン', name: '三浦 一樹さん' },
  { image: '/speakers/furusato.png', company: '株式会社DIGITALJET', name: '古里 武士さん' },
  { image: '/speakers/seike.jpg', company: '株式会社Fusic', name: '清家 史郎さん' },
  { image: '/speakers/b5f641fdf20fc10651b5c8797b6e6461.png', company: '株式会社Helpfeel', name: '秋山さん' },
  { image: '/speakers/1746562415085.jpg', company: 'Studio, Inc', name: '八木さん' },
  { image: '/speakers/12a26cb6aa9617aed86cbb8ea40e5f2b.jpg', company: 'アトモフ株式会社', name: '中野 恭兵さん' },
  { image: '/speakers/3d64468036802b636c3b2b10623099c3.jpg', company: '株式会社 TBSテレビ', name: '亀田 遼さん' },
  { image: '/speakers/a3de51c09d6885bd730934cba9e69eab.jpg', company: '株式会社favy', name: '森さん' },
  { image: '/speakers/e279e71ea43f36f207e3508ee66b83ba.jpg', company: '株式会社DIGITALJET', name: '真崎 克宏さん' },
  { image: '/speakers/DSC_5282.JPG', company: 'Revtrona', name: '岡本 秀高' },
];

export default function Speakers() {
  return (
    <section className="speakers">
      <div className="speakers-content">
        <h2 className="speakers-title">Speakers</h2>
        
        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-item">
              <div className="speaker-image-wrapper">
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={speaker.company ? `${speaker.company} ${speaker.name}` : speaker.name}
                    width={300}
                    height={300}
                    className="speaker-image"
                  />
                ) : (
                  <div className="speaker-placeholder">
                    <span className="speaker-placeholder-text">画像準備中</span>
                  </div>
                )}
              </div>
              <div className="speaker-info">
                {speaker.company && (
                  <div className="speaker-company">{speaker.company}</div>
                )}
                <div className="speaker-name">{speaker.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

