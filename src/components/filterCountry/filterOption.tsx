import { useEffect, useState } from "react";
import styles from "./filterOption.module.css";

type FilterOptionProps = {
  name: string;
  code: string;
  clean?: boolean;
  onFilters: (params: string, clean: boolean, cleanAll: boolean) => void;
};

export function FilterOption({
  name,
  clean,
  code,
  onFilters,
}: FilterOptionProps) {
  const [selected, setSelected] = useState(false);

  function onSelected() {
    setSelected(!selected);
    onFilters(code, selected, false);
  }

  useEffect(() => {
    if (clean) setSelected(false);
  }, [clean]);

  return (
    <div
      className={`${styles.containerContinent} ${
        selected ? styles.checked : ""
      }`}
      onClick={onSelected}
    >
      <img src="public/palace-gd74aed6eb_1280.jpg" alt="continent" />
      <p>{name}</p>
    </div>
  );
}
