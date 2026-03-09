import './globals.css';

export const metadata = {
    title: 'Buletin — News That Matters',
    description: 'Buletin — Premium news aggregator. Latest breaking news, technology, sports, business and more from trusted sources worldwide.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="dark">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&display=swap" rel="stylesheet" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
