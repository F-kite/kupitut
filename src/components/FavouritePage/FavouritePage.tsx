"use client";
import { useEffect, useState } from "react";
import styles from "../productCard/styles.module.scss";

export default function FavouritePage({}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <p>Загрузка...</p>;
  }
  return <div>Страница с избранными продуктами</div>;
}
