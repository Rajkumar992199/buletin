export default function BreakingTicker({ articles = [], onArticleClick }) {
    if (!articles.length) return null;

    const items = articles.slice(0, 8);
    const trackItems = [...items, ...items]; // Duplicate for seamless scroll

    const trunc = (s, n) => (!s || s.length <= n) ? s : s.slice(0, n).trim() + '…';

    return (
        <div className="breaking-bar">
            <div className="container breaking-inner">
                <div className="breaking-label"><i className="fa fa-fire"></i> BREAKING</div>
                <div className="breaking-track-wrap">
                    <div className="breaking-track">
                        {trackItems.map((a, i) => (
                            <span
                                key={i}
                                className="breaking-item"
                                style={{ cursor: 'pointer' }}
                                onClick={() => onArticleClick(a)}
                            >
                                {trunc(a.title, 80)}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
