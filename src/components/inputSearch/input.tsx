/* eslint-disable @typescript-eslint/no-unused-vars */
import search from "../../../public/search.svg";
import filterImage from "../../../public/filter.svg";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Filter } from "../filterCountry/filter";
import { InputProps } from "../../types/types";

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
    <div className="relative flex justify-between py-2 px-3 bg-white w-full rounded-3xl sm:px-4 sm:py-2.5 md:max-w-2xl">
      <div className="w-28 sm:w-56">
        <label className="text-gray-400 text-xl sm:text-2xl" htmlFor="country">
          Pais
        </label>
        <input
          className="text-gray-400 w-full h-6 py-1 bg-white focus:outline-none"
          type="text"
          id="country"
          name="country"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe el pais que desear ver"
          onClick={filterCountries}
        />
      </div>
      <button onClick={filterCountries} className="cursor-pointer">
        <img className="w-6 sm:w-8" src={filterImage} alt="" />
      </button>
      <button
        className="bg-sky-450 px-3 flex justify-between items-center gap-3 rounded-3xl text-white font-medium sm:w-32 sm:text-xl sm:justify-around"
        onClick={searchCountries}
      >
        <img className="w-5 sm:w-7" src={search} alt="icon-search" />
        Buscar
      </button>
      {filter && <Filter onFilters={onFilters} />}
    </div>
  );
}
