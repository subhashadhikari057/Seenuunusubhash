import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/custom-cursor';

export const metadata: Metadata = {
  title: 'Subhash Adhikari | Full Stack Developer',
  description: 'Portfolio of Subhash Adhikari – a full stack developer specializing in React, Next.js, and modern web technologies.',
  generator: 'Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Subhash Adhikari | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Subhash Adhikari – a full stack developer specializing in React, Next.js, and modern web technologies." />
        <meta name="keywords" content="Subhash Adhikari, Full Stack Developer, Next.js, React Developer, Portfolio, Web Developer Nepal" />
        <meta name="author" content="Subhash Adhikari" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Subhash Adhikari | Full Stack Developer" />
        <meta property="og:description" content="Explore the portfolio of Subhash Adhikari, featuring top projects in web development." />
        <meta property="og:image" content="/favicon/android-chrome-512x512.png" />
        <meta property="og:url" content="https://seenusubhash.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicon and Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Subhash Adhikari",
              "url": "https://seenusubhash.vercel.app/",
              "jobTitle": "Full Stack Developer",
              "sameAs": [
                "https://github.com/subhashadhikari057",
                "https://linkedin.com/in/your-profile"
              ]
            }),
          }}
        />

        {/* Custom Cursor Override */}
        <style>{`
          html, body, * {
            cursor: none !important;
          }
        `}</style>
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
