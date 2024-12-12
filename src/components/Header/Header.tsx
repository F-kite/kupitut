'use client'

import { supabase } from '@/lib/supabase'
import { useCartStore } from '@/stores/cart'
import { useFavoriteStore } from '@/stores/favorite'
import Image from 'next/image'
import Link from 'next/link'
import SearchLine from '../searchLine'
import styles from './styles.module.scss'

interface HeaderProps {
	onSearch: (query: string) => void; // Функция для обработки поиска
}

export default function Header({ onSearch }: HeaderProps) {
	const { cart } = useCartStore()
	const { favorites } = useFavoriteStore()

	async function logoutUser() {
		try {
			const { error } = await supabase.auth.signOut()
			if (error) throw error
			location.reload()
		} catch (e) {
			throw e
		}
	}
	return (
		<header className={styles.body}>
			<Link href='/' className={styles.logo}>
				<Image src={'/logo.svg'} width={56} height={56} alt='KupiTut' />
			</Link>
			<SearchLine className={styles.search} onSearch={onSearch} />
			<nav className={styles.nav}>
				<Link href='/favourites'>
					{favorites.length ? (
						<div className={styles.cartContainer}>
							<Image
								src={'/favourite.svg'}
								width={45}
								height={45}
								alt='Избранное'
							/>
							<p className={styles.cartContainerCount}>{favorites.length}</p>
						</div>
					) : (
						<Image
							src={'/favourite.svg'}
							width={45}
							height={45}
							alt='Избранное'
						/>
					)}
				</Link>
				<Link href='/cart'>
					{cart.length ? (
						<div className={styles.cartContainer}>
							<Image
								src={'/cart_full.svg'}
								width={45}
								height={45}
								alt='Корзина'
							/>
							<p className={styles.cartContainerCount}>
								{cart.reduce((sum, cur) => sum + cur.count, 0)}
							</p>
						</div>
					) : (
						<Image
							src={'/cart_empty.svg'}
							width={45}
							height={45}
							alt='Корзина'
						/>
					)}
				</Link>
				<button onClick={logoutUser} className={styles.button}>
					<Image src={'/logout.svg'} width={45} height={45} alt='Выход' />
				</button>
			</nav>
		</header>
	)
}
