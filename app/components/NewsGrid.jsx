import React from 'react';

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

function trunc(s, n) { return (!s || s.length <= n) ? s : s.slice(0, n).trim() + '…'; }
function ago(d) {
    const ms = Date.now() - new Date(d).getTime(), m = ~~(ms / 6e4), h = ~~(ms / 36e5), dy = ~~(ms / 864e5);
    if (m < 1) return 'Just now';
    if (m < 60) return m + 'm ago';
    if (h < 24) return h + 'h ago';
    if (dy < 7) return dy + 'd ago';
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function NewsGrid({
    articles, loading, category, search, shown, pageSize,
    onLoadMore, onArticleClick, gridMode, setGridMode, clearSearch
}) {

    let titleText = 'Latest Stories';
    if (search) titleText = `Results for "${search}"`;
    else if (category !== 'general') titleText = CAT_LABELS[category] || category;

    const slice = articles.slice(0, shown || pageSize);
    const skeletons = Array(6).fill(0);

    return (
        <>
            <div className="section-head">
                <h2 className="section-label">
                    <span className="label-bar"></span>{titleText}
                </h2>
                <div className="view-toggle">
                    <button className={`vt-btn ${gridMode ? 'active' : ''}`} onClick={() => setGridMode(true)} title="Grid">
                        <i className="fa fa-th-large"></i>
                    </button>
                    <button className={`vt-btn ${!gridMode ? 'active' : ''}`} onClick={() => setGridMode(false)} title="List">
                        <i className="fa fa-th-list"></i>
                    </button>
                </div>
            </div>

            {search && !loading && (
                <div className="search-notice" style={{ display: 'flex' }}>
                    <i className="fa fa-search"></i>
                    <span><strong>{articles.length}</strong> result{articles.length !== 1 ? 's' : ''} for "<strong>{search}</strong>"</span>
                    <button onClick={clearSearch}>Clear <i className="fa fa-times"></i></button>
                </div>
            )}

            <div className={`news-grid ${!gridMode ? 'list-mode' : ''}`}>
                {loading ? (
                    skeletons.map((_, i) => (
                        <div key={i} className="sk-card">
                            <div className="sk sk-full"></div>
                            <div className="sk sk-line"></div>
                            <div className="sk sk-line short"></div>
                        </div>
                    ))
                ) : (
                    slice.map((a, i) => {
                        const cat = (a.category || guessCat(a)).toLowerCase();
                        return (
                            <div key={i} className="ncard" style={{ animationDelay: `${i * 55}ms` }} onClick={() => onArticleClick(a)}>
                                <div className="ncard-img">
                                    {a.urlToImage ? (
                                        <img
                                            src={a.urlToImage.startsWith('data:') ? FB_IMG : a.urlToImage}
                                            alt={a.title || 'Image'} loading="lazy"
                                            onError={(e) => { e.target.outerHTML = '<div class="ncard-img-ph"><i class="fa fa-image"></i></div>'; }}
                                        />
                                    ) : (
                                        <div className="ncard-img-ph"><i className="fa fa-image"></i></div>
                                    )}
                                    <span className={`ncard-badge cat--${cat}`}>{CAT_LABELS[cat] || cat}</span>
                                </div>
                                <div className="ncard-body">
                                    <div className="ncard-source">{a.source?.name || 'Unknown'}</div>
                                    <h3 className="ncard-title">{a.title}</h3>
                                    <p className="ncard-excerpt">{trunc(a.description || '', 110)}</p>
                                    <div className="ncard-foot">
                                        <div className="ncard-foot-l">
                                            <span><i className="fa fa-clock"></i>{ago(a.publishedAt)}</span>
                                        </div>
                                        <span className="ncard-readtime"><i className="fa fa-book-open"></i> {a.readingTime || 1} min</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            <div className="load-more-row">
                {!loading && slice.length < articles.length && (
                    <button className="load-more" onClick={onLoadMore} style={{ display: 'inline-flex' }}>
                        Load More <i className="fa fa-chevron-down"></i>
                    </button>
                )}
                {!loading && articles.length === 0 && (
                    <div className="empty-state" style={{ display: 'flex' }}>
                        <i className="fa fa-newspaper"></i>
                        <p>No stories found</p>
                    </div>
                )}
            </div>
        </>
    );
}
