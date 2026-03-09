import React, { useEffect } from 'react';

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

function strip(s) { return (s || '').replace(/\s*\[.*?\]\s*$/, '').trim(); }

export default function ArticleModal({ article, onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!article) return null;

    const cat = (article.category || guessCat(article)).toLowerCase();

    const shareURL = (platform) => {
        const u = encodeURIComponent(article.url && article.url !== '#' ? article.url : location.href);
        const t = encodeURIComponent(article.title);
        const urls = {
            twitter: `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
        };
        if (urls[platform]) window.open(urls[platform], '_blank', 'width=600,height=400');
        else {
            navigator.clipboard.writeText(decodeURIComponent(u)).then(() => alert('✓ Link copied!'));
        }
    };

    const fmtDate = (d) => new Date(d).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <div className="overlay open" onClick={(e) => { if (e.target.className.includes('overlay')) onClose(); }}>
            <article className="modal" role="dialog" aria-modal="true">
                <button className="modal-close-btn" onClick={onClose}><i className="fa fa-times"></i></button>
                <div className="modal-hero">
                    <img
                        src={article.urlToImage && !article.urlToImage.startsWith('data:') ? article.urlToImage : FB_IMG}
                        alt={article.title}
                        onError={(e) => { e.target.src = FB_IMG; }}
                    />
                    <div className="modal-hero-fade"></div>
                    <span className={`modal-cat cat--${cat}`}>{CAT_LABELS[cat] || cat}</span>
                </div>
                <div className="modal-body">
                    <div className="modal-meta">
                        <span><i className="fa fa-newspaper"></i> {article.source?.name || 'Unknown'}</span>
                        <span className="dot-sep">•</span>
                        <span><i className="fa fa-calendar-alt"></i> {fmtDate(article.publishedAt)}</span>
                        <span className="dot-sep">•</span>
                        <span><i className="fa fa-book-open"></i> {article.readingTime || 1} min read</span>
                    </div>
                    <h1 className="modal-title">{article.title}</h1>
                    <p className="modal-lead">{article.description || ''}</p>
                    <p className="modal-excerpt">{strip(article.content || article.description || 'Full article available at the source.')}</p>
                    <div className="modal-footer">
                        <a className="btn-primary" href={article.url && article.url !== '#' ? article.url : '#'} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-external-link-alt"></i> Read Full Story
                        </a>
                        <div className="modal-share">
                            <button onClick={() => shareURL('twitter')} title="Share on Twitter"><i className="fab fa-twitter"></i></button>
                            <button onClick={() => shareURL('facebook')} title="Share on Facebook"><i className="fab fa-facebook"></i></button>
                            <button onClick={() => shareURL('copy')} title="Copy link"><i className="fa fa-link"></i></button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
