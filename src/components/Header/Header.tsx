import styles from "./styles.module.scss";
import SearchLine from "../searchLine";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function Header({ order, favourite }: any) {
  async function logoutUser() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      location.reload();
    } catch (e) {
      throw e;
    }
  }
  return (
    <header className={styles.body}>
      <a href="/" className={styles.logo}>
        <Image src={"/logo.svg"} width={56} height={56} alt="KupiTut" />
      </a>
      <SearchLine className={styles.search} />
      <nav className={styles.nav}>
        <a href="/favourites">
          {favourite ? (
            <div className={styles.cartContainer}>
              <Image
                src={"/favourite.svg"}
                width={45}
                height={45}
                alt="Избранное"
              />
              <p className={styles.cartContainerCount}>{favourite}</p>
            </div>
          ) : (
            <Image
              src={"/favourite.svg"}
              width={45}
              height={45}
              alt="Избранное"
            />
          )}
        </a>
        <a href="/cart">
          {order ? (
            <div className={styles.cartContainer}>
              <Image
                src={"/cart_full.svg"}
                width={45}
                height={45}
                alt="Корзина"
              />
              <p className={styles.cartContainerCount}>{order}</p>
            </div>
          ) : (
            <Image
              src={"/cart_empty.svg"}
              width={45}
              height={45}
              alt="Корзина"
            />
          )}
        </a>
        <button onClick={logoutUser} className={styles.button}>
          <Image src={"/logout.svg"} width={45} height={45} alt="Выход" />
        </button>
      </nav>
    </header>
  );
}
