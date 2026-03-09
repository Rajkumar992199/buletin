const FB_IMG = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80';

const CAT_LABELS = {
    technology: 'Technology', business: 'Business', sports: 'Sports',
    health: 'Health', science: 'Science', entertainment: 'Culture', general: 'News'
};
const CAT_ICONS = {
    technology: 'fa-microchip', business: 'fa-chart-line', sports: 'fa-futbol',
    health: 'fa-heartbeat', science: 'fa-atom', entertainment: 'fa-film', general: 'fa-globe'
};

function guessCat(a) {
    const t = ((a.title || '') + (a.description || '')).toLowerCase();
    if (/tech|ai|software|app|digital|robot|startup|gadget|cyber/.test(t)) return 'technology';
    if (/market|finance|economy|stock|bank|invest|crypto|bitcoin|nasdaq/.test(t)) return 'business';
    if (/sport|football|soccer|nba|nfl|tennis|olympic|champion|athlete/.test(t)) return 'sports';
    if (/health|medical|cancer|vaccine|hospital|doctor|drug|disease/.test(t)) return 'health';
    if (/science|research|space|nasa|climate|planet|study|discovery/.test(t)) return 'science';
    if (/movie|film|music|celebrity|actor|netflix|oscar|grammy/.test(t)) return 'entertainment';
    return 'general';
}

function trunc(s, n) { return (!s || s.length <= n) ? s : s.slice(0, n).trim() + '…'; }
function ago(d) {
    const ms = Date.now() - new Date(d).getTime(), m = ~~(ms / 6e4), h = ~~(ms / 36e5), dy = ~~(ms / 864e5);
    if (m < 1) return 'Just now';
    if (m < 60) return m + 'm ago';
    if (h < 24) return h + 'h ago';
    if (dy < 7) return dy + 'd ago';
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function Hero({ articles = [], onArticleClick }) {
    if (!articles.length) return <section className="hero" id="heroSection"><div className="container hero-grid"></div></section>;

    const f = articles[0];
    const mainCat = (f.category || guessCat(f)).toLowerCase();
    const stacked = articles.slice(1, 4);

    return (
        <section className="hero" id="heroSection">
            <div className="container hero-grid">

                {/* Main Hero */}
                <div className="hero-main" onClick={() => onArticleClick(f)}>
                    <div className="hcard-img">
                        <img
                            src={f.urlToImage && !f.urlToImage.startsWith('data:') ? f.urlToImage : FB_IMG}
                            alt={f.title || 'News image'}
                            loading="lazy"
                            onError={(e) => { e.target.src = FB_IMG; }}
                        />
                        <div className="hcard-overlay"></div>
                        <div className="hcard-body">
                            <span className={`hcard-cat cat--${mainCat}`}>
                                <i className={`fa ${CAT_ICONS[mainCat] || 'fa-globe'}`}></i> {CAT_LABELS[mainCat] || mainCat}
                            </span>
                            <h2 className="hcard-title">{trunc(f.title, 125)}</h2>
                            <div className="hcard-meta">
                                <div className="hcard-author">
                                    <div className="author-avatar">{(f.author || f.source?.name || '?')[0].toUpperCase()}</div>
                                    <span>{f.author || f.source?.name || 'Staff Writer'}</span>
                                </div>
                                <span><i className="fa fa-clock"></i>{ago(f.publishedAt)}</span>
                                <span><i className="fa fa-book-open"></i>{f.readingTime || 1} min</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stacked */}
                <div className="hero-stack">
                    {stacked.map((a, i) => {
                        const sc = (a.category || guessCat(a)).toLowerCase();
                        return (
                            <div key={i} className="hstack-card" onClick={() => onArticleClick(a)}>
                                <div className="hstack-img">
                                    <img
                                        src={a.urlToImage && !a.urlToImage.startsWith('data:') ? a.urlToImage : FB_IMG}
                                        alt={a.title || 'News image'}
                                        loading="lazy"
                                        onError={(e) => { e.target.src = FB_IMG; }}
                                    />
                                </div>
                                <div className="hstack-body">
                                    <div className="hstack-cat">{CAT_LABELS[sc] || sc}</div>
                                    <h3 className="hstack-title">{trunc(a.title, 80)}</h3>
                                    <div className="hstack-meta">
                                        <span><i className="fa fa-newspaper"></i>{a.source?.name || 'News'}</span>
                                        <span><i className="fa fa-clock"></i>{ago(a.publishedAt)}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
