import { MouseEvent, useState } from "react";
import styles from "../productCard/styles.module.scss";
import Image from "next/image";

export default function ProductCard({
  product,
  order,
  setOrder,
  favourite,
  setFavourite,
}: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClickedFav, setIsClickedFav] = useState(false);
  const [isClickedCart, setIsClickedCart] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  function addToCart(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    isClickedCart ? setOrder(order - 1) : setOrder(order + 1);
    setIsClickedCart(!isClickedCart);
    console.log("Click! add to cart");
  }

  function addToFavourite(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    isClickedFav ? setFavourite(favourite - 1) : setFavourite(favourite + 1);
    setIsClickedFav(!isClickedFav);
    console.log("Click! add to favourite");
  }

  return (
    //product/123
    <a className={styles.body} href={`#`}>
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
        <img src={product.productimage} alt="" />
      </div>
      <div className={styles.cardText}>
        <p className={styles.price}>{product.productcost} ₽</p>
        <p className={styles.name}>{product.productname}</p>
        <button className={styles.button} onClick={addToCart}>
          {isClickedCart ? "Уже в корзине" : "В корзину"}
        </button>
      </div>
    </a>
  );
}
