"use client";

import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import CategoryStrip from './components/CategoryStrip';
import BreakingTicker from './components/BreakingTicker';
import Hero from './components/Hero';
import NewsGrid from './components/NewsGrid';
import Sidebar from './components/Sidebar';
import FeaturedBand from './components/FeaturedBand';
import ArticleModal from './components/ArticleModal';

export default function Home() {
    const [category, setCategory] = useState('general');
    const [search, setSearch] = useState('');
    const [articles, setArticles] = useState([]);
    const [shown, setShown] = useState(0);
    const [loading, setLoading] = useState(true);
    const [dark, setDark] = useState(true);
    const [gridMode, setGridMode] = useState(true);
    const [activeArticle, setActiveArticle] = useState(null);
    const [sidebarData, setSidebarData] = useState([]);
    const [demoMode, setDemoMode] = useState(false);

    const PAGE_SIZE = 9;

    useEffect(() => {
        const saved = localStorage.getItem('readly_theme');
        const isDark = saved ? saved === 'dark' : true;
        setDark(isDark);
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');

        // Load initial sidebar data
        fetch('/api/news/trending')
            .then(res => res.json())
            .then(data => setSidebarData(data.articles || []))
            .catch(err => console.error(err));
    }, []);

    const toggleTheme = () => {
        const newDark = !dark;
        setDark(newDark);
        document.documentElement.setAttribute('data-theme', newDark ? 'dark' : 'light');
        localStorage.setItem('readly_theme', newDark ? 'dark' : 'light');
    };

    const loadNews = useCallback(async (cat = 'general') => {
        setLoading(true);
        setCategory(cat);
        setSearch('');
        setShown(0);
        try {
            const url = cat === 'general' ? '/api/news' : `/api/news/category/${cat}`;
            const res = await fetch(url);
            const data = await res.json();
            setArticles((data.articles || []).filter(a => a.title && a.title !== '[Removed]'));
            if (data.mode === 'demo') setDemoMode(true);
            else setDemoMode(false);
        } catch (e) {
            console.error(e);
            setArticles([]);
        } finally {
            setLoading(false);
        }
    }, []);

    const searchNews = useCallback(async (q) => {
        if (!q || q.trim().length < 2) return;
        setLoading(true);
        setSearch(q.trim());
        setShown(0);
        try {
            const res = await fetch(`/api/news/search?q=${encodeURIComponent(q.trim())}`);
            const data = await res.json();
            setArticles((data.articles || []).filter(a => a.title && a.title !== '[Removed]'));
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadNews('general');
    }, [loadNews]);

    return (
        <>
            <Header
                dark={dark}
                toggleTheme={toggleTheme}
                onSearch={searchNews}
                category={category}
                onCategorySelect={loadNews}
                demoMode={demoMode}
            />

            <CategoryStrip
                activeCategory={category}
                onSelect={loadNews}
            />

            {sidebarData.length > 0 && <BreakingTicker articles={sidebarData} onArticleClick={setActiveArticle} />}

            {!search && articles.length > 0 && <Hero articles={articles} onArticleClick={setActiveArticle} />}

            <main className="main-layout">
                <div className="container main-grid">
                    <section className="articles-col">
                        <NewsGrid
                            articles={articles}
                            loading={loading}
                            category={category}
                            search={search}
                            shown={shown}
                            pageSize={PAGE_SIZE}
                            onLoadMore={() => setShown(prev => prev + PAGE_SIZE)}
                            onArticleClick={setActiveArticle}
                            gridMode={gridMode}
                            setGridMode={setGridMode}
                            clearSearch={() => loadNews(category)}
                        />
                    </section>

                    <aside className="sidebar-col">
                        <Sidebar
                            trendingItems={sidebarData}
                            onArticleClick={setActiveArticle}
                        />
                    </aside>
                </div>
            </main>

            {!search && articles.length > 4 && (
                <FeaturedBand articles={articles} onArticleClick={setActiveArticle} />
            )}

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-grid">
                    <div className="footer-brand">
                        <div className="logo">
                            <div className="logo-mark footer-logo">
                                <span className="logo-name">BULETIN</span>
                                <div className="logo-dot"></div>
                            </div>
                        </div>
                        <p>Premium news aggregator delivering real-time stories from 70+ trusted sources worldwide. Stay informed, stay ahead.</p>
                        <div className="socials">
                            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="f-col">
                            <h4>News</h4>
                            <a href="#" onClick={(e) => { e.preventDefault(); loadNews('technology') }}>Technology</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); loadNews('business') }}>Business</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); loadNews('sports') }}>Sports</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); loadNews('health') }}>Health</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); loadNews('science') }}>Science</a>
                        </div>
                        <div className="f-col">
                            <h4>Company</h4>
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">Advertise</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="f-col">
                            <h4>Legal</h4>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                            <a href="#">Cookies</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container footer-bottom-inner">
                        <span>© 2026 Buletin. All rights reserved.</span>
                        <span>Powered by <a href="https://newsapi.org" target="_blank">NewsAPI</a></span>
                    </div>
                </div>
            </footer>

            {activeArticle && (
                <ArticleModal
                    article={activeArticle}
                    onClose={() => setActiveArticle(null)}
                />
            )}
        </>
    );
}
