"use client";
import Modal from "react-modal";
import { useCartStore } from "@/stores/cart";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import TestCard from "../testCard";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function ShoppingCart({ products }: { products: Product[] }) {
  const { cart, setCart, resetCart } = useCartStore();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const cartProducts = products.filter((item) =>
    cart
      .reduce((ids, cur) => [...ids, cur.id], [] as number[])
      .includes(item.id)
  );

  useEffect(() => {
    const storageFavorites = localStorage.getItem("cart");
    if (!storageFavorites) return;
    setCart(JSON.parse(storageFavorites));
  }, []);

  function openModal() {
    setIsOpenModal(true);
    resetCart();
    localStorage.setItem("cart", "[]");
  }
  function closeModal() {
    setIsOpenModal(false);
  }

  return (
    <div className={styles.body}>
      {cartProducts.map((product) => (
        <TestCard key={product.id} product={product} />
      ))}
      <button
        disabled={cart.length == 0}
        className={styles.button}
        onClick={openModal}
      >
        Оформить заказ
      </button>

      <Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        className={styles.modalOverlay}
        ariaHideApp={false}
      >
        <div className={styles.modalContent}>
          <button className={styles.closeButton} onClick={closeModal}>
            &times;
          </button>
          <div className={styles.modalBody}>
            <h2 className={styles.title}>Покупка завершена!</h2>
            <p className={styles.message}>
              Все товары из вашей корзины были успешно куплены. Спасибо за
              покупку!
            </p>
            <form action="/" className={styles.confirmButton}>
              <button>Продолжить покупки</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
