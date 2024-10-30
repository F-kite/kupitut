"use client";
import { useSearchParams } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";
import { useEffect } from "react";
import styles from "../productCard/styles.module.scss";

export default function ProductPage({}) {
  const searchParams = useSearchParams();
  const { products, getProducts } = useProducts();

  const id = searchParams.get("id");

  const product = products[Number(id) - 1];
  console.log(product.productname);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      Страница продукта
      <p>{product.id}</p>
      <p>{product.productname}</p>
      <p>{product.productseller}</p>
      <p>{product.productcost}</p>
      <p>{product.productspecifications}</p>
      <p>{product.productimage}</p>
    </div>
  );
}
