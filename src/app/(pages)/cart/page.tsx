import Container from '@/components/container'
import Header from '@/components/Header/Header'
import ShoppingCart from '@/components/ShoppingCart/ShoppingCart'
import { supabase } from '@/lib/supabase'
import type { Product } from '@/types/product'
import type { PostgrestSingleResponse } from '@supabase/supabase-js'

export default async function Cart() {
	const { data }: PostgrestSingleResponse<Product[]> = await supabase
		.from('products')
		.select('*')
		.order('id')

	return (
		<Container>
			<Header />
			<ShoppingCart products={data!} />
		</Container>
	)
}
