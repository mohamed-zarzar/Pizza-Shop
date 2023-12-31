
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeComponent from '../../mui-theme/ThemeComponent'
import Navbar from '../../components/Navbar'
import ProviderComponent from '../../rtk/ProviderComponnt'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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
      <body className={inter.className}>
        <ProviderComponent>
          <ThemeComponent>
            <Navbar/>
            {children}
          </ThemeComponent>
        </ProviderComponent>
      </body>
    </html>
  )
}
