import { MouseEvent, useEffect, useState } from "react";
import styles from "../productCard/styles.module.scss";
import Image from "next/image";

export default function ProductCard({ product, setOrder, setFavourite }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClickedFav, setIsClickedFav] = useState(false);
  const [isClickedCart, setIsClickedCart] = useState(false);

  let idFavProducts: number[] = [];
  let idCartProducts: number[] = [];

  if (localStorage.getItem("idCartProducts")) {
    idCartProducts = JSON.parse(localStorage.idCartProducts);
  } else localStorage.idCartProducts = JSON.stringify(idCartProducts);

  if (localStorage.getItem("idFavProducts")) {
    idFavProducts = JSON.parse(localStorage.idFavProducts);
  } else localStorage.idFavProducts = JSON.stringify(idFavProducts);

  function addToCart(e: MouseEvent<HTMLElement>) {
    e.preventDefault();

    isClickedCart
      ? (idCartProducts = idCartProducts.filter((item) => item !== product.id))
      : idCartProducts.push(product.id);
    localStorage.idCartProducts = JSON.stringify(idCartProducts);
    setIsClickedCart(!isClickedCart);
  }

  function addToFavourite(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    isClickedFav
      ? (idFavProducts = idFavProducts.filter((item) => item !== product.id))
      : idFavProducts.push(product.id);
    localStorage.idFavProducts = JSON.stringify(idFavProducts);
    setIsClickedFav(!isClickedFav);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  useEffect(() => {
    setOrder(idCartProducts.length);
    setFavourite(idFavProducts.length);
    if (idCartProducts.includes(product.id)) setIsClickedCart(true);
    if (idFavProducts.includes(product.id)) setIsClickedFav(true);
  });

  return (
    <a className={styles.body} href={`/product?id=${product.id}`}>
      <div
        className={styles.favourite}
        onClick={addToFavourite}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={
            isHovered || isClickedFav
              ? "/addFavouriteHover.svg"
              : "/addFavourite.svg"
          }
          width={30}
          height={30}
          alt="Избранное"
        />
      </div>
      <div className={styles.imgContainer}>
        <img src={product.image} alt="" />
      </div>
      <div className={styles.cardText}>
        <p className={styles.price}>{product.price} ₽</p>
        <p className={styles.name}>{product.name}</p>
        <button
          className={isClickedCart ? styles.buttonClicked : styles.button}
          onClick={addToCart}
        >
          {isClickedCart ? "Уже в корзине" : "В корзину"}
        </button>
      </div>
    </a>
  );
}
