import type { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Personal Resume',
  description: 'Professional resume and portfolio website',
}

export default function RootLayout({
    children,
  }: {
    children: ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }