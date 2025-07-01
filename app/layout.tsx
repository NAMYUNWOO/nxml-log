import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NXML LOG',
  description: '동호회 정기모임 활동 기록',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}