import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Lawal's Corner",
  description: "A quiet corner on the internet where ideas breathe and conversations happen without noise."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-white dark:bg-slate-900 text-black dark:text-white`}>
        {children}
      </body>
    </html>
  )
}
