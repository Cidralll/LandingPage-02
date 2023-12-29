import type { Metadata } from 'next'
import '@nextcss/reset';

export const metadata: Metadata = {
  title: 'LC - VPN',
  description: 'Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
