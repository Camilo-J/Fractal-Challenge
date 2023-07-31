/* eslint-disable @typescript-eslint/no-unused-vars */
import { DataCountriesResponse, Country } from "../../types/types";

export function filterContinents(
  data: DataCountriesResponse,
  filter: string[]
) {
  const filteredCountries: Country[] = data?.countries.filter(
    (country: Country) => {
      return filter.includes(country.continent.code || "");
    }
  );
  return filteredCountries;
}

export function searchCountries(
  searchedCountry: string,
  data: DataCountriesResponse
) {
  if (!searchedCountry) return [];

  const filteredCountries: Country[] = data?.countries.filter(
    (country: Country) => {
      return country.name.toLowerCase().includes(searchedCountry.toLowerCase());
    }
  );
  return filteredCountries;
}

export function sortCountries(
  cleanAll: boolean,
  clean: boolean,
  params: string,
  filter: string[]
) {
  if (cleanAll) return [];

  if (clean) {
    const filterData = params.split(" ");
    const newFilter = filter.filter((item) => {
      if (filterData.length === 1) return item !== params;
      if (filterData.length === 2)
        return item !== filterData[0] && item !== filterData[1];
    });
    return newFilter;
  }

  if (params.split(" ").length === 1) {
    return [...filter, params];
  } else {
    return [...filter, ...params.split(" ")];
  }
}
