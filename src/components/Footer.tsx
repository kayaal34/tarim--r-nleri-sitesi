'use client'

import { motion } from 'framer-motion'
import { Instagram, Youtube, Facebook, Mail, MapPin, Phone, Send } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  corporate: [
    { name: 'Hakkımızda', href: '#' },
    { name: 'Sertifikalarımız', href: '#' },
    { name: 'Sürdürülebilirlik', href: '#' },
    { name: 'İletişim', href: '#' },
  ],
  shopping: [
    { name: 'Mesafeli Satış Sözleşmesi', href: '#' },
    { name: 'İptal & İade', href: '#' },
    { name: 'Gizlilik Politikası', href: '#' },
    { name: 'Kargo Takip', href: '#' },
  ],
  products: [
    { name: 'Erken Hasat Zeytinyağı', href: '#' },
    { name: 'Taş Baskı Zeytinyağı', href: '#' },
    { name: 'Yeşil Zeytin', href: '#' },
    { name: 'Doğal Sabunlar', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-[#1a2e12] text-sage-light">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold mb-4">
              KAYAAL
            </h3>
            <p className="text-sage text-sm md:text-base leading-relaxed mb-6">
              Gemlik'in bereketli topraklarından sofranıza, doğanın en saf hali. Geleneksel üretim yöntemleriyle hazırlanan zeytinyağı ve organik ürünler.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sage">Gemlik, Bursa</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sage">+90 555 123 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sage">info@kayaaltarim.com</span>
              </div>
            </div>
          </div>

          {/* Corporate Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-4">
              Kurumsal
            </h4>
            <ul className="space-y-2">
              {footerLinks.corporate.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sage text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shopping Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-4">
              Alışveriş
            </h4>
            <ul className="space-y-2">
              {footerLinks.shopping.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sage text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-4">
              Bülten
            </h4>
            <p className="text-sage text-sm mb-4">
              Yeni ürünler ve özel kampanyalardan haberdar olmak için e-posta bültenimize katılın.
            </p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="w-full px-4 py-3 bg-white/10 border border-sage/30 rounded-lg text-sm text-cream placeholder-sage/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-olive-deep font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                Gönder
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sage/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <p className="text-sage text-sm text-center md:text-left">
              © 2024 KAYAAL Tarım. Tüm hakları saklıdır.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold transition-all"
              >
                <Instagram className="w-5 h-5 text-cream" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold transition-all"
              >
                <Youtube className="w-5 h-5 text-cream" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold transition-all"
              >
                <Facebook className="w-5 h-5 text-cream" />
              </a>
            </div>

            {/* Payment Logos */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 bg-white rounded text-xs font-bold text-gray-700">
                VISA
              </div>
              <div className="px-3 py-1.5 bg-white rounded text-xs font-bold text-gray-700">
                MC
              </div>
              <div className="px-3 py-1.5 bg-white rounded text-xs font-bold text-gray-700">
                TROY
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/905551234567?text=Merhaba, ürünleriniz hakkında bilgi almak istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center hover:shadow-glow-lg transition-all"
      >
        <svg
          className="w-8 h-8 md:w-9 md:h-9 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>
    </footer>
  )
}
