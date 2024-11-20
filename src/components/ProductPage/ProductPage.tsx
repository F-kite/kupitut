"use client";
import { useSearchParams } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

/*
Название: {product.name}
Продавец: {product.seller}
Цена: {product.price}
Информация: {product.info}
Характеристика: {product.specifications} Пункты разделены символом ';'
Фотография: {product.image}
Количество: {product.quantity}
*/

export default function ProductPage({ }) {
  const { products, getProducts } = useProducts();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [isToFavourite, setIsToFavourite] = useState(false);
  const [isToCart, setIsToCart] = useState(false);

  const id: number = Number(searchParams.get("id"));
  const product = id ? products[id - 1] : null;

  console.debug(products);

  useEffect(() => {
    const fetchData = async () => {
      await getProducts();
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && product) {
      setIsToFavourite(localStorage.idFavProducts?.includes(product?.id));
      setIsToCart(localStorage.idCartProducts?.includes(product?.id));
    }
  }, [product]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      <p>Карточка товара</p>
      {product ? (
        <ul>
          <li>Название: {product.name}</li>
          <li>Цена: {product.price}</li>
          <li>Продавец: {product.seller}</li>
          <li>Информация: {product.info}</li>
          <li>Характеристика: {product.specifications}</li>
          <li>Фотография: {product.image}</li>
          <li>Количество: {product.quantity}</li>
        </ul>
      ) : (
        <p>Товар не найден</p>
      )}
      <ul>
        <li>В избранном {isToFavourite.toString()}</li>
        <li>В корзине {isToCart.toString()}</li>
      </ul>
    </div>
  );
}
