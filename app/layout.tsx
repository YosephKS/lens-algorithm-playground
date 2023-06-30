import './globals.css'
import { Inter } from 'next/font/google'
import { LeftNav } from './left-nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <nav
          className="
          flex border-b pl-6 flex items-center
          "
        >
          <img src='/logo.svg' className="w-[50px]" />
          <p className="">Lens Algorithm Playground</p>
        </nav>
        <div className="flex">
          <LeftNav />
          <div className='w-full bg-slate-100 min-h-[calc(100vh-57px)] flex flex-col p-14'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
