const PLAYLIST_ID = 'PLr8gucIRpGCH9HRuWLCAgIjiNyWUQBpO0';
const FIRST_VIDEO_ID = 'pfau5P1NW3c';
const PLAYLIST_WATCH_URL = `https://www.youtube.com/watch?v=${FIRST_VIDEO_ID}&list=${PLAYLIST_ID}`;

type Session = {
  time: string;
  title: string;
  speaker: string;
  keynote?: boolean;
  sponsor?: boolean;
  break?: boolean;
  lt?: boolean;
  party?: boolean;
  archived?: boolean;
};

export default function Timetable() {
  const sessions: Session[] = [
    { time: '12:00', title: '開場', speaker: '' },
    { time: '12:45', title: '開会挨拶', speaker: '' },
    {
      time: '13:00',
      title: 'オープニングキーノート: Stripeの今とこれから - 決済とAIがもたらすビジネスの可能性',
      speaker: 'Stripe Daniel Heffernanさん',
      keynote: true,
      archived: true,
    },
    {
      time: '13:40',
      title: 'RevOps力が増す、Stripeコミュニティ活用のススメ',
      speaker: '小島 英揮さん / 三浦 一樹さん / 古里 武士 さん / 清家 史郎さん',
      archived: true,
    },
    { time: '14:10', title: 'スポンサーLT <サイオステクノロジー様>', speaker: '', sponsor: true },
    { time: '14:20', title: '休憩', speaker: '', break: true },
    {
      time: '14:30',
      title: 'SaaSのビジネス・顧客解像度を高めるためのRevOpsへの挑戦',
      speaker: '株式会社Helpfeel 秋山さん / Studio, Inc 八木さん',
      archived: true,
    },
    {
      time: '15:10',
      title: '浦島太郎にならないための、Stripe最新動向キャッチアップ',
      speaker: 'Stripe プロフェッショナルサービスチーム 齊藤 光正さん',
      archived: true,
    },
    { time: '15:50', title: 'スポンサーLT <Stripe様>', speaker: '', sponsor: true },
    { time: '16:00', title: '休憩', speaker: '', break: true },
    {
      time: '16:10',
      title: 'Stripeでサブスクを立ち上げ / 運用する際のカンどころ',
      speaker: '株式会社　TBSテレビ 亀田 遼さん / アトモフ株式会社 中野 恭兵さん',
      archived: true,
    },
    {
      time: '16:50',
      title: 'Stripe Connect運用10年のリアル：プラットフォーム決済、成功の勘所と次の一手',
      speaker: '株式会社favy 森さん / 株式会社DIGITALJET 真崎 克宏さん',
      archived: true,
    },
    {
      time: '17:30',
      title: 'LT: Stripeで3Dセキュアを実装する',
      speaker: '@KenKen127_ さん',
      lt: true,
      archived: true,
    },
    {
      time: '17:35',
      title: 'LT: Payment Records API を使って地域通貨を Stripe Dashboard に統合してみた',
      speaker: '伊藤 さん',
      lt: true,
      archived: true,
    },
    {
      time: '17:40',
      title: 'LT: サブスク解約業務を無くすためにカスタマーポータルを使ってみた',
      speaker: '@Okiyasu2 さん',
      lt: true,
      archived: true,
    },
    {
      time: '17:45',
      title: '閉会挨拶 - コミュニティとStripeと私',
      speaker: '岡本 秀高',
      archived: true,
    },
    { time: '18:00', title: '本編終了。懇親会へ', speaker: '', party: true },
  ];

  return (
    <section className="timetable">
      <div className="timetable-content">
        <h2 className="timetable-title">Timetable</h2>
        <p className="timetable-subtitle">
          ▶ アイコンの付いたセッションは
          <a href="#archive" className="timetable-subtitle-link">
            アーカイブ
          </a>
          で視聴できます
        </p>

        <div className="timetable-list">
          {sessions.map((session, index) => (
            <div
              key={index}
              className={`timetable-item ${session.keynote ? 'keynote' : ''} ${session.break ? 'break' : ''} ${session.sponsor ? 'sponsor' : ''} ${session.lt ? 'lt' : ''} ${session.party ? 'party' : ''}`}
            >
              <div className="session-time">{session.time}</div>
              <div className="session-content">
                <div className="session-title">
                  {session.archived && (
                    <span className="session-archived-badge" aria-label="アーカイブ視聴可能">
                      ▶
                    </span>
                  )}
                  {session.title}
                </div>
                {session.speaker && (
                  <div className="session-speaker">{session.speaker}</div>
                )}
                {session.archived && (
                  <a
                    href={PLAYLIST_WATCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="session-archive-link"
                  >
                    アーカイブを視聴
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
