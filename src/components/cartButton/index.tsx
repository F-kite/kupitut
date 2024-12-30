'use client'

import { useCartStore } from '@/stores/cart'
import { useEffect } from 'react'
import IconMinus from '../ui/icons/minus'
import IconPlus from '../ui/icons/plus'
import styles from './styles.module.scss'

interface Props {
	productId: number
	className?: string
}

export default function CartButton({ productId, className }: Props) {
	const { cart, addCart, removeCart, setCart } = useCartStore()

	const cartItem = cart.find(item => item.id === productId)

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	useEffect(() => {
		const storageCart = localStorage.getItem('cart')
		if (!storageCart) return
		setCart(JSON.parse(storageCart))
	}, [])

	return (
		<div className={`${styles.body} ${className}`}>
			{cartItem ? (
				<div className={styles.control}>
					<button
						className={`${styles.controlBtn}`}
						onClick={e => {
							e.preventDefault()
							e.stopPropagation()
							removeCart(productId)
						}}
					>
						<IconMinus size={32} />
					</button>
					<span>{cartItem.count}</span>
					<button
						className={`${styles.controlBtn}`}
						onClick={e => {
							e.preventDefault()
							e.stopPropagation()
							addCart(productId)
						}}
					>
						<IconPlus size={32} />
					</button>
				</div>
			) : (
				<button
					className={styles.cart}
					onClick={e => {
						e.preventDefault()
						e.stopPropagation()
						addCart(productId)
					}}
				>
					В корзину
				</button>
			)}
		</div>
	)
}
