import { useEffect, useState } from "react";
import styles from "./filterOption.module.css";

type FilterOptionProps = {
  name: string;
  code: string;
  clean?: boolean;
  onFilters: (params: string, clean: boolean, cleanAll: boolean) => void;
};

type FilterOptionState = {
  [key: string]: boolean;
};

export function FilterOption({
  name,
  clean,
  code,
  onFilters,
}: FilterOptionProps) {
  const state: FilterOptionState | null = JSON.parse(
    localStorage.getItem("filters") || "{}"
  );
  const [selected, setSelected] = useState(
    (state && state[`${code}`]) || false
  );

  function onSelected() {
    setSelected(!selected);
    localStorage.setItem(
      "filters",
      JSON.stringify({ ...state, [code]: !selected })
    );
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
