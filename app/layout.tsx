import './globals.css'
import AuthContext from '@/context/AuthContext'
{/*import Providers from './components/Provider'*/}
import ToasterContext from '@/context/ToasterContext'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'E-Commerce',
  description: '...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <AuthContext>
      <ToasterContext />
          {children}
          </AuthContext>
        </body>
    </html>
  )
}
