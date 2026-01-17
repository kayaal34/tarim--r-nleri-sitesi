// Tüm ürünlerin veritabanı

export interface Product {
  id: number
  name: string
  category: string
  image: string
  price: string
  description: string
  story?: string
  features: string[]
  rating?: number
  reviewCount?: number
  variants?: Array<{ size: string; price: string }>
  gallery?: string[]
  acidRatio?: string
  origin?: string
  harvestDate?: string
}

export const products: Product[] = [
  // BALLAR
  {
    id: 1,
    name: 'Karakovan Balı',
    category: 'Bal',
    image: '/images/karakovan.jpg',
    price: '₺850',
    description: 'Doğal karakovan balı, arıların orman ağaçlarının kovuklarında ürettikleri, işlenmemiş ve katkısız bal. Yoğun aroma ve yüksek besin değeri ile bilinir.',
    story: 'Gemlik\'in el değmemiş doğal ormanlarında, asırlık ağaç kovuklarında arıların özgürce ürettiği karakovan balı, geleneksel yöntemlerle hasat edilir. Her karakovanın kendine özgü lezzeti vardır.',
    features: [
      'Doğal karakovan balı',
      'Katkısız ve işlenmemiş',
      'Yoğun mineral ve enzim içeriği',
      'Orman çiçekleri nektarı',
      'Geleneksel hasat yöntemi'
    ],
    variants: [
      { size: '500gr', price: '₺850' },
      { size: '1000gr', price: '₺1.650' }
    ],
    gallery: ['/images/karakovan.jpg', '/images/karakovan.jpg', '/images/karakovan.jpg'],
    origin: 'Gemlik Ormanları',
    harvestDate: 'Eylül 2025',
    rating: 5,
    reviewCount: 8
  },
  {
    id: 2,
    name: 'Cam Balı',
    category: 'Bal',
    image: '/images/cam.jpg',
    price: '₺650',
    description: 'Çam ağaçlarından toplanan bal, koyu rengi ve keskin aroması ile tanınır. Antioksidan açısından zengin, nefes yolu rahatsızlıklarına iyi gelir.',
    story: 'Yaz aylarında Gemlik\'in yüksek kesimlerindeki çam ormanlarında üretilen çam balı, benzersiz biyolojik özelliklere sahiptir. Geleneksel arıcılık yöntemleriyle üretilir.',
    features: [
      'Çam ağaçları özü',
      'Antioksidan açısından zengin',
      'Koyu amber rengi',
      'Nefes yolu dostu',
      'Yüksek mineral içeriği'
    ],
    variants: [
      { size: '500gr', price: '₺650' },
      { size: '1000gr', price: '₺1.250' }
    ],
    gallery: ['/images/cam.jpg', '/images/cam.jpg', '/images/cam.jpg'],
    origin: 'Gemlik Çam Ormanları',
    harvestDate: 'Ağustos 2025',
    rating: 5,
    reviewCount: 6
  },
  {
    id: 3,
    name: 'Çiçek Balı',
    category: 'Bal',
    image: '/images/cıcek.jpg',
    price: '₺420',
    description: 'Yüzlerce farklı çiçek nektarından üretilen karma bal. Hafif ve yumuşak tatı, günlük kullanım için ideal. Her hasat mevsiminde farklı çiçek profili.',
    story: 'Gemlik\'in bereketli topraklarında açan yüzlerce çiçek türünden arıların topladığı nektarlarla üretilen çiçek balımız, her mevsim kendine özgü lezzet profili sunar.',
    features: [
      'Karma çiçek nektarı',
      'Hafif ve yumuşak tat',
      'Günlük kulanıma uygun',
      'Doğal enzimler',
      'Mevsimsel lezzet profili'
    ],
    variants: [
      { size: '500gr', price: '₺420' },
      { size: '1000gr', price: '₺800' }
    ],
    gallery: ['/images/cıcek.jpg', '/images/cıcek.jpg', '/images/cıcek.jpg'],
    origin: 'Gemlik Çayırları',
    harvestDate: 'Haziran 2025',
    rating: 5,
    reviewCount: 12
  },
  {
    id: 4,
    name: 'Kestane Balı',
    category: 'Bal',
    image: '/images/kestane.jpg',
    price: '₺550',
    description: 'Kestane ağaçlarının çiçeklerinden toplanan bal. Keskin, hafif acımsı tadı ve koyu rengi ile karakteristik. Antioksidan ve mineral açısından zengin.',
    story: 'Gemlik\'in yüksek kesimlerindeki kestane ormanlarında, arıların yaz ortasında topladıkları kestane nektarı, benzersiz karakter ve sağlık faydaları sunar.',
    features: [
      'Kestane çiçeği nektarı',
      'Keskin, karakteristik tat',
      'Yüksek antioksidan',
      'Koyu amber renk',
      'Demir ve mineral zenginliği'
    ],
    variants: [
      { size: '500gr', price: '₺550' },
      { size: '1000gr', price: '₺1.050' }
    ],
    gallery: ['/images/kestane.jpg', '/images/kestane.jpg', '/images/kestane.jpg'],
    origin: 'Gemlik Kestane Ormanları',
    harvestDate: 'Temmuz 2025',
    rating: 5,
    reviewCount: 5
  },
  {
    id: 5,
    name: 'Akasya Balı',
    category: 'Bal',
    image: '/images/akasya.jpg',
    price: '₺480',
    description: 'Akasya çiçeklerinden toplanan berrak, açık renkli bal. Yumuşak tadı ve kristalleşmeye karşı direnci ile bilinir. Çocuklar için ideal.',
    story: 'İlkbahar aylarında açan akasya çiçeklerinin mis gibi kokusundan arıların topladığı nektarla üretilen akasya balımız, hafif yapısı ile her yaşa uygundur.',
    features: [
      'Akasya çiçeği nektarı',
      'Berrak, açık renk',
      'Yumuşak ve hafif tat',
      'Geç kristalleşme',
      'Çocuklara uygun'
    ],
    variants: [
      { size: '500gr', price: '₺480' },
      { size: '1000gr', price: '₺920' }
    ],
    gallery: ['/images/akasya.jpg', '/images/akasya.jpg', '/images/akasya.jpg'],
    origin: 'Gemlik Akasya Bahçeleri',
    harvestDate: 'Mayıs 2025',
    rating: 5,
    reviewCount: 9
  },
  {
    id: 6,
    name: 'Anzer Balı',
    category: 'Bal',
    image: '/images/anzer.jpg',
    price: '₺1.200',
    description: 'Dünyanın en değerli ballarından Anzer balı. Sadece Anzer yaylasında yetişen endemik bitki türlerinden üretilir. Yüksek antibakteriyel özelliği.',
    story: 'Rize\'nin Anzer yaylasında 2000-3000 metre rakımda, yılda sadece bir kez hasat edilen Anzer balı, 500\'den fazla endemik bitki türünün nektarını içerir.',
    features: [
      'Anzer yaylası özgün balı',
      'Endemik bitki nektarları',
      'Yüksek antibakteriyel etki',
      'Sınırlı üretim',
      'Coğrafi işaretli'
    ],
    variants: [
      { size: '500gr', price: '₺1.200' },
      { size: '1000gr', price: '₺2.300' }
    ],
    gallery: ['/images/anzer.jpg', '/images/anzer.jpg', '/images/anzer.jpg'],
    origin: 'Anzer Yaylası, Rize',
    harvestDate: 'Ağustos 2025',
    rating: 5,
    reviewCount: 15
  },
  {
    id: 7,
    name: 'Petek Balı',
    category: 'Bal',
    image: '/images/petek.jpg',
    price: '₺720',
    description: 'Arı petekleriyle birlikte sunulan doğal bal. Propolis, polen ve balmumu içerir. En doğal haliyle balın tüm faydalarını sunar.',
    story: 'Arıların balmumundan inşa ettikleri peteklerde sakladıkları bal, propolis ve polen ile birlikte sunulur. En doğal ve katkısız bal tüketim şeklidir.',
    features: [
      'Petek ve balmumu ile',
      'Propolis ve polen içerir',
      'Tamamen doğal',
      'Yüksek enzim aktivitesi',
      'Geleneksel sunum'
    ],
    variants: [
      { size: '500gr', price: '₺720' },
      { size: '1000gr', price: '₺1.380' }
    ],
    gallery: ['/images/petek.jpg', '/images/petek.jpg', '/images/petek.jpg'],
    origin: 'Gemlik Arılıkları',
    harvestDate: 'Temmuz 2025',
    rating: 5,
    reviewCount: 7
  },

  // ZEYTİNYAĞLARI
  {
    id: 101,
    name: 'Erken Hasat Zeytinyağı',
    category: 'Zeytinyağı',
    image: '/images/erken hasat.jpg',
    price: '₺520',
    description: 'Zeytinler olgunlaşmadan önce, yeşil iken hasat edilen zeytinlerden elde edilen yağ. Yoğun yeşil renk, keskin ve baharatlı tat profili. Yüksek antioksidan.',
    story: 'Ekim ayının ilk haftasında, şafak sökerken elle toplanan yeşil Gemlik zeytinlerinden, hasat sonrası 2 saat içinde soğuk sıkım yöntemiyle üretilir.',
    features: [
      'Erken hasat (Ekim ayı)',
      'Yoğun yeşil renk',
      'Keskin, baharatlı tat',
      'Yüksek polifenol',
      'Asitlik %0.2'
    ],
    acidRatio: '%0.2',
    variants: [
      { size: '500ml', price: '₺520' },
      { size: '1000ml', price: '₺980' },
      { size: '5000ml', price: '₺4.500' }
    ],
    gallery: ['/images/erken hasat.jpg', '/images/erken hasat.jpg', '/images/erken hasat.jpg'],
    origin: 'Gemlik, Bursa',
    harvestDate: 'Ekim 2025',
    rating: 5,
    reviewCount: 18
  },
  {
    id: 102,
    name: 'Gemlik Zeytinyağı',
    category: 'Zeytinyağı',
    image: '/images/gemlık.jpg',
    price: '₺450',
    description: 'Gemlik zeytininden elde edilen, orta hasat döneminde üretilen zeytinyağı. Dengeli tat profili, hafif acılık ve meyve aroması. Günlük kulanım için ideal.',
    story: 'Bursa\'nın bereketli topraklarında yetişen Gemlik zeytinlerinden, geleneksel yöntemlerle üretilen zeytinyağımız, Marmara mutfağının vazgeçilmezidir.',
    features: [
      'Gemlik zeytini',
      'Dengeli tat profili',
      'Altın sarısı renk',
      'Meyve aroması',
      'Asitlik %0.3'
    ],
    acidRatio: '%0.3',
    variants: [
      { size: '500ml', price: '₺450' },
      { size: '1000ml', price: '₺850' },
      { size: '5000ml', price: '₺3.900' }
    ],
    gallery: ['/images/gemlık.jpg', '/images/gemlık.jpg', '/images/gemlık.jpg'],
    origin: 'Gemlik, Bursa',
    harvestDate: 'Kasım 2025',
    rating: 5,
    reviewCount: 24
  },
  {
    id: 103,
    name: 'Taşbaskı Zeytinyağı',
    category: 'Zeytinyağı',
    image: '/images/kasıkta.jpg',
    price: '₺680',
    description: 'Geleneksel taş değirmenlerde ezilen zeytinlerden elde edilen, soğuk sıkım yöntemiyle üretilen premium zeytinyağı. Derin aroma ve yoğun lezzet.',
    story: 'Yüzyıllık taş değirmenlerde, modern teknoloji ile birleştirilen geleneksel yöntemlerle üretilen taşbaskı zeytinyağımız, atalarımızın tatını bugüne taşır.',
    features: [
      'Taş değirmende ezilmiş',
      'Geleneksel yöntem',
      'Derin aroma profili',
      'Yoğun lezzet',
      'Asitlik %0.25'
    ],
    acidRatio: '%0.25',
    variants: [
      { size: '500ml', price: '₺680' },
      { size: '1000ml', price: '₺1.280' },
      { size: '5000ml', price: '₺5.800' }
    ],
    gallery: ['/images/kasıkta.jpg', '/images/kasıkta.jpg', '/images/kasıkta.jpg'],
    origin: 'Gemlik, Bursa',
    harvestDate: 'Kasım 2025',
    rating: 5,
    reviewCount: 11
  },

  // ZEYTİNLER
  {
    id: 201,
    name: 'Sofralık Siyah Zeytin',
    category: 'Sofralık Zeytin',
    image: '/images/sofralıksıyah.jpg',
    price: '₺180',
    description: 'Doğal fermantasyon yöntemiyle işlenmiş, yumuşak ve kremsi dokuya sahip siyah zeytinler. Kahvaltı sofralarının vazgeçilmezi.',
    story: 'Gemlik zeytinleri tam olgunluğa ulaştığında hasat edilir ve tuz ile doğal fermantasyona bırakılır. Ay ışığında bekletilen zeytinlerimiz özel lezzete kavuşur.',
    features: [
      'Doğal fermantasyon',
      'Yumuşak doku',
      'Tam olgun',
      'Tuzsuz seçenek mevcut',
      'Geleneksel işleme'
    ],
    variants: [
      { size: '500gr', price: '₺180' },
      { size: '1000gr', price: '₺340' },
      { size: '5000gr', price: '₺1.550' }
    ],
    gallery: ['/images/sofralıksıyah.jpg', '/images/sofralıksıyah.jpg', '/images/sofralıksıyah.jpg'],
    origin: 'Gemlik, Bursa',
    harvestDate: 'Aralık 2025',
    rating: 5,
    reviewCount: 21
  },
  {
    id: 202,
    name: 'Kırma Yeşil Zeytin',
    category: 'Sofralık Zeytin',
    image: '/images/kırmayesıl.jpg',
    price: '₺160',
    description: 'Elle kırılarak işlenen yeşil zeytinler. Çıtır dokusu ve hafif acısı ile tanınır. Limon ve sarımsak ile marine edilir.',
    story: 'Sonbaharda el ile toplanan yeşil zeytinlerimiz, taşla hafifçe kırılarak acılığı alınır. Geleneksel Gemlik usulü marine ile hazırlanır.',
    features: [
      'Elle kırma',
      'Çıtır doku',
      'Limon ve sarımsaklı',
      'Yeşil olgunluk',
      'Marine edilmiş'
    ],
    variants: [
      { size: '500gr', price: '₺160' },
      { size: '1000gr', price: '₺300' },
      { size: '5000gr', price: '₺1.400' }
    ],
    gallery: ['/images/kırmayesıl.jpg', '/images/kırmayesıl.jpg', '/images/kırmayesıl.jpg'],
    origin: 'Gemlik, Bursa',
    harvestDate: 'Ekim 2025',
    rating: 5,
    reviewCount: 16
  },
  {
    id: 203,
    name: 'Gemlik Zeytini',
    category: 'Sofralık Zeytin',
    image: '/images/gemlık.jpg',
    price: '₺220',
    description: 'Dünyaca ünlü Gemlik zeytini, iri taneli ve etli yapısı ile bilinir. Doğal siyah renk ve yoğun lezzet.',
    story: 'Bursa Gemlik\'in coğrafi işaretli zeytini, bölgenin iklim ve toprak yapısının mükemmel uyumuyla ortaya çıkar. Her tanesi özenle seçilir.',
    features: [
      'Coğrafi işaretli',
      'İri taneli',
      'Etli yapı',
      'Yoğun lezzet',
      'Gemlik özgünü'
    ],
    variants: [
      { size: '500gr', price: '₺220' },
      { size: '1000gr', price: '₺420' },
      { size: '5000gr', price: '₺1.950' }
    ],
    gallery: ['/images/gemlık.jpg', '/images/gemlık.jpg', '/images/gemlık.jpg'],
    origin: 'Gemlik, Bursa',
    harvestDate: 'Kasım 2025',
    rating: 5,
    reviewCount: 28
  },
  {
    id: 204,
    name: 'Çizik Zeytin',
    category: 'Sofralık Zeytin',
    image: '/images/cızık.jpg',
    price: '₺140',
    description: 'Yüzeyine çizikler atılarak marine edilen yeşil zeytinler. Baharatların içine daha iyi işlemesini sağlar. Yoğun aroma.',
    story: 'Yeşil zeytinlere atılan çizikler sayesinde limon, sarımsak ve baharatlar içe işler. Gemlik\'in geleneksel marinasyon tekniğidir.',
    features: [
      'Çizilmiş yüzey',
      'Yoğun baharat',
      'Hızlı marine',
      'Limonlu',
      'Geleneksel yöntem'
    ],
    variants: [
      { size: '500gr', price: '₺140' },
      { size: '1000gr', price: '₺260' },
      { size: '5000gr', price: '₺1.200' }
    ],
    gallery: ['/images/cızık.jpg', '/images/cızık.jpg', '/images/cızık.jpg'],
    origin: 'Gemlik, Bursa',
    harvestDate: 'Ekim 2025',
    rating: 5,
    reviewCount: 13
  },
  {
    id: 205,
    name: 'Taşbaskı Zeytin',
    category: 'Sofralık Zeytin',
    image: '/images/tasbaskı.jpg',
    price: '₺200',
    description: 'Taşla bastırılarak ezilen zeytinler. Çekirdeği çıkmış, baharatlı ve zeytinyağlı marine. Pratik ve lezzetli.',
    story: 'Gemlik\'in geleneksel taşbaskı yöntemiyle ezilen zeytinlerimiz, kendi yağı ve baharatlarla marine edilerek özel lezzete kavuşur.',
    features: [
      'Taşla ezilmiş',
      'Çekirdeksiz',
      'Baharatlı marine',
      'Zeytinyağlı',
      'Pratik kullanım'
    ],
    variants: [
      { size: '500gr', price: '₺200' },
      { size: '1000gr', price: '₺380' },
      { size: '5000gr', price: '₺1.750' }
    ],
    gallery: ['/images/tasbaskı.jpg', '/images/tasbaskı.jpg', '/images/tasbaskı.jpg'],
    origin: 'Gemlik, Bursa',
    harvestDate: 'Kasım 2025',
    rating: 5,
    reviewCount: 10
  }
]

// ID'ye göre ürün getir
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id)
}

// Kategoriye göre ürünleri getir
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category)
}
