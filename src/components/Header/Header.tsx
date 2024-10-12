import styles from "./styles.module.scss";
import SearchLine from "../searchLine";
import Image from "next/image";

export default function Header() {
  let emptyCart: boolean = true;

  return (
    <header className={styles.body}>
      <a href="/" className={styles.logo}>
        <Image src={"/logo.svg"} width={56} height={56} alt="KupiTut" />
      </a>
      <SearchLine className={styles.search} />
      <nav className={styles.nav}>
        <a href="/favourites">
          <Image
            src={"/favourite.svg"}
            width={40}
            height={40}
            alt="Избранное"
          />
          <p className={styles.barText}>Избранное</p>
        </a>
        <a href="/cart">
          {emptyCart ? (
            <Image
              src={"/cart_empty.svg"}
              width={40}
              height={40}
              alt="Корзина"
            />
          ) : (
            <Image
              src={"/cart_full.svg"}
              width={40}
              height={40}
              alt="Корзина"
            />
          )}
          <p className={styles.barText}>Корзина</p>
        </a>
      </nav>
    </header>
  );
}
