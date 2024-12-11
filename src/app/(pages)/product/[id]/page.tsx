import ProductInfo from '@/components/ProductPage/ProductPage'
import { supabase } from '@/lib/supabase'
import { Product } from '@/types/product'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { notFound } from 'next/navigation'

export default async function ProductPage({
	params,
}: {
	params: { id: string }
}) {
	const id = params.id

	const { data }: PostgrestSingleResponse<Product[]> = await supabase
		.from('products')
		.select('*')
		.order('id')

	const productData = data?.find(prod => prod.id === +id)

	return productData ? <ProductInfo product={productData} /> : notFound()
}
