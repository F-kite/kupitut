import { MouseEvent } from "react";
import styles from "../productCard/styles.module.scss";

export default function ProductCard({ product }: any) {
  function handleClick(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    console.log("Click");
  }
  return (
    //product/123
    <a className={styles.body} href={`#`}>
      <div className={styles.imgContainer}>
        <img src={product.productimage} alt="" />
      </div>
      <div className={styles.cardText}>
        <p className={styles.price}>{product.productcost} ₽</p>
        <p className={styles.seller}>{product.productseller}</p>
        <p className={styles.name}>{product.productname}</p>
        <button className={styles.button} onClick={handleClick}>
          В корзину
        </button>
      </div>
    </a>
  );
}
