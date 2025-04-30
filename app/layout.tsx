import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/custom-cursor'


export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Subhash Adhikari',
  generator: 'Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        {/* cursor override */}
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
  )
}
