"use client";
import { Product } from "@/types/product";
import Image from "next/image";
import CartButton from "../cartButton";
import Container from "../container";
import FavoriteButton from "../favoriteButton";
import Header from "../Header/Header";
import styles from "./styles.module.scss";

export default function ProductInfo({ product }: { product: Product }) {
  return (
    <Container>
      <Header />
      <main className={styles.body}>
        <div className={styles.info}>
          <div className={styles.img}>
            <Image
              src={product.image}
              alt={product.name}
              width={1000}
              height={600}
            />
          </div>
          <div className={styles.buy}>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.price}>{product.price} ₽</p>
            <div className={styles.buttons}>
              <CartButton productId={product.id} className={styles.cartBtn} />
              <FavoriteButton
                productId={product.id}
                className={styles.favoriteBtn}
              />
            </div>
            <div className={styles.description}>
              <p className={styles.seller}>
                <span className={styles.label}>Продавец</span>
                <span className={styles.text}>{product.seller}</span>
              </p>
              <p className={styles.information}>
                <span className={styles.label}>Описание</span>
                <span className={styles.text}>{product.info}</span>
              </p>
              <p className={styles.left}>
                <span className={styles.label}>Осталось</span>
                <span className={styles.text}>{product.quantity}шт</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}
