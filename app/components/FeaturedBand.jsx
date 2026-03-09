const FB_IMG = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80';
const CAT_LABELS = {
    technology: 'Technology', business: 'Business', sports: 'Sports',
    health: 'Health', science: 'Science', entertainment: 'Culture', general: 'News'
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

function ago(d) {
    const ms = Date.now() - new Date(d).getTime(), m = ~~(ms / 6e4), h = ~~(ms / 36e5), dy = ~~(ms / 864e5);
    if (m < 1) return 'Just now';
    if (m < 60) return m + 'm ago';
    if (h < 24) return h + 'h ago';
    if (dy < 7) return dy + 'd ago';
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function FeaturedBand({ articles = [], onArticleClick }) {
    const picks = articles.slice(4, 7);

    if (!picks.length) return null;

    return (
        <section className="featured-band" id="featuredBand">
            <div className="container">
                <div className="section-head">
                    <h2 className="section-label"><span className="label-bar red"></span> Editor's Picks</h2>
                </div>
                <div className="band-grid" id="bandGrid">
                    {picks.map((a, i) => {
                        const cat = (a.category || guessCat(a)).toLowerCase();
                        return (
                            <div key={i} className="band-card" onClick={() => onArticleClick(a)}>
                                <div className="band-img-wrap">
                                    <img
                                        src={a.urlToImage && !a.urlToImage.startsWith('data:') ? a.urlToImage : FB_IMG}
                                        alt={a.title || 'Featured'} loading="lazy"
                                        onError={(e) => { e.target.src = FB_IMG; }}
                                    />
                                </div>
                                <div className="band-body">
                                    <div className="band-cat">{CAT_LABELS[cat] || cat}</div>
                                    <h3 className="band-title">{a.title}</h3>
                                    <div className="band-meta">
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
