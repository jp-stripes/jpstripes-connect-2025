const PLAYLIST_ID = 'PLr8gucIRpGCH9HRuWLCAgIjiNyWUQBpO0';
const FIRST_VIDEO_ID = 'pfau5P1NW3c';
const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;
const PLAYLIST_EMBED_URL = `https://www.youtube.com/embed/${FIRST_VIDEO_ID}?list=${PLAYLIST_ID}&rel=0`;

export default function Archive() {
  return (
    <section className="archive" id="archive">
      <div className="archive-content">
        <div className="archive-header">
          <span className="archive-eyebrow">Conference Archive</span>
          <h2 className="archive-title">セッション映像、公開中。</h2>
          <p className="archive-lead">
            JP_Stripes Connect 2025 のセッションアーカイブを YouTube プレイリストで公開しました。
            プレイヤー右上のリストから、各セッションを選んでご覧ください。
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
              プレイヤー内のリストから各セッションへ移動できます
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
      </div>
    </section>
  );
}
