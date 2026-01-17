export interface Product {
  id: number
  name: string
  category: 'Zeytinyağı' | 'Sofralık Zeytin' | 'Bal' | 'Kozmetik' | 'Soslar'
  image: string
  price: number
  description: string
  region: 'Gemlik' | 'Marmara'
  isFeatured?: boolean
  isTrending?: boolean
  weight?: string
  variant?: string
  stock?: number
  tags?: string[]
}

export interface CartProduct extends Product {
  quantity: number
}

export interface ProductFilters {
  category?: string
  minPrice?: number
  maxPrice?: number
  region?: string
  isFeatured?: boolean
  isTrending?: boolean
}
