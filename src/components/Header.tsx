'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

const menuItems = [
  {
    title: 'Zeytin',
    items: [
      { name: 'Sofralık', href: '/kategori/sofralik' },
      { name: 'Kızartmalık', href: '/kategori/kizartmalik' },
      { name: 'Yeşil Çizik', href: '/kategori/yesil-cizik' },
    ],
  },
  {
    title: 'Zeytinyağı',
    items: [
      { name: 'Soğuk Sıkım', href: '/kategori/soguk-sikim' },
      { name: 'Erken Hasat', href: '/kategori/erken-hasat' },
    ],
  },
  {
    title: 'Bal Çeşitleri',
    items: [
      { name: 'Karakovan Balı', href: '/kategori/karakovan-bali' },
      { name: 'Çiçek Balı', href: '/kategori/cicek-bali' },
      { name: 'Çam Balı', href: '/kategori/cam-bali' },
      { name: 'Kestane Balı', href: '/kategori/kestane-bali' },
    ],
  },
]

export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const { totalItems, openCart } = useCart()

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

            {menuItems.map((menu) => (
              <div
                key={menu.title}
                className="relative"
                onMouseEnter={() => setHoveredMenu(menu.title)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button className="flex items-center gap-1 text-olive-deep hover:text-gold transition-colors font-semibold">
                  {menu.title}
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {hoveredMenu === menu.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 glass rounded-2xl shadow-xl overflow-hidden"
                    >
                      <div className="py-2">
                        {menu.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-6 py-3 text-olive-deep hover:bg-gold/20 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

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
    </header>
  )
}
