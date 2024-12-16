"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import type { Product } from "@/types/product";
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import "./globals.css";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    try {
      getProducts("");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const onSearch = (query: string) => {
    const filteredProducts = query.toLowerCase();
    getProducts(filteredProducts);
  };

  return (
    <div className="App">
      <div className="container">
        <Header onSearch={onSearch} />
        <div className="products">
          {products.map((product: Product, key: number) => (
            <ProductCard key={key} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
