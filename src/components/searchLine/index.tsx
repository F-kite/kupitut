import React, { useState } from "react";
import styles from "../searchLine/styles.module.scss";

interface SearchLineProps {
  className?: string;
  onSearch: (query: string) => void;
}

export default function SearchLine({ className, onSearch }: SearchLineProps) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      handleSearch();
    }
  };

  const handleSearch = () => {
    onSearch(query);
    setQuery("");
  };

  return (
    <div className={`${styles.body} ${className}`}>
      <input
        className={styles.input}
        placeholder="Искать на КупиТут"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.button} onClick={handleSearch}>
        Поиск
      </button>
    </div>
  );
}
