"use client";

import { useProducts } from "@/hooks/useProducts";
import { useSupabase } from "@/hooks/useSupabase";
import { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import "./globals.css";

export default function Home() {
  const [order, setOrder] = useState<number>(0);
  const [favourite, setFavourite] = useState<number>(0);
  const { getSession } = useSupabase();
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getSession(), getProducts();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header order={order} favourite={favourite} />
        <div className="products">
          {products.map((product: any, key: number) => (
            <ProductCard
              key={key}
              product={product}
              order={order}
              setOrder={setOrder}
              favourite={favourite}
              setFavourite={setFavourite}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
