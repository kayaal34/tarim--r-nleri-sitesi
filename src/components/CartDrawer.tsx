'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag, Sparkles } from 'lucide-react'
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
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-gradient-to-br from-cream via-cream to-sage/10 shadow-2xl z-50 flex flex-col"
          >
            {/* Header with Gradient */}
            <div className="relative p-6 border-b border-sage/20">
              <div className="absolute inset-0 bg-gradient-to-r from-olive-deep/5 to-gold/5" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-olive-deep flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-cream" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-olive-deep">
                      Sepetim
                    </h2>
                    <p className="text-sm text-sage-dark">
                      {totalItems} ürün
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={closeCart}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 hover:bg-olive-deep/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-olive-deep" />
                </motion.button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="relative mb-6"
                  >
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-olive-deep/10 to-gold/10 flex items-center justify-center">
                      <ShoppingBag className="w-16 h-16 text-olive-deep/30" />
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      className="absolute -top-2 -right-2"
                    >
                      <Sparkles className="w-8 h-8 text-gold/50" />
                    </motion.div>
                  </motion.div>
                  <h3 className="font-serif text-2xl font-bold text-olive-deep mb-2">
                    Sepetiniz Boş
                  </h3>
                  <p className="text-sage-dark font-display">
                    Ürün eklemek için keşfetmeye başlayın
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <motion.div
                      key={`${item.id}-${item.variant || ''}`}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ delay: index * 0.05 }}
                      className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gold/20"
                    >
                      <div className="flex gap-4">
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-sage/10">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-olive-deep mb-1 line-clamp-2">
                            {item.name}
                          </h3>
                          {item.variant && (
                            <span className="inline-block text-xs text-sage-dark bg-sage/20 px-2 py-1 rounded-full mb-2">
                              {item.variant}
                            </span>
                          )}
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-xl font-bold bg-gradient-to-r from-gold to-olive-deep bg-clip-text text-transparent">
                              ₺{item.price}
                            </span>
                            <span className="text-xs text-sage-dark">
                              × {item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-sage/10">
                        <div className="flex items-center gap-2 bg-olive-deep/5 rounded-full px-2 py-1">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gold/20 transition-colors"
                          >
                            <Minus className="w-4 h-4 text-olive-deep" />
                          </motion.button>
                          <span className="w-8 text-center font-bold text-olive-deep">
                            {item.quantity}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-gold shadow-sm flex items-center justify-center hover:bg-gold/80 transition-colors"
                          >
                            <Plus className="w-4 h-4 text-olive-deep" />
                          </motion.button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif font-bold text-olive-deep">
                            ₺{(item.price * item.quantity).toFixed(2)}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 hover:bg-red-50 rounded-full transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="relative p-6 border-t border-sage/20 bg-white/50 backdrop-blur-sm"
              >
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent" />
                
                <div className="relative space-y-4">
                  {/* Shipping Info */}
                  <div className="flex items-center gap-2 text-sm text-sage-dark bg-green-50 p-3 rounded-lg">
                    <Sparkles className="w-4 h-4 text-green-600" />
                    <span>150₺ üzeri <strong>ücretsiz kargo</strong></span>
                  </div>

                  {/* Total */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-olive-deep/5 to-gold/5 rounded-xl">
                    <span className="font-display text-lg text-sage-dark">
                      Toplam:
                    </span>
                    <span className="font-serif text-3xl font-bold bg-gradient-to-r from-olive-deep to-gold bg-clip-text text-transparent">
                      ₺{totalPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Checkout Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-olive-deep to-olive-medium py-4 rounded-xl text-cream font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Sipariş Tamamla
                    </motion.button>
                    <motion.a
                      href={`https://wa.me/905551234567?text=Merhaba, sepetimde ${totalItems} ürün var. Toplam: ₺${totalPrice.toFixed(2)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#25D366] py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:bg-[#20BD5A] transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp ile Sipariş
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
