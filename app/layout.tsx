import type { Metadata } from 'next'
import './globals.css'

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
      </head>
      <body>{children}</body>
    </html>
  )
}
