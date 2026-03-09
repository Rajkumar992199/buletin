"use client";

import { useState, useEffect } from 'react';

export default function Header({ dark, toggleTheme, onSearch, category, onCategorySelect, demoMode }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [dateStr, setDateStr] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setDateStr(new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }));
    }, []);

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
        const timeoutId = setTimeout(() => {
            onSearch(e.target.value);
        }, 500);
        return () => clearTimeout(timeoutId);
    };

    const navLinks = [
        { cat: 'general', label: 'Home' },
        { cat: 'technology', label: 'Tech' },
        { cat: 'business', label: 'Business' },
        { cat: 'sports', label: 'Sports' },
        { cat: 'health', label: 'Health' },
        { cat: 'science', label: 'Science' },
        { cat: 'entertainment', label: 'Culture' }
    ];

    return (
        <>
            <div className="topbar">
                <div className="container topbar-inner">
                    <div className="topbar-left">
                        <span id="topbarDate">{dateStr}</span>
                        <span className="topbar-divider">|</span>
                        <span className="topbar-weather"><i className="fa fa-sun"></i> 28°C, Sunny</span>
                    </div>
                    <div className="topbar-right">
                        <a href="#" className="topbar-link">Subscribe</a>
                        <a href="#" className="topbar-link">Sign In</a>
                        {demoMode && <span className="demo-pill" style={{ display: 'inline-flex' }}><i className="fa fa-wifi"></i> Demo</span>}
                    </div>
                </div>
            </div>

            <header className="header">
                <div className="container header-inner">
                    <a href="#" className="logo" onClick={(e) => { e.preventDefault(); onCategorySelect('general'); }}>
                        <div className="logo-mark">
                            <span className="logo-name">BULETIN</span>
                            <div className="logo-dot"></div>
                        </div>
                    </a>

                    <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                        {navLinks.map(({ cat, label }) => (
                            <a
                                key={cat}
                                href="#"
                                className={`nav-link ${category === cat ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onCategorySelect(cat);
                                    setMobileMenuOpen(false);
                                }}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    <div className="header-actions">
                        <button className="icon-btn" onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Search">
                            <i className="fa fa-search"></i>
                        </button>
                        <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
                            <i className={`fa fa-${dark ? 'moon' : 'sun'}`}></i>
                        </button>
                        <button className="subscribe-btn">Subscribe <i className="fa fa-arrow-right"></i></button>
                        <button className="icon-btn hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
                            <i className="fa fa-bars"></i>
                        </button>
                    </div>
                </div>

                <div className={`header-search ${isSearchOpen ? 'open' : ''}`}>
                    <div className="container">
                        <div className="search-wrap">
                            <i className="fa fa-search"></i>
                            <input
                                type="text"
                                placeholder="Search stories, topics, sources…"
                                value={searchValue}
                                onChange={handleSearchChange}
                                autoComplete="off"
                            />
                            {searchValue && (
                                <button onClick={() => { setSearchValue(''); onSearch(''); }}><i className="fa fa-times"></i></button>
                            )}
                            <button className="search-close" onClick={() => setIsSearchOpen(false)}>
                                <i className="fa fa-times-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
