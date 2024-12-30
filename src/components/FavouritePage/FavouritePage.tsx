'use client'
import { useFavoriteStore } from '@/stores/favorite'
import { Product } from '@/types/product'
import { useEffect } from 'react'
import TestCard from '../testCard'
import styles from './styles.module.scss'

export default function FavouritePage({ products }: { products: Product[] }) {
	const { favorites, setFavorite } = useFavoriteStore()
	const favoriteProducts = products.filter(item => favorites.includes(item.id))

	useEffect(() => {
		const storageFavorites = localStorage.getItem('favorites')
		if (!storageFavorites) return
		setFavorite(JSON.parse(storageFavorites))
	}, [])

	return (
		<div className={styles.body}>
			{favoriteProducts.map(product => (
				<TestCard key={product.id} product={product} />
			))}
		</div>
	)
}
