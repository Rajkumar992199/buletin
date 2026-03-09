module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/lib/news.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_ARTICLES",
    ()=>MOCK_ARTICLES,
    "enrichArticles",
    ()=>enrichArticles,
    "fetchFromNewsAPI",
    ()=>fetchFromNewsAPI,
    "getMockByCategory",
    ()=>getMockByCategory
]);
const MOCK_ARTICLES = [
    {
        source: {
            name: 'TechCrunch'
        },
        author: 'Sarah Chen',
        title: 'OpenAI Announces GPT-5 with Unprecedented Reasoning Capabilities',
        description: 'OpenAI has officially unveiled GPT-5, featuring dramatically improved reasoning abilities and a new multimodal architecture that can process text, images, audio, and video simultaneously.',
        url: '#',
        urlToImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
        publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
        category: 'technology',
        content: 'OpenAI has officially unveiled GPT-5, featuring dramatically improved reasoning abilities and a new multimodal architecture that can process text, images, audio, and video simultaneously. The model shows significant improvements in mathematical reasoning and scientific problem-solving.'
    },
    {
        source: {
            name: 'Reuters'
        },
        author: 'James Mitchell',
        title: 'Global Markets Rally as Inflation Data Shows Cooling Trend',
        description: 'Stock markets worldwide surged Monday after new inflation data from major economies suggested that central banks may ease interest rate hikes sooner than expected.',
        url: '#',
        urlToImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
        publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        category: 'business',
        content: 'Stock markets worldwide surged Monday after new inflation data from major economies suggested that central banks may ease interest rate hikes sooner than expected. The S&P 500 climbed 1.8%, while European markets saw gains of up to 2.3%.'
    },
    {
        source: {
            name: 'BBC Sport'
        },
        author: 'Tom Williams',
        title: "Champions League: Real Madrid's Stunning Comeback Stuns Bayern Munich",
        description: "Real Madrid produced one of the most dramatic comebacks in Champions League history, scoring three goals in the final 15 minutes to defeat Bayern Munich 4-3 on aggregate.",
        url: '#',
        urlToImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
        publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
        category: 'sports',
        content: "Real Madrid produced one of the most dramatic comebacks in Champions League history, scoring three goals in the final 15 minutes to defeat Bayern Munich 4-3 on aggregate. The match will go down as one of the greatest in European football history."
    },
    {
        source: {
            name: 'NASA'
        },
        author: 'Dr. Emily Rodriguez',
        title: 'Webb Telescope Discovers Evidence of Water on Potentially Habitable Exoplanet',
        description: "NASA's James Webb Space Telescope has detected strong spectroscopic signatures of water vapor in the atmosphere of exoplanet K2-18b, a planet in its star's habitable zone.",
        url: '#',
        urlToImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
        publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        category: 'science',
        content: "NASA's James Webb Space Telescope has detected strong spectroscopic signatures of water vapor in the atmosphere of exoplanet K2-18b, a 'Hycean' world that could potentially harbor microbial life. This represents one of the most significant discoveries in the search for extraterrestrial life."
    },
    {
        source: {
            name: 'Bloomberg'
        },
        author: 'Lisa Park',
        title: 'Apple Unveils Vision Pro 2 with Revolutionary Neural Interface Technology',
        description: 'Apple has announced the second generation of its Vision Pro headset, featuring a breakthrough neural interface that allows users to control apps with thought patterns.',
        url: '#',
        urlToImage: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=800&q=80',
        publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        category: 'technology',
        content: 'Apple has announced the second generation of its Vision Pro headset, featuring a breakthrough neural interface that allows users to control applications using EEG-based brain-computer interface technology. The device also includes improvements to display resolution and battery life.'
    },
    {
        source: {
            name: 'WHO'
        },
        author: 'Dr. Amara Osei',
        title: 'New mRNA Vaccine Shows 94% Efficacy Against Multiple Cancer Types in Trials',
        description: 'A groundbreaking mRNA-based cancer vaccine has demonstrated 94% efficacy across multiple cancer types in Phase 3 clinical trials, potentially revolutionizing cancer treatment.',
        url: '#',
        urlToImage: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80',
        publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        category: 'health',
        content: 'A groundbreaking mRNA-based cancer vaccine developed by BioNTech has demonstrated 94% efficacy across multiple cancer types in Phase 3 clinical trials. The vaccine works by training the immune system to recognize and destroy cancer cells using the same technology behind COVID-19 vaccines.'
    },
    {
        source: {
            name: 'Variety'
        },
        author: 'Rachel Kim',
        title: 'Netflix AI-Generated Series Breaks Streaming Records Worldwide',
        description: 'A Netflix series created with significant AI assistance in scriptwriting and visual effects has broken all-time streaming records, sparking debate about the future of entertainment.',
        url: '#',
        urlToImage: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80',
        publishedAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
        category: 'entertainment',
        content: 'A Netflix series created with significant AI assistance in scriptwriting, scene generation, and visual effects has broken all-time streaming records, amassing 200 million views in its first week. The production sparked intense debate about AI\'s role in creative industries.'
    },
    {
        source: {
            name: 'Guardian'
        },
        author: 'Mark Stevens',
        title: 'Electric Vehicle Sales Surpass Petrol Cars for First Time in Europe',
        description: 'Electric vehicles have outsold traditional petrol and diesel cars in Europe for the first time ever, marking a historic milestone in the transition to clean transportation.',
        url: '#',
        urlToImage: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
        publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        category: 'science',
        content: 'Electric vehicles have outsold traditional petrol and diesel cars across Europe for the first time in history, as government subsidies, improved charging infrastructure, and falling battery costs drove consumer adoption to record levels.'
    },
    {
        source: {
            name: 'Forbes'
        },
        author: 'David Chen',
        title: 'Crypto Market Surges as Bitcoin Hits New All-Time High of $120,000',
        description: 'Bitcoin has reached a new all-time high, breaking the $120,000 barrier as institutional adoption accelerates and regulatory clarity improves across major markets.',
        url: '#',
        urlToImage: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80',
        publishedAt: new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString(),
        category: 'business',
        content: 'Bitcoin has reached a new all-time high of $120,000, driven by unprecedented institutional investment, spot ETF inflows, and a shift in regulatory stance from major economies. Ethereum and other altcoins also saw significant gains.'
    },
    {
        source: {
            name: 'Nature'
        },
        author: 'Prof. Alan Wright',
        title: 'Scientists Achieve Room-Temperature Superconductivity Breakthrough',
        description: 'Researchers have announced a verified room-temperature superconductor, a discovery that could revolutionize energy transmission, computing, and transportation.',
        url: '#',
        urlToImage: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&q=80',
        publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
        category: 'science',
        content: 'A team of researchers at MIT has announced the first independently verified room-temperature superconductor, using a novel hydrogen-rich compound under moderate pressure. The breakthrough could enable lossless power transmission, revolutionize MRI technology, and unlock a new generation of computing.'
    },
    {
        source: {
            name: 'ESPN'
        },
        author: 'Mike Johnson',
        title: 'IOC Confirms 2032 Olympics Will Feature Esports as Official Medal Sport',
        description: 'The International Olympic Committee has officially confirmed that competitive video gaming will be included as a full medal sport at the 2032 Brisbane Olympic Games.',
        url: '#',
        urlToImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
        publishedAt: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString(),
        category: 'sports',
        content: 'The International Olympic Committee has officially confirmed that competitive esports will be included as a full medal sport at the 2032 Brisbane Olympic Games, with titles including League of Legends, Dota 2, and FIFA selected for competition.'
    },
    {
        source: {
            name: 'Healthline'
        },
        author: 'Dr. Sophie Turner',
        title: 'Breakthrough Gene Therapy Reverses Alzheimer\'s Symptoms in Human Trial',
        description: 'A landmark gene therapy trial has successfully reversed cognitive decline in early-stage Alzheimer\'s patients, offering new hope for millions worldwide.',
        url: '#',
        urlToImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
        publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        category: 'health',
        content: 'A landmark gene therapy trial conducted by Stanford University has successfully reversed cognitive decline in 78% of early-stage Alzheimer\'s patients over a 12-month period. The therapy uses CRISPR-based gene editing to correct the APOE4 variant strongly associated with the disease.'
    }
];
function getMockByCategory(category) {
    if (!category || category === 'general') return MOCK_ARTICLES;
    return MOCK_ARTICLES.filter((a)=>a.category === category);
}
function enrichArticles(articles) {
    return articles.map((article)=>({
            ...article,
            readingTime: Math.max(1, Math.ceil((article.content || article.description || '').split(' ').length / 200))
        }));
}
async function fetchFromNewsAPI(endpoint, params = {}) {
    const API_KEY = process.env.NEWS_API_KEY;
    const url = new URL(`https://newsapi.org/v2${endpoint}`);
    Object.keys(params).forEach((key)=>url.searchParams.append(key, params[key]));
    if (API_KEY && API_KEY !== 'your_newsapi_key_here') {
        url.searchParams.append('apiKey', API_KEY);
    }
    const res = await fetch(url.toString(), {
        next: {
            revalidate: 300
        } // Cache for 5 minutes
    });
    if (!res.ok) {
        throw new Error(`NewsAPI Error: ${res.status}`);
    }
    return res.json();
}
}),
"[project]/app/api/news/trending/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$news$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/news.js [app-route] (ecmascript)");
;
;
async function GET(request) {
    const API_KEY = process.env.NEWS_API_KEY;
    if (!API_KEY || API_KEY === 'your_newsapi_key_here') {
        const trending = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$news$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MOCK_ARTICLES"].slice(0, 6);
        const result = {
            articles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$news$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enrichArticles"])(trending),
            totalResults: trending.length,
            mode: 'demo'
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
    }
    try {
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$news$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchFromNewsAPI"])('/top-headlines', {
            country: 'us',
            pageSize: 6
        });
        const result = {
            articles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$news$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enrichArticles"])(data.articles || []),
            totalResults: data.totalResults || 0
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
    } catch (err) {
        const trending = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$news$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MOCK_ARTICLES"].slice(0, 6);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            articles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$news$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enrichArticles"])(trending),
            totalResults: trending.length,
            mode: 'demo'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__69d89f81._.js.map