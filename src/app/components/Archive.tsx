const PLAYLIST = "PLr8gucIRpGCH9HRuWLCAgIjiNyWUQBpO0";
const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST}`;

function videoUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}&list=${PLAYLIST}`;
}
function thumbUrl(id: string) {
  return `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
}

type Session = {
  time: string;
  label: string;
  title: string;
  desc: string;
  by: string;
  videoId: string;
};

const SESSIONS: Session[] = [
  {
    time: "13:00",
    label: "Keynote",
    title: "オープニングキーノート: Stripeの今とこれから — 決済とAIがもたらすビジネスの可能性",
    desc: "Stripe の最新ビジョンと日本市場戦略。決済インフラの進化、AI による業務効率化／顧客体験、そして AI コマース・Agentic Commerce Protocol まで。",
    by: "Daniel Heffernan — ストライプジャパン株式会社 共同代表取締役",
    videoId: "9XxgO4xyxWQ",
  },
  {
    time: "13:40",
    label: "Community",
    title: "RevOps力が増す、Stripeコミュニティ活用のススメ",
    desc: "サッポロ・岡山・福岡の各 JP_Stripes コミュニティリーダーが集合。最新アップデートの追従と他社事例から学ぶ、コミュニティの実用的な使い方。",
    by: "小島 英揮（モデレータ）/ 三浦 一樹 / 古里 武士 / 清家 史郎",
    videoId: "wt4TnmFPubM",
  },
  {
    time: "14:30",
    label: "RevOps",
    title: "SaaSのビジネス・顧客解像度を高めるためのRevOpsへの挑戦",
    desc: "決済データを起点にビジネス・顧客の解像度を上げる RevOps の実践。Helpfeel と STUDIO、それぞれの取り組みと組織の動かし方。",
    by: "秋山 博紀 / 八木 — 株式会社Helpfeel / STUDIO株式会社",
    videoId: "Z2HuxUtMrjY",
  },
  {
    time: "15:50",
    label: "Sponsor LT",
    title: "スポンサーLT — Stripe導入戦略とビジネスモデル設計",
    desc: "Stripe を活用した導入戦略とビジネスモデル設計の知見をスポンサー枠で共有。",
    by: "サイオステクノロジー株式会社",
    videoId: "dr1KKBzs0KM",
  },
  {
    time: "16:10",
    label: "Subscriptions",
    title: "Stripeでサブスクを立ち上げ／運用する際のカンどころ",
    desc: "10年運用の Atmoph と新規導入の TBS が語る、サブスクの立ち上げ・支払い情報サポート・クロスデバイス UX・無料プラン戦略・3DS2・Payment Records API。",
    by: "亀田 涼 / 中野 恭兵（モデレータ：岡本 秀高）— TBSテレビ / 株式会社Atmoph",
    videoId: "1GPgY1s_IcM",
  },
  {
    time: "16:50",
    label: "Connect",
    title: "Stripe Connect運用10年のリアル — プラットフォーム決済、成功の勘所と次の一手",
    desc: "favy のサブスクプラットフォームを 10 年支えてきた Connect 運用の現場知。返金・税／インボイス対応、Stripe Terminal を使った次の一手まで。",
    by: "森 / 真崎 克宏 — 株式会社favy / 株式会社DIGITALJET",
    videoId: "pfau5P1NW3c",
  },
];

function ArchiveCard({ s }: { s: Session }) {
  const href = videoUrl(s.videoId);
  return (
    <li className="archive-card">
      <a
        className="archive-thumb"
        href={href}
        target="_blank"
        rel="noopener"
        aria-label={`${s.title} を YouTube で視聴`}
      >
        <img loading="lazy" src={thumbUrl(s.videoId)} alt="" width={320} height={180} />
        <span className="archive-play" aria-hidden="true">▶</span>
      </a>
      <div className="archive-info">
        <div className="archive-meta">
          <span className="archive-time">{s.time}</span>
          <span className="archive-label">{s.label}</span>
        </div>
        <div className="archive-title">{s.title}</div>
        <div className="archive-desc">{s.desc}</div>
        <div className="archive-by">{s.by}</div>
        <a className="archive-watch" href={href} target="_blank" rel="noopener">
          Watch on YouTube ↗
        </a>
      </div>
    </li>
  );
}

export default function Archive() {
  return (
    <section className="archive">
      <div className="archive-content">
        <h2 className="archive-section-title">Session Archive</h2>
        <p className="archive-intro">
          全セッションのアーカイブ動画を YouTube で公開中。サムネをクリックするとプレイリスト連続再生で視聴できます。
        </p>
        <div className="archive-playlist-link">
          <a href={PLAYLIST_URL} target="_blank" rel="noopener" className="cta-button">
            YouTube プレイリストを開く ↗
          </a>
        </div>
        <ol className="archive-list">
          {SESSIONS.map((s) => (
            <ArchiveCard key={s.time + s.title} s={s} />
          ))}
        </ol>
      </div>
    </section>
  );
}
