'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-cream shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-sage/20 flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-olive-deep">
                Sepetim ({totalItems})
              </h2>
              <motion.button
                onClick={closeCart}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-olive-deep/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-olive-deep" />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 rounded-full bg-olive-deep/10 flex items-center justify-center mb-4">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Trash2 className="w-12 h-12 text-olive-deep/30" />
                    </motion.div>
                  </div>
                  <p className="text-sage-dark font-display">
                    Sepetiniz boş
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.variant || ''}`}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="bg-white rounded-2xl p-4 shadow-md"
                    >
                      <div className="flex gap-4">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-olive-deep mb-1">
                            {item.name}
                          </h3>
                          {item.variant && (
                            <p className="text-xs text-sage-dark mb-2">
                              {item.variant}
                            </p>
                          )}
                          <p className="font-serif text-lg font-bold text-gold">
                            ₺{item.price}
                          </p>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-olive-deep/10 flex items-center justify-center hover:bg-olive-deep/20 transition-colors"
                          >
                            <Minus className="w-4 h-4 text-olive-deep" />
                          </motion.button>
                          <span className="w-8 text-center font-semibold text-olive-deep">
                            {item.quantity}
                          </span>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-olive-deep/10 flex items-center justify-center hover:bg-olive-deep/20 transition-colors"
                          >
                            <Plus className="w-4 h-4 text-olive-deep" />
                          </motion.button>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <Trash2 className="w-5 h-5 text-red-500" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-sage/20 space-y-4">
                {/* Total */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg text-sage-dark">
                    Toplam:
                  </span>
                  <span className="font-serif text-3xl font-bold text-olive-deep">
                    ₺{totalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Checkout Buttons */}
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-olive-deep py-4 rounded-full text-cream font-bold shadow-lg hover:bg-olive-medium transition-all"
                  >
                    Sipariş Tamamla
                  </motion.button>
                  <motion.a
                    href={`https://wa.me/905551234567?text=Merhaba, sepetimde ${totalItems} ürün var. Toplam: ₺${totalPrice.toFixed(2)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#25D366] py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-[#20BD5A] transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp ile Sipariş
                  </motion.a>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
