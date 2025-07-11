import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
})

export const metadata = {
  title: 'Delícias da Nine',
  description: 'Bolos e doces artesanais com amor 🍰',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
