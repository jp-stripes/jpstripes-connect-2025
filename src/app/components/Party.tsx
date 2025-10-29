export default function Party() {
  return (
    <section className="party">
      <div className="party-content">
        <h2 className="party-title">Networking Party</h2>
        
        <div className="party-info">
          <div className="party-details">
            <div className="party-detail-item">
              <div className="party-detail-label">開始時間</div>
              <div className="party-detail-value">18:30〜</div>
            </div>
            <div className="party-detail-item">
              <div className="party-detail-label">参加費</div>
              <div className="party-detail-value">¥2,500</div>
            </div>
          </div>
          
          <p className="party-description">
            イベント終了後、さらにディープな交流を深めましょう。<br />
            サブイベントへのお申し込みをお忘れなく！
          </p>
          
          <div className="party-note">
            <p>※ サブイベントへの参加には別途申し込みが必要です</p>
          </div>
        </div>
      </div>
    </section>
  );
}


