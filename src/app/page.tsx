"use client";

import { useProducts } from "@/hooks/useProducts";
import { useSupabase } from "@/hooks/useSupabase";
import { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import "./globals.css";
import { serialize } from "v8";

export default function Home() {
  const { getSession } = useSupabase();

  const { products, getProducts } = useProducts();
  const { cart, setCart } = useState({
    cart: String,
    setCart: String,
  });

  useEffect(() => {
    getSession(), getProducts();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="products">
          {products.map((product: any, key: number) => (
            <ProductCard key={key} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
