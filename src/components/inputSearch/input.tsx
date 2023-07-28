/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./style.module.css";
import search from "../../../public/search.svg";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Filter } from "../filterCountry/filter";

type InputProps = {
  onFilters: (params: string, clean: boolean, cleanAll: boolean) => void;
};

export function Input({ onFilters }: InputProps) {
  const [_searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState(false);

  function searchCountries() {
    setSearchParams(`query=${inputValue}`);
  }

  function filterCountries() {
    setFilter(!filter);
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
      <button onClick={filterCountries} className={styles.containerFilter}>
        <img className={styles.filterIcon} src="public/filter.svg" alt="" />
      </button>
      <button
        className={styles.inputContainer__button}
        onClick={searchCountries}
      >
        <img className={styles.button__icon} src={search} alt="" />
        Buscar
      </button>
      {filter && <Filter onFilters={onFilters} />}
    </div>
  );
}
