import styles from "../productCard/styles.module.scss";

export default function ProductCard({ product }: any) {

  return (
    <a className={styles.body} href={`/product/124`}>
      <div className={styles.imgContainer}>
        <img
          src={product.productimage}
          alt=""
        />
      </div>
      <div className={styles.cardText}>
        <p>{product.productseller}</p>
        <p>{product.productname}</p>
        <p className={styles.price}>{product.productcost} ₽</p>
      </div>
    </a>
  );
}
