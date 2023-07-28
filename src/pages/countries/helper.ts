type Country = {
  code: string;
  name: string;
  continent: { name: string; code: string };
};

export function filterContinents(
  data: { countries: Country[] },
  filter: string[]
) {
  const filteredCountries: Country[] = data?.countries.filter(
    (country: Country) => {
      return filter.includes(country.continent.code);
    }
  );
  return filteredCountries;
}

export function searchCountries(
  searchedCountry: string,
  data: { countries: Country[] }
) {
  if (!searchedCountry) return [];

  const filteredCountries: Country[] = data?.countries.filter(
    (country: Country) => {
      return country.name.toLowerCase().includes(searchedCountry.toLowerCase());
    }
  );
  return filteredCountries;
}
