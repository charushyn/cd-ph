import './globals.css';

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <head>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
            crossOrigin=""/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
            <link rel="manifest" href="/site.webmanifest"></link>
            <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
            integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
            crossOrigin=""></script>
            </head>
            <html lang="en">
                <body>{children}</body>
            </html>
        </>

    )
  }