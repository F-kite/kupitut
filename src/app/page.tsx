import { supabase } from '@/lib/supabase'
import type { Product } from '@/types/product'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import Header from '../components/Header/Header'
import ProductCard from '../components/ProductCard/ProductCard'
import './globals.css'

export default async function Home() {
	const { data }: PostgrestSingleResponse<Product[]> = await supabase
		.from('products')
		.select('*')
		.order('id')

	return (
		<div className='App'>
			<div className='container'>
				<Header />
				<div className='products'>
					{data!.map((product: Product, key: number) => (
						<ProductCard key={key} product={product} />
					))}
				</div>
			</div>
		</div>
	)
}
