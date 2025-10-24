export default function Venue() {
  return (
    <section className="venue">
      <div className="venue-content">
        <h2 className="venue-title">Venue</h2>
        
        <div className="venue-info">
          <div className="venue-name">TECH HUB YOKOHAMA</div>
          <div className="venue-address">
            神奈川県横浜市西区みなとみらい2-2-1<br />
            横浜ランドマークタワー敷地内
          </div>
          
          <div className="venue-access">
            <h3 className="access-title">アクセス</h3>
            <ul className="access-list">
              <li>JR根岸線・東海道線「桜木町駅」徒歩5分</li>
              <li>みなとみらい線「みなとみらい駅」徒歩3分</li>
            </ul>
          </div>
          
          <a 
            href="https://techhub-yokohama.com/" 
            className="venue-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            会場サイトを見る →
          </a>
        </div>
      </div>
    </section>
  );
}

