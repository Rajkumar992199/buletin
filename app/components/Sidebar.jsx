function trunc(s, n) { return (!s || s.length <= n) ? s : s.slice(0, n).trim() + '…'; }
function ago(d) {
    const ms = Date.now() - new Date(d).getTime(), m = ~~(ms / 6e4), h = ~~(ms / 36e5), dy = ~~(ms / 864e5);
    if (m < 1) return 'Just now';
    if (m < 60) return m + 'm ago';
    if (h < 24) return h + 'h ago';
    if (dy < 7) return dy + 'd ago';
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function Sidebar({ trendingItems = [], onArticleClick }) {
    return (
        <>
            <div className="widget">
                <div className="widget-head">
                    <span className="widget-label"><i className="fa fa-fire-alt"></i> Trending</span>
                </div>
                <ol className="trending-ol">
                    {trendingItems.length ? (
                        trendingItems.slice(0, 6).map((a, i) => (
                            <li key={i} className="trend-item" onClick={() => onArticleClick(a)}>
                                <span className="trend-num">0{i + 1}</span>
                                <div className="trend-info">
                                    <p className="trend-title">{trunc(a.title, 70)}</p>
                                    <span className="trend-src">{a.source?.name || ''} · {ago(a.publishedAt)}</span>
                                </div>
                            </li>
                        ))
                    ) : (
                        Array(5).fill(0).map((_, i) => (
                            <li key={i} className="sk-trend">
                                <div className="sk sk-line"></div>
                                <div className="sk sk-line short"></div>
                            </li>
                        ))
                    )}
                </ol>
            </div>

            <div className="widget newsletter-widget">
                <div className="nl-icon"><i className="fa fa-envelope"></i></div>
                <h3>Daily Briefing</h3>
                <p>Get the most important stories delivered to your inbox every morning.</p>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    alert('🎉 Subscribed! Check your inbox.');
                    e.target.reset();
                }}>
                    <input type="email" placeholder="your@email.com" required />
                    <button type="submit">Subscribe Free</button>
                </form>
                <p className="nl-note"><i className="fa fa-shield-alt"></i> No spam. Cancel anytime.</p>
            </div>

            <div className="widget">
                <div className="widget-head">
                    <span className="widget-label"><i className="fa fa-tags"></i> Popular Tags</span>
                </div>
                <div className="tags-cloud">
                    <span className="tag">Artificial Intelligence</span>
                    <span className="tag">Climate</span>
                    <span className="tag">Economy</span>
                    <span className="tag">Space</span>
                    <span className="tag">Politics</span>
                    <span className="tag">Health</span>
                    <span className="tag">Startups</span>
                    <span className="tag">Crypto</span>
                    <span className="tag">Science</span>
                    <span className="tag">Sport</span>
                </div>
            </div>

            <div className="widget">
                <div className="widget-head">
                    <span className="widget-label"><i className="fa fa-satellite-dish"></i> Sources</span>
                </div>
                <div className="sources-wrap">
                    <div className="source-row"><div className="source-dot red"></div><span>Reuters</span></div>
                    <div className="source-row"><div className="source-dot blue"></div><span>BBC News</span></div>
                    <div className="source-row"><div className="source-dot orange"></div><span>TechCrunch</span></div>
                    <div className="source-row"><div className="source-dot green"></div><span>Bloomberg</span></div>
                    <div className="source-row"><div className="source-dot purple"></div><span>The Guardian</span></div>
                    <div className="source-row"><div className="source-dot cyan"></div><span>NASA</span></div>
                </div>
            </div>
        </>
    );
}
