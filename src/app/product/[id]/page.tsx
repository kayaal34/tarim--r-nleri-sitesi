'use client'

import ProductDetail from '@/components/ProductDetail'
import Footer from '@/components/Footer'

// Mock product data - in production, fetch from API/CMS
const productData = {
  name: 'Erken Hasat Soğuk Sıkım Zeytinyağı',
  category: 'Zeytinyağı',
  image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2000',
  price: '₺450',
  rating: 5,
  reviewCount: 124,
  description: 'Akdeniz\'in bereketli topraklarında yetişen zeytinlerden özenle üretilen, düşük asitli ve yoğun meyvemsi aromalara sahip premium zeytinyağı. Her damla, doğanın saf mucizesini sofranıza taşır.',
  story: 'Marmaranın\'ın bereketli topraklarında, yılların deneyimiyle yetişen zeytin ağaçlarımızdan el ile toplanan zeytinler, 24 saat içinde soğuk sıkım yöntemiyle işlenir. Bu süreç zeytinin tüm aroma ve besin değerlerini koruyarak size en saf haliyle ulaşmasını sağlar. Her damla, toprağın hikayesini ve güneşin bereketini taşır. Dedelerimizden bugüne, geleneksel yöntemlerle modern teknolojinin birleşimiyle üretilen zeytinyağımız, Mediterranean kültürünün lüksünü sofranıza getirir.',
  acidRatio: '%0.3',
  origin: 'Balıkkesir, Türkiye',
  harvestDate: 'Ekim 2025',
  variants: [
    { size: '500ml Cam', price: '₺450' },
    { size: '1 Litre Teneke', price: '₺850' },
    { size: '5 Litre Teneke', price: '₺3.800' },
  ],
  features: [
    'Asitlik oranı %0.3 - Extra Virgin kalitesi',
    'İlk hasat, el ile toplanmış zeytinler',
    '24 saat içinde soğuk sıkım',
    'Katkısız, 100% doğal',
    'Karanlık cam şişede, ışıktan korunmuş',
    'Organik sertifikalı',
    'Antioksidan bakımından zengin',
    'Akdeniz diyetinin vazgeçilmezi'
  ]
}

export default function ProductPage() {
  return (
    <>
      <ProductDetail product={productData} />
      <Footer />
    </>
  )
}
