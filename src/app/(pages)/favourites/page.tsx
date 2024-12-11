import Container from '@/components/container'
import FavouritePage from '@/components/FavouritePage/FavouritePage'
import Header from '@/components/Header/Header'
import { supabase } from '@/lib/supabase'
import { Product } from '@/types/product'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { notFound } from 'next/navigation'

export default async function Favourites() {
	const { data }: PostgrestSingleResponse<Product[]> = await supabase
		.from('products')
		.select('*')
		.order('id')

	return data ? (
		<Container>
			<Header />
			<FavouritePage products={data} />
		</Container>
	) : (
		notFound()
	)
}
