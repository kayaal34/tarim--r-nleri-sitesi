'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { useFavorites } from '@/context/FavoritesContext'

export default function Header() {
  const { totalItems, openCart } = useCart()
  const { totalFavorites } = useFavorites()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-sage/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3"
            >
              <Image
                src="/images/kayaal-logo.svg"
                alt="KAYAAL Tarım Logo"
                width={240}
                height={80}
                className="h-14 w-auto"
                priority
              />
              <div className="flex flex-col">
                <h1 className="font-serif text-2xl md:text-3xl font-bold text-olive-deep leading-none tracking-tight">
                  KAYAAL
                </h1>
                <span className="text-[10px] tracking-[0.3em] text-gold font-semibold uppercase mt-0.5">
                  TARIM
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-olive-deep hover:text-gold transition-colors font-semibold"
            >
              Ana Sayfa
            </Link>

            <Link
              href="/zeytinler"
              className="text-olive-deep hover:text-gold transition-colors font-semibold"
            >
              Zeytinler
            </Link>

            <Link
              href="/yaglar"
              className="text-olive-deep hover:text-gold transition-colors font-semibold"
            >
              Yağlar
            </Link>

            <Link
              href="/ballar"
              className="text-olive-deep hover:text-gold transition-colors font-semibold"
            >
              Ballar
            </Link>

            <Link
              href="/hakkimizda"
              className="text-olive-deep hover:text-gold transition-colors font-semibold"
            >
              Hakkımızda
            </Link>

            <Link
              href="/iletisim"
              className="text-olive-deep hover:text-gold transition-colors font-semibold"
            >
              İletişim
            </Link>
          </nav>

          {/* Icons Group */}
          <div className="flex items-center gap-2">
            {/* Favorites Icon */}
            <Link href="/favoriler">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-3 rounded-full hover:bg-olive-deep/10 transition-colors cursor-pointer"
              >
                <Heart className="w-6 h-6 text-olive-deep" />
                {totalFavorites > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  >
                    {totalFavorites}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* Cart Icon */}
            <motion.button
              onClick={openCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-3 rounded-full hover:bg-olive-deep/10 transition-colors"
            >
              <ShoppingBag className="w-6 h-6 text-olive-deep" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-gold rounded-full flex items-center justify-center text-xs font-bold text-olive-deep"
                >
                  {totalItems}
                </motion.span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  )
}
