'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import Footer from '@/components/Footer'

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // WhatsApp ile mesaj gönder
    const message = `Merhaba, ben ${formData.name}.\n\nE-posta: ${formData.email}\nTelefon: ${formData.phone}\n\nMesajım: ${formData.message}`
    const whatsappUrl = `https://wa.me/905551234567?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-olive-deep mb-4">
              İletişim
            </h1>
            <p className="text-lg text-olive-deep/80 max-w-2xl mx-auto">
              Sorularınız, önerileriniz veya sipariş talepleriniz için bizimle iletişime geçin. 
              Size en kısa sürede dönüş yapacağız.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h2 className="font-serif text-3xl font-bold text-olive-deep mb-6">
                Mesaj Gönderin
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-olive-deep font-semibold mb-2">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-sage/30 focus:border-gold focus:outline-none transition-colors"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                <div>
                  <label className="block text-olive-deep font-semibold mb-2">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-sage/30 focus:border-gold focus:outline-none transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label className="block text-olive-deep font-semibold mb-2">
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-sage/30 focus:border-gold focus:outline-none transition-colors"
                    placeholder="05XX XXX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-olive-deep font-semibold mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-sage/30 focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <div className="flex gap-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-olive-deep text-cream py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-olive-medium transition-colors shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    WhatsApp ile Gönder
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Info Cards */}
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-olive-deep mb-2">Adres</h3>
                    <p className="text-olive-deep/70">
                      Gemlik, Bursa<br />
                      Marmara Bölgesi, Türkiye
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-olive-deep mb-2">Telefon</h3>
                    <a href="tel:+905551234567" className="text-olive-deep/70 hover:text-gold transition-colors">
                      +90 555 123 45 67
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-olive-deep mb-2">E-posta</h3>
                    <a href="mailto:info@kayaaltarim.com" className="text-olive-deep/70 hover:text-gold transition-colors">
                      info@kayaaltarim.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-olive-deep mb-2">Çalışma Saatleri</h3>
                    <p className="text-olive-deep/70">
                      Pazartesi - Cumartesi: 09:00 - 18:00<br />
                      Pazar: 10:00 - 16:00
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <motion.a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-[#25D366] rounded-3xl p-6 shadow-lg text-white"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp ile İletişim</h3>
                    <p className="text-sm text-white/90">
                      Hızlı destek için bize WhatsApp'tan ulaşın
                    </p>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 bg-white rounded-3xl p-4 shadow-lg overflow-hidden"
          >
            <div className="aspect-[21/9] bg-sage/10 rounded-2xl flex items-center justify-center">
              <p className="text-olive-deep/50">Harita buraya gelecek</p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
