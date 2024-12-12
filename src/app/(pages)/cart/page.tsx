'use client';
import { useEffect } from 'react';
import Container from '@/components/container';
import Header from '@/components/Header/Header';
import { useProducts } from '@/hooks/useProducts';
import ShoppingCart from '@/components/ShoppingCart/ShoppingCart';

export default function Favourites() {
	const { products, getProducts } = useProducts();

	useEffect(() => {
		getProducts(''); // Получаем все продукты
	}, []);

	const onSearch = (query: string) => {
		getProducts(query);
	};

	return (
		<Container>
			<Header onSearch={onSearch} />
			<ShoppingCart products={products} />
		</Container>
	);
}

