import { useState } from "react";
import { FilterOption } from "./filterOption";
import { FilterProps } from "../../types/types";
import oceania from "../../../public/oceania.png";
import america from "../../../public/america.jpg";
import africa from "../../../public/africa.jpg";
import asia from "../../../public/asia.jpg";
import europa from "../../../public/europa.png";

export function Filter({ onFilters }: FilterProps) {
  const [cleanFilters, setCleanFilters] = useState(false);

  function onCleaned() {
    setCleanFilters(!cleanFilters);
    localStorage.setItem("filters", JSON.stringify({}));
    onFilters("", false, true);
  }

  return (
    <div className="absolute top-20 left-0 p-4 w-full rounded-3xl bg-white shadow-md sm:top-24">
      <div className="text-gray-400 flex justify-between sm:text-xl">
        <p>Filtrar por continentes</p>
        <button onClick={onCleaned} className="text-sky-400 font-medium">
          Limpiar
        </button>
      </div>
      <div className="my-4 flex flex-wrap gap-6 justify-center">
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
