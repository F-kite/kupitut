import { Product } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import CartButton from '../cartButton'
import FavoriteButton from '../favoriteButton'
import styles from './styles.module.scss'

export default function TestCard({ product }: { product: Product }) {
	return (
		<Link
			href={`/product/${product.id}`}
			key={product.id}
			className={styles.card}
		>
			<FavoriteButton
				productId={product.id}
				className={styles.favoriteBtn}
				size={32}
			/>
			<div className={styles.image}>
				<Image
					src={product.image}
					alt={product.name}
					width={500}
					height={500}
				/>
			</div>
			<p className={styles.title}>{product.name}</p>
			<p className={styles.price}>{product.price} ₽</p>
			<CartButton productId={product.id} className={styles.cartBtn} />
		</Link>
	)
}
