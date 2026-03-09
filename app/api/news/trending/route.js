import { NextResponse } from 'next/server';
import { MOCK_ARTICLES, enrichArticles, fetchFromNewsAPI } from '../../../lib/news';

export async function GET(request) {
    const API_KEY = process.env.NEWS_API_KEY;

    if (!API_KEY || API_KEY === 'your_newsapi_key_here') {
        const trending = MOCK_ARTICLES.slice(0, 6);
        const result = { articles: enrichArticles(trending), totalResults: trending.length, mode: 'demo' };
        return NextResponse.json(result);
    }

    try {
        const data = await fetchFromNewsAPI('/top-headlines', {
            country: 'us',
            pageSize: 6
        });
        const result = { articles: enrichArticles(data.articles || []), totalResults: data.totalResults || 0 };
        return NextResponse.json(result);
    } catch (err) {
        const trending = MOCK_ARTICLES.slice(0, 6);
        return NextResponse.json({ articles: enrichArticles(trending), totalResults: trending.length, mode: 'demo' });
    }
}
