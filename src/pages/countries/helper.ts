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
