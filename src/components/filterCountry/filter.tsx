import { useState } from "react";
import { FilterOption } from "./filterOption";
import styles from "./style.module.css";
import { FilterProps } from "../../types/types";

export function Filter({ onFilters }: FilterProps) {
  const [cleanFilters, setCleanFilters] = useState(false);

  function onCleaned() {
    setCleanFilters(!cleanFilters);
    localStorage.setItem("filters", JSON.stringify({}));
    onFilters("", false, true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <p>Filtrar por continentes</p>
        <button onClick={onCleaned}>Limpiar</button>
      </div>
      <div className={styles.container__content}>
        <FilterOption
          onFilters={onFilters}
          clean={cleanFilters}
          name="Oceania"
          code="OC"
          image="public/oceania.png"
        />
        <FilterOption
          onFilters={onFilters}
          clean={cleanFilters}
          name="America"
          code="NA SA"
          image="public/america.jpg"
        />
        <FilterOption
          onFilters={onFilters}
          clean={cleanFilters}
          name="Asia"
          code="AS"
          image="public/asia.jpg"
        />
        <FilterOption
          onFilters={onFilters}
          clean={cleanFilters}
          name="Europa"
          code="EU"
          image="public/europa.png"
        />
        <FilterOption
          onFilters={onFilters}
          clean={cleanFilters}
          name="Africa"
          code="AF"
          image="public/africa.jpg"
        />
      </div>
    </div>
  );
}
