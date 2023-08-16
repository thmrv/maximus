import './globals.css'
import './general.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MAXIMUS',
  description: 'Новое драматическое шоу Саши Петрова',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body id="body" className={inter.className}>{children}</body>
    </html>
  )
}
