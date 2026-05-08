const PLAYLIST_ID = 'PLr8gucIRpGCH9HRuWLCAgIjiNyWUQBpO0';
const FIRST_VIDEO_ID = 'pfau5P1NW3c';
const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;
const PLAYLIST_EMBED_URL = `https://www.youtube.com/embed/${FIRST_VIDEO_ID}?list=${PLAYLIST_ID}&rel=0`;
const PLAYLIST_WATCH_URL = `https://www.youtube.com/watch?v=${FIRST_VIDEO_ID}&list=${PLAYLIST_ID}`;

type ThemeKey = 'theory' | 'practice' | 'future';

type ArchiveSession = {
  time: string;
  title: string;
  speaker: string;
  summary: string;
  themes: ThemeKey[];
  badge?: 'Keynote' | 'Session' | 'LT' | 'Closing';
};

const themeMeta: Record<ThemeKey, { label: string; sub: string; symbol: string }> = {
  theory: { label: '理論', sub: 'Theory', symbol: '01' },
  practice: { label: '実践', sub: 'Practice', symbol: '02' },
  future: { label: '未来', sub: 'Future', symbol: '03' },
};

const archiveSessions: ArchiveSession[] = [
  {
    time: '13:00',
    title: 'オープニングキーノート: Stripeの今とこれから — 決済とAIがもたらすビジネスの可能性',
    speaker: 'Stripe / Daniel Heffernanさん',
    summary:
      'Stripeの現在地と、決済 × AI がもたらすこれからのビジネスの広がりを描き出す、本イベントの起点となる基調講演。',
    themes: ['theory', 'future'],
    badge: 'Keynote',
  },
  {
    time: '13:40',
    title: 'RevOps力が増す、Stripeコミュニティ活用のススメ',
    speaker: '小島 英揮さん / 三浦 一樹さん / 古里 武士さん / 清家 史郎さん',
    summary:
      'コミュニティを通じて RevOps の知見をどう加速させるか。JP_Stripes を支えるメンバーによるパネル。',
    themes: ['practice'],
    badge: 'Session',
  },
  {
    time: '14:30',
    title: 'SaaSのビジネス・顧客解像度を高めるためのRevOpsへの挑戦',
    speaker: '株式会社Helpfeel 秋山さん / Studio, Inc 八木さん',
    summary:
      'プロダクトと収益の解像度を上げるために、現場で取り組まれている RevOps の挑戦と学び。',
    themes: ['practice'],
    badge: 'Session',
  },
  {
    time: '15:10',
    title: '浦島太郎にならないための、Stripe最新動向キャッチアップ',
    speaker: 'Stripe プロフェッショナルサービスチーム 齊藤 光正さん',
    summary:
      '進化し続ける Stripe の最新アップデートを、開発・運用の観点で俯瞰してキャッチアップ。',
    themes: ['theory'],
    badge: 'Session',
  },
  {
    time: '16:10',
    title: 'Stripeでサブスクを立ち上げ / 運用する際のカンどころ',
    speaker: '株式会社TBSテレビ 亀田 遼さん / アトモフ株式会社 中野 恭兵さん',
    summary:
      'サブスクリプションの立ち上げから運用フェーズで遭遇する落とし穴と、現場で磨かれた運用の勘どころ。',
    themes: ['practice'],
    badge: 'Session',
  },
  {
    time: '16:50',
    title: 'Stripe Connect運用10年のリアル：プラットフォーム決済、成功の勘所と次の一手',
    speaker: '株式会社favy 森さん / 株式会社DIGITALJET 真崎 克宏さん',
    summary:
      'Stripe Connect を 10 年運用してきたからこそ語れる、プラットフォーム決済の現実と次の一手。',
    themes: ['practice', 'future'],
    badge: 'Session',
  },
  {
    time: '17:30',
    title: 'LT: Stripeで3Dセキュアを実装する',
    speaker: '@KenKen127_さん',
    summary: '3Dセキュア対応を実装するうえでの勘どころを、ライトニングトークでコンパクトに。',
    themes: ['practice'],
    badge: 'LT',
  },
  {
    time: '17:35',
    title: 'LT: Payment Records API を使って地域通貨を Stripe Dashboard に統合してみた',
    speaker: '伊藤さん',
    summary:
      'Payment Records API を活用し、地域通貨を Stripe Dashboard に統合する実験的な取り組み。',
    themes: ['future', 'practice'],
    badge: 'LT',
  },
  {
    time: '17:40',
    title: 'LT: サブスク解約業務を無くすためにカスタマーポータルを使ってみた',
    speaker: '@Okiyasu2さん',
    summary:
      'カスタマーポータルを活かして解約業務そのものを無くしにいく、運用観点のライトニングトーク。',
    themes: ['practice'],
    badge: 'LT',
  },
  {
    time: '17:45',
    title: '閉会挨拶 — コミュニティとStripeと私',
    speaker: '岡本 秀高',
    summary: 'JP_Stripes コミュニティの歩みと、これからを語るクロージング。',
    themes: ['future'],
    badge: 'Closing',
  },
];

