import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Delícias da Nine',
  description: 'Bolos e doces artesanais com amor 🍰',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}