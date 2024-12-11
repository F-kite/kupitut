import { Product } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import CartButton from '../cartButton'
import FavoriteButton from '../favoriteButton'
import styles from '../productCard/styles.module.scss'

export default function ProductCard({ product }: { product: Product }) {
	return (
		<Link className={styles.body} href={`/product/${product.id}`}>
			<FavoriteButton productId={product.id} className={styles.favorite} />
			<div className={styles.imgContainer}>
				<Image src={product.image} alt='' width={1000} height={1000} />
			</div>
			<div className={styles.cardText}>
				<p className={styles.price}>{product.price} ₽</p>
				<p className={styles.name}>{product.name}</p>
				<CartButton productId={product.id} className={styles.cartBtn} />
			</div>
		</Link>
	)
}
