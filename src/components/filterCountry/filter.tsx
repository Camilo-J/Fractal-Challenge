import { useState } from "react";
import { FilterOption } from "./filterOption";
import styles from "./style.module.css";
import { FilterProps } from "../../types/types";
import oceania from "../../assets/oceania.png";
import america from "../../assets/america.jpg";
import africa from "../../assets/africa.jpg";
import asia from "../../assets/asia.jpg";
import europa from "../../assets/europa.png";

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
          image={oceania}
        />
        <FilterOption
          onFilters={onFilters}
          clean={cleanFilters}
          name="America"
          code="NA SA"
          image={america}
        />
        <FilterOption
          onFilters={onFilters}
          clean={cleanFilters}
          name="Asia"
          code="AS"
          image={asia}
        />
        <FilterOption
          onFilters={onFilters}
          clean={cleanFilters}
          name="Europa"
          code="EU"
          image={europa}
        />
        <FilterOption
          onFilters={onFilters}
          clean={cleanFilters}
          name="Africa"
          code="AF"
          image={africa}
        />
      </div>
    </div>
  );
}
