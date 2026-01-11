import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Happy 1 Month Anniversary - Sky & Kaning',
  description: 'A romantic anniversary celebration for Sky and Kaning',
  keywords: 'anniversary, love, romantic, Sky, Kaning',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#fce7f3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}