const stats = [
  { label: 'Sessions', value: archiveSessions.length.toString() },
  {
    label: 'Speakers',
    value: '13',
  },
  { label: 'Themes', value: '3' },
  { label: 'Date', value: '2025.11.23' },
];

export default function Archive() {
  return (
    <section className="archive" id="archive">
      <div className="archive-content">
        <div className="archive-header">
          <span className="archive-eyebrow">Conference Archive</span>
          <h2 className="archive-title">セッション映像、公開中。</h2>
          <p className="archive-lead">
            JP_Stripes Connect 2025 の全セッションアーカイブを YouTube プレイリストで公開しました。
            会場の熱量を、いつでも、どこからでも。
          </p>
        </div>

        <div className="archive-player">
          <div className="archive-player-frame">
            <iframe
              src={PLAYLIST_EMBED_URL}
              title="JP_Stripes Connect 2025 セッションアーカイブ プレイリスト"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="archive-player-meta">
            <div className="archive-player-caption">
              プレイヤー右上のリストから各セッションを選択できます
            </div>
            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="archive-cta"
            >
              プレイリストを YouTube で開く
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <ul className="archive-stats">
          {stats.map((s) => (
            <li key={s.label} className="archive-stat">
              <span className="archive-stat-value">{s.value}</span>
              <span className="archive-stat-label">{s.label}</span>
            </li>
          ))}
        </ul>

        <div className="archive-guide">
          <div className="archive-guide-header">
            <h3 className="archive-guide-title">テーマ別アーカイブガイド</h3>
            <p className="archive-guide-lead">
              「理論 / 実践 / 未来」の3つのテーマで、当日のセッションを振り返るためのガイドです。
              気になるテーマから視聴を始めてみてください。
            </p>
          </div>

          <div className="archive-sessions">
            {archiveSessions.map((session) => (
              <article key={session.time} className="archive-session">
                <header className="archive-session-head">
                  <span className="archive-session-time">{session.time}</span>
                  {session.badge && (
                    <span
                      className={`archive-session-badge archive-session-badge--${session.badge.toLowerCase()}`}
                    >
                      {session.badge}
                    </span>
                  )}
                  <span className="archive-session-themes">
                    {session.themes.map((t) => (
                      <span key={t} className={`archive-theme-chip archive-theme-chip--${t}`}>
                        <span className="archive-theme-chip-symbol">{themeMeta[t].symbol}</span>
                        <span className="archive-theme-chip-label">{themeMeta[t].label}</span>
                        <span className="archive-theme-chip-sub">{themeMeta[t].sub}</span>
                      </span>
                    ))}
                  </span>
                </header>
                <h4 className="archive-session-title">{session.title}</h4>
                <p className="archive-session-speaker">{session.speaker}</p>
                <p className="archive-session-summary">{session.summary}</p>
                <a
                  href={PLAYLIST_WATCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="archive-session-link"
                  aria-label={`${session.title} をプレイリストで視聴する`}
                >
                  ▶ プレイリストで視聴する
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
