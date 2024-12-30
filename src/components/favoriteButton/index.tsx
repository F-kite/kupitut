'use client'

import { useFavoriteStore } from '@/stores/favorite'
import { MouseEvent, useEffect } from 'react'
import IconFavorite from '../ui/icons/favorite'
import styles from './styles.module.scss'

interface Props {
	productId: number
	className?: string
	size?: number
}

export default function FavoriteButton({
	productId,
	className,
	size = 48,
}: Props) {
	const { favorites, addFavorite, removeFavorite, setFavorite } =
		useFavoriteStore()

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		e.preventDefault()
		if (favorites.includes(productId)) {
			removeFavorite(productId)
		} else {
			addFavorite(productId)
		}
	}

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites))
	}, [favorites])

	useEffect(() => {
		const storageFavorites = localStorage.getItem('favorites')
		if (!storageFavorites) return
		setFavorite(JSON.parse(storageFavorites))
	}, [])

	return (
		<button className={`${styles.favorite} ${className}`} onClick={handleClick}>
			<IconFavorite
				size={size}
				fill={favorites.includes(productId) ? '#005bff' : '#8f90ac'}
			/>
		</button>
	)
}
