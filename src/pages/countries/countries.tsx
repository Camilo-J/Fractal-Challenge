/* eslint-disable @typescript-eslint/no-unused-vars */
import { gql, useQuery } from "@apollo/client";
import { CardCountry } from "../../components/cardCountry/country";
import styles from "./style.module.css";
import { useState } from "react";
import { InfoCountry } from "../../components/infoCountry/infoCountry";
import { useSearchParams } from "react-router-dom";
import { Input } from "../../components/inputSearch/input";
import { filterContinents, searchCountries } from "./helper";
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
    if (cleanAll) {
      setFilter([]);
      return;
    }

    if (clean) {
      const filterData = params.split(" ");
      const newFilter = filter.filter((item) => {
        if (filterData.length === 1) return item !== params;
        if (filterData.length === 2)
          return item !== filterData[0] && item !== filterData[1];
      });
      setFilter(newFilter);
      return;
    }

    if (params.split(" ").length === 1) {
      setFilter([...filter, params]);
    } else {
      setFilter([...filter, ...params.split(" ")]);
    }
  }
  return (
    <section className={styles.wrapped}>
      <Input onFilters={filters} />
      <div className={styles.mainContainer}>
        <div className={styles.countriesContainer}>
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
