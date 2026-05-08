const PLAYLIST_ID = 'PLr8gucIRpGCH9HRuWLCAgIjiNyWUQBpO0';
const FIRST_VIDEO_ID = 'pfau5P1NW3c';
const PLAYLIST_WATCH_URL = `https://www.youtube.com/watch?v=${FIRST_VIDEO_ID}&list=${PLAYLIST_ID}`;

export default function Countdown() {
  return (
    <section className="post-event">
      <div className="post-event-wrapper">
        <span className="post-event-eyebrow">Thank you!</span>
        <h2 className="post-event-title">
          JP_Stripes Connect 2025 は<br />
          無事に閉幕しました。
        </h2>
        <p className="post-event-lead">
          会場でご一緒したみなさま、登壇者のみなさま、スポンサーのみなさま、
          <br />
          そしてオンラインから応援してくれたみなさま、本当にありがとうございました。
        </p>
        <div className="post-event-actions">
          <a href="#archive" className="post-event-cta">
            アーカイブを視聴する
          </a>
          <a
            href={PLAYLIST_WATCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="post-event-cta post-event-cta--ghost"
          >
            YouTube で開く ↗
          </a>
        </div>
      </div>
    </section>
  );
}
