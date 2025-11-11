import Image from 'next/image';

// スピーカーの画像リスト
const speakers = [
    { image: '/speakers/1516767400750.jpg', name: 'Stripe Daniel Heffernanさん' },
    { image: '/speakers/b5f641fdf20fc10651b5c8797b6e6461.png', name: '株式会社Helpfeel 秋山さん' },
    { image: '/speakers/1746562415085.jpg', name: 'Studio, Inc 八木さん' },
  { image: '/speakers/12a26cb6aa9617aed86cbb8ea40e5f2b.jpg', name: 'アトモフ株式会社中野 恭兵さん' },
  { image: '/speakers/3d64468036802b636c3b2b10623099c3.jpg', name: '株式会社 TBSテレビ 亀田 遼さん' },
  { image: '/speakers/a3de51c09d6885bd730934cba9e69eab.jpg', name: '株式会社favy森さん' },
  { image: '/speakers/e279e71ea43f36f207e3508ee66b83ba.jpg', name: '株式会社DIGITALJET 真崎 克宏さん' },
  { image: '/speakers/DSC_5282.JPG', name: 'Revtrona 岡本さん' },
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
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={300}
                  height={300}
                  className="speaker-image"
                />
              </div>
              <div className="speaker-name">{speaker.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

