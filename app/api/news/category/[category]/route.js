import { NextResponse } from 'next/server';
import { MOCK_ARTICLES, enrichArticles, fetchFromNewsAPI, getMockByCategory } from '../../../../lib/news';

export async function GET(request, { params }) {
    const category = params.category;
    const validCategories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

    if (!validCategories.includes(category)) {
        return NextResponse.json({ error: 'Invalid category', validCategories }, { status: 400 });
    }

    const API_KEY = process.env.NEWS_API_KEY;

    if (!API_KEY || API_KEY === 'your_newsapi_key_here') {
        const articles = getMockByCategory(category);
        const result = { articles: enrichArticles(articles), totalResults: articles.length, mode: 'demo' };
        return NextResponse.json(result);
    }

    try {
        const data = await fetchFromNewsAPI('/top-headlines', {
            country: 'us',
            category,
            pageSize: 20
        });
        const result = { articles: enrichArticles(data.articles || []), totalResults: data.totalResults || 0 };
        return NextResponse.json(result);
    } catch (err) {
        const articles = getMockByCategory(category);
        return NextResponse.json({ articles: enrichArticles(articles), totalResults: articles.length, mode: 'demo' });
    }
}
