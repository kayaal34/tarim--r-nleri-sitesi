import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import { FavoritesProvider } from '@/context/FavoritesContext'
import Header from '@/components/Header'
import CartDrawer from '@/components/CartDrawer'

export const metadata: Metadata = {
  title: 'KAYAAL Tarım - Doğanın Saf Mucizesi',
  description: 'Topraktan sofranıza, premium zeytinyağı ve organik ürünler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="smooth-scroll">
      <body>
        <FavoritesProvider>
          <CartProvider>
            <Header />
            <CartDrawer />
            {children}
          </CartProvider>
        </FavoritesProvider>
      </body>
    </html>
  )
}
