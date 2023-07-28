/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./style.module.css";
import search from "../../../public/search.svg";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export function Input() {
  const [_searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  function searchCountries() {
    setSearchParams(`query=${inputValue}`);
  }

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputContainer__content}>
        <label
          className={styles.inputContainer__content__title}
          htmlFor="country"
        >
          Pais
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe el pais que desear ver"
        />
      </div>
      <button
        className={styles.inputContainer__button}
        onClick={searchCountries}
      >
        <img className={styles.button__icon} src={search} alt="" />
        Buscar
      </button>
    </div>
  );
}
