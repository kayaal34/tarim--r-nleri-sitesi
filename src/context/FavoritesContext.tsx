'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

export interface FavoriteItem {
  id: number
  name: string
  price: number
  image: string
  category: string
  description?: string
}

interface FavoritesContextType {
  favorites: FavoriteItem[]
  addToFavorites: (item: FavoriteItem) => void
  removeFromFavorites: (id: number) => void
  isFavorite: (id: number) => boolean
  totalFavorites: number
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([])

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('kayaal-favorites')
    if (stored) {
      try {
        setFavorites(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to parse favorites:', e)
      }
    }
  }, [])

  // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('kayaal-favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (item: FavoriteItem) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.id === item.id)
      if (exists) return prev
      return [...prev, item]
    })
  }

  const removeFromFavorites = (id: number) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id))
  }

  const isFavorite = (id: number): boolean => {
    return favorites.some((item) => item.id === id)
  }

  const totalFavorites = favorites.length

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        totalFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
