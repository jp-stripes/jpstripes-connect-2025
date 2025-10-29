export default function Timetable() {
  const sessions = [
    { time: '12:00', title: '開場', speaker: '' },
    { time: '12:45', title: '開会挨拶', speaker: '' },
    { 
      time: '13:00', 
      title: 'オープニングキーノート: Stripeの今とこれから - 決済とAIがもたらすビジネスの可能性', 
      speaker: 'Stripe Daniel Heffernanさん',
      keynote: true
    },
    { time: '13:40', title: 'セッションタイトル調整中', speaker: '', placeholder: true },
    { time: '14:10', title: 'スポンサーLT', speaker: '', sponsor: true },
    { time: '14:20', title: '休憩', speaker: '', break: true },
    { time: '14:30', title: 'セッションタイトル調整中', speaker: '', placeholder: true },
    { 
      time: '15:10', 
      title: '(仮) Stripeでビジネスの解像度を高めるための取り組みについて', 
      speaker: '株式会社Helpfeel 秋山さん / Studio, Inc 八木さん' 
    },
    { time: '15:50', title: 'スポンサーLT', speaker: '', sponsor: true },
    { time: '16:00', title: '休憩', speaker: '', break: true },
    { 
      time: '16:10', 
      title: 'Stripeでサブスクを立ち上げ / 運用する際のカンどころ', 
      speaker: '株式会社 TBSテレビ 亀田 遼さん / アトモフ株式会社 中野 恭兵さん' 
    },
    { 
      time: '16:50', 
      title: '[仮]Stripe Connect運用10年のリアル：プラットフォーム決済、成功の勘所と次の一手', 
      speaker: '株式会社favy 森さん / 株式会社DIGITALJET 真崎 克宏さん' 
    },
    { time: '17:30', title: 'LTセッション', speaker: '募集開始前', lt: true },
    { time: '17:45', title: '閉会挨拶 - コミュニティとStripeと私', speaker: '岡本 秀高' },
    { time: '18:00', title: '本編終了。懇親会へ', speaker: '', party: true },
  ];

  return (
    <section className="timetable">
      <div className="timetable-content">
        <h2 className="timetable-title">Timetable</h2>
        
        <div className="timetable-list">
          {sessions.map((session, index) => (
            <div 
              key={index} 
              className={`timetable-item ${session.keynote ? 'keynote' : ''} ${session.break ? 'break' : ''} ${session.sponsor ? 'sponsor' : ''} ${session.lt ? 'lt' : ''} ${session.party ? 'party' : ''} ${session.placeholder ? 'placeholder' : ''}`}
            >
              <div className="session-time">{session.time}</div>
              <div className="session-content">
                <div className="session-title">{session.title}</div>
                {session.speaker && (
                  <div className="session-speaker">{session.speaker}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


