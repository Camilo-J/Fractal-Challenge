import { useEffect, useState } from "react";
import { FilterOptionProps, FilterOptionState } from "../../types/types";

export function FilterOption({
  name,
  clean,
  code,
  image,
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
      className={` w-28 rounded-xl cursor-pointer ${
        selected ? "filterChecked" : ""
      } sm:w-36 md:w-48`}
      onClick={onSelected}
    >
      <img
        className="w-full h-20 mb-1 object-cover rounded-xl sm:h-24 md:h-32"
        src={image || ""}
        alt="continent"
      />
      <p className="text-gray-400 text-sm sm:text-base">{name}</p>
    </div>
  );
}
