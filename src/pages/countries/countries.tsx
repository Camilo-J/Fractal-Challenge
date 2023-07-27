import { gql, useQuery } from "@apollo/client";
import { CardCountry } from "../../components/cardCountry/country";
import styles from "./style.module.css";
import { useState } from "react";
const ALL_COUNTRIES = gql`
  query {
    countries {
      code
      name
      continent {
        name
      }
    }
  }
`;

type Country = {
  code: string;
  name: string;
  continent: { name: string };
};

type AccuType = {
  [key: number]: Country[];
};

export function Countries() {
  const [page, setPage] = useState(1);
  const result = useQuery(ALL_COUNTRIES);
  const { data }: { data: { countries: [] } } = result;
  let option = 0;
  let pageNumber = 0;
  if (data) {
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

  return (
    <section>
      <div className={styles.countriesContainer}>
        {newdata &&
          newdata[page]?.map(({ code, name, continent }: Country) => (
            <CardCountry key={`id-${code}`} name={name} continent={continent} />
          ))}
      </div>
      <div className={styles.paginationContainer}>
        {[...Array(pageNumber)].map((_x, index) => (
          <button
            className={`${page === index + 1 ? styles["button--active"] : ""}`}
            onClick={() => handlePage(index)}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
