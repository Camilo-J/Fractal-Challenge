import { Location } from "react-router-dom";
import { AccumulatorType, ContinentName } from "../types/types";
import { DataCountriesResponse } from "../types/types";

export function continentValue(location: Location) {
  const continent = location.pathname.slice(1);
  const value: string = ContinentName[continent as keyof typeof ContinentName];
  if (value.split(" ").length > 1) return value.split(" ");

  return [value];
}

export function paginateCountries(data: DataCountriesResponse) {
  let option = 0;
  const paginatedData = data?.countries.reduce((accu, current, index) => {
    if (index % 9 === 0) option++;

    accu[`${option}`] = accu[`${option}`] || [];
    accu[`${option}`].push(current);
    return accu;
  }, {} as AccumulatorType);
  return paginatedData;
}

export function getNumberPages(data: DataCountriesResponse) {
  const pages = Math.ceil(data?.countries.length / 9);
  return pages;
}
