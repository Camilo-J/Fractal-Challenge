/* eslint-disable @typescript-eslint/no-unused-vars */
import { gql, useQuery } from "@apollo/client";
import { CardCountry } from "../../components/cardCountry/country";
import { useState } from "react";
import { InfoCountry } from "../../components/infoCountry/infoCountry";
import { useSearchParams } from "react-router-dom";
import { Input } from "../../components/inputSearch/input";
import { filterContinents, searchCountries, sortCountries } from "./helper";
import { PaginationSection } from "../../components/pagination/pagination";
import { GraphQLResponseCountries, Country } from "../../types/types";
import { getNumberPages, paginateCountries } from "../../utils/utils";
const ALL_COUNTRIES = gql`
  query {
    countries {
      code
      name
      continent {
        code
        name
      }
    }
  }
`;

export function Countries() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<string[]>([]);
  const [searchParams, _setSearchParams] = useSearchParams();
  const selectedCountry = searchParams.get("country");
  const searchedCountry = searchParams.get("query");
  const result = useQuery(ALL_COUNTRIES);
  let { data }: GraphQLResponseCountries = result;
  let pageNumber = 0;
  if (data) pageNumber = getNumberPages(data);

  if (searchedCountry && data)
    data = { countries: searchCountries(searchedCountry, data) };
  if (filter.length > 0 && data) {
    data = { countries: filterContinents(data, filter) };
    pageNumber = getNumberPages(data);
  }

  const newdata = paginateCountries(data);

  const handlePage = (index: number) => {
    setPage(index + 1);
  };

  function filters(params: string, clean: boolean, cleanAll: boolean) {
    const result = sortCountries(cleanAll, clean, params, filter);
    setFilter(result);
  }

  return (
    <section className="flex flex-col gap-5 items-center p-8 min-h-screen">
      <Input onFilters={filters} />
      <div className="w-full lg:mt-6 xl:flex">
        <div className="grid auto-cols-fr gap-5 place-items-center sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-auto-fit xl:w-full ">
          {newdata &&
            newdata[page]?.map(({ code, name, continent }: Country) => (
              <CardCountry
                code={code}
                key={`id-${code}`}
                name={name}
                continent={continent}
              />
            ))}
        </div>
        {selectedCountry && <InfoCountry />}
      </div>
      {!searchedCountry && (
        <PaginationSection
          handlePage={handlePage}
          page={page}
          pageNumber={pageNumber}
        />
      )}
    </section>
  );
}
