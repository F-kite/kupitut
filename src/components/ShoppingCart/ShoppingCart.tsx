'use client'
import { useCartStore } from '@/stores/cart'
import { Product } from '@/types/product'
import { useEffect } from 'react'
import TestCard from '../testCard'
import styles from './styles.module.scss'

export default function ShoppingCart({ products }: { products: Product[] }) {
	const { cart, setCart } = useCartStore()
	const cartProducts = products.filter(item =>
		cart
			.reduce((ids, cur) => [...ids, cur.id], [] as number[])
			.includes(item.id)
	)

	useEffect(() => {
		const storageFavorites = localStorage.getItem('cart')
		if (!storageFavorites) return
		setCart(JSON.parse(storageFavorites))
	}, [])

	return (
		<div className={styles.body}>
			{cartProducts.map(product => (
				<TestCard key={product.id} product={product} />
			))}
			<button className={styles.button}>Оформить заказ</button>
		</div>
	)
}
