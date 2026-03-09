import { NextResponse } from 'next/server';
import { MOCK_ARTICLES, enrichArticles, fetchFromNewsAPI } from '../../../lib/news';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');
    const page = searchParams.get('page') || 1;

    if (!q || q.trim().length < 2) {
        return NextResponse.json({ error: 'Search query must be at least 2 characters' }, { status: 400 });
    }

    const API_KEY = process.env.NEWS_API_KEY;

    if (!API_KEY || API_KEY === 'your_newsapi_key_here') {
        const filtered = MOCK_ARTICLES.filter(a =>
            a.title.toLowerCase().includes(q.toLowerCase()) ||
            (a.description || '').toLowerCase().includes(q.toLowerCase())
        );
        return NextResponse.json({ articles: enrichArticles(filtered), totalResults: filtered.length, mode: 'demo' });
    }

    try {
        const data = await fetchFromNewsAPI('/everything', {
            q: q.trim(),
            sortBy: 'publishedAt',
            language: 'en',
            pageSize: 20,
            page
        });
        const result = { articles: enrichArticles(data.articles || []), totalResults: data.totalResults || 0 };
        return NextResponse.json(result);
    } catch (err) {
        const filtered = MOCK_ARTICLES.filter(a =>
            a.title.toLowerCase().includes(q.toLowerCase()) ||
            (a.description || '').toLowerCase().includes(q.toLowerCase())
        );
        return NextResponse.json({ articles: enrichArticles(filtered), totalResults: filtered.length, mode: 'demo' });
    }
}
