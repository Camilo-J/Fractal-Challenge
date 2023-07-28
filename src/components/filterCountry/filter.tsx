import { useState } from "react";
import { FilterOption } from "./filterOption";
import styles from "./style.module.css";
type FilterProps = {
  onFilters: (params: string, clean: boolean, cleanAll: boolean) => void;
};
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
        />
        <FilterOption
          onFilters={onFilters}
          clean={cleanFilters}
          name="America"
          code="NA SA"
        />
        <FilterOption
          onFilters={onFilters}
          clean={cleanFilters}
          name="Asia"
          code="AS"
        />
        <FilterOption
          onFilters={onFilters}
          clean={cleanFilters}
          name="Europa"
          code="EU"
        />
        <FilterOption
          onFilters={onFilters}
          clean={cleanFilters}
          name="Africa"
          code="AF"
        />
      </div>
    </div>
  );
}
