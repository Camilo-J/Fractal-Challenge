/* eslint-disable @typescript-eslint/no-unused-vars */
import { gql, useQuery } from "@apollo/client";
import { CardCountry } from "../../components/cardCountry/country";
import styles from "./style.module.css";
import { useState } from "react";
import { InfoCountry } from "../../components/infoCountry/infoCountry";
import { useSearchParams } from "react-router-dom";
import { Input } from "../../components/inputSearch/input";
import { filterContinents, searchCountries } from "./helper";
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

type Country = {
  code: string;
  name: string;
  continent: { name: string; code: string };
};

type AccuType = {
  [key: number]: Country[];
};

export function Countries() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<string[]>([]);
  const [searchParams, _setSearchParams] = useSearchParams();
  const selectedCountry = searchParams.get("country");
  const searchedCountry = searchParams.get("query");
  const result = useQuery(ALL_COUNTRIES);
  let { data }: { data: { countries: Country[] } } = result;
  let option = 0;
  let pageNumber = 0;
  if (data) pageNumber = Math.ceil(data?.countries.length / 9);

  if (searchedCountry && data)
    data = { countries: searchCountries(searchedCountry, data) };
  if (filter.length > 0 && data) {
    data = { countries: filterContinents(data, filter) };
    pageNumber = Math.ceil(data?.countries.length / 9);
  }

  const cont: AccuType = {};
  const newdata = data?.countries.reduce((accu, current, index) => {
    if (index % 9 === 0) {
      option++;
    }
    accu[`${option}`] = accu[`${option}`] || [];
    accu[`${option}`].push(current);
    return accu;
  }, cont);

  const handlePage = (index: number) => {
    setPage(index + 1);
  };

  function filters(params: string, clean: boolean, cleanAll: boolean) {
    if (cleanAll) {
      setFilter([]);
      return;
    }

    if (clean) {
      const newFilter = filter.filter((item) => item !== params);
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
        <div className={styles.paginationContainer}>
          {[...Array(pageNumber)].map((_x, index) => (
            <button
              className={`${
                page === index + 1 ? styles["button--active"] : ""
              }`}
              onClick={() => handlePage(index)}
              key={index}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
