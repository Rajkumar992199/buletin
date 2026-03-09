# Buletin — Next.js News Aggregator

A modern, dark-themed news aggregator website built with Next.js App Router that fetches live news from trusted sources using NewsAPI.

## Features
- 📰 **Live News** from 70+ trusted sources via NewsAPI
- ⚡ **Next.js App Router** with Server Components and Route Handlers
- 🔴 **Breaking News Ticker** — scrolling headlines
- 🦸 **Hero Section** — featured article + 2 secondary cards with large imagery
- 🗃️ **Category Tabs** — Technology, Business, Sports, Health, Science, Entertainment
- 🔍 **Real-time Search** with debounce
- 📱 **Fully Responsive** — mobile, tablet, desktop
- 🌙 **Dark Design System** — custom CSS architecture
- 🪟 **Article Modal** — preview read
- 📈 **Trending Sidebar** — top headlines
- ♾️ **Load More** pagination
- 🤖 **Demo Mode** — works without an API key using built-in mock articles

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your NewsAPI Key (Optional)
Get a free key at [newsapi.org/register](https://newsapi.org/register), then create or edit your `.env` file:
```env
NEWS_API_KEY=your_key_here
```
> Without a key, the app gracefully falls back to **Demo Mode** using realistic sample articles — allowing full functional testing and UI development without hitting API limits.

### 3. Start the Development Server
```bash
npm run dev
```

### 4. Build for Production
To build the application for production deployment:
```bash
npm run build
npm start
```

### 5. Open Browser
Visit: **http://localhost:3000**

## Project Structure
```text
├── app/
│   ├── api/               # Next.js Route Handlers (Backend)
│   │   ├── health/        # Server health check endpoint
│   │   └── news/          # NewsAPI integration endpoints
│   │       ├── category/  # Fetch by category
│   │       ├── search/    # Search queries
│   │       └── trending/  # Top/Trending stories
│   ├── components/        # React User Interface Components
│   │   ├── ArticleModal.jsx
│   │   ├── BreakingTicker.jsx
│   │   ├── CategoryStrip.jsx
│   │   ├── FeaturedBand.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── NewsGrid.jsx
│   │   └── Sidebar.jsx
│   ├── lib/               # Utilities & Data
│   │   └── news.js        # NewsAPI fetcher & Mock database
│   ├── globals.css        # Global stylesheet (Dark theme design system)
│   ├── layout.js          # Root HTML layout and metadata
│   └── page.js            # Main home page
├── public/                # Static assets (images, icons, etc.)
└── package.json           # Dependencies and scripts
```

## API Endpoints (Next.js Route Handlers)
| Endpoint | Description |
|---|---|
| `GET /api/news` | Top headlines |
| `GET /api/news/category?cat=...` | News by category |
| `GET /api/news/search?q=...` | Search articles |
| `GET /api/news/trending` | Trending stories (top items) |
| `GET /api/health` | Server health check |

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Frontend Engine**: [React](https://react.dev/)
- **Styling**: Vanilla CSS (`globals.css`) utilizing CSS variables for theme consistency
- **Routing & API**: Next.js conventions (`app/page.js`, `app/api/route.js`)
- **Data Fetching**: Next.js native `fetch` with caching configurations
- **News Provider**: [NewsAPI.org](https://newsapi.org)
