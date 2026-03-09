export default function CategoryStrip({ activeCategory, onSelect }) {
    const categories = [
        { id: 'general', icon: 'fa-globe', label: 'All' },
        { id: 'technology', icon: 'fa-microchip', label: 'Technology' },
        { id: 'business', icon: 'fa-chart-line', label: 'Business' },
        { id: 'sports', icon: 'fa-trophy', label: 'Sports' },
        { id: 'health', icon: 'fa-heartbeat', label: 'Health' },
        { id: 'science', icon: 'fa-atom', label: 'Science' },
        { id: 'entertainment', icon: 'fa-film', label: 'Culture' }
    ];

    return (
        <div className="cat-strip">
            <div className="container cat-strip-inner">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        className={`cat-chip ${activeCategory === cat.id ? 'active' : ''}`}
                        onClick={() => onSelect(cat.id)}
                    >
                        <i className={`fa ${cat.icon}`}></i> {cat.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
