/* eslint-disable @typescript-eslint/no-unused-vars */
import { gql, useQuery } from "@apollo/client";
import styles from "./style.module.css";
import { useSearchParams } from "react-router-dom";
import closeIcon from "../../../public/closeBlack.svg";
const GET_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      capital
      languages {
        name
      }
      continent {
        name
      }
      states {
        name
      }
      currencies
    }
  }
`;

export function InfoCountry() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCountry = searchParams.get("country");
  const image = searchParams.get("image");
  const flag = searchParams.get("flag");
  const { data } = useQuery(GET_COUNTRY, {
    variables: { code: `${selectedCountry}` },
  });

  function closeInfo() {
    setSearchParams();
  }

  return (
    <div className={styles.infoContainer}>
      <img
        className={styles.closeIcon}
        src={closeIcon}
        alt="close-icon-info-country"
        onClick={closeInfo}
      />
      <img className={styles.infoCountry__img} src={image || ""} alt="" />
      <div>
        <div className={styles.cardBody}>
          <img className={styles.cardBody__Flag} src={flag || ""} alt="" />
          <div className={styles.cardBody__content}>
            <h3>{data?.country.name}</h3>
            <p>{data?.country.continent.name}</p>
          </div>
        </div>
        <div className={styles.containerContent}>
          <p className={styles.cardContent__p}>
            Capital: &nbsp; &nbsp;
            <span>{data?.country.capital ?? "----"}</span>
          </p>
          <p className={styles.cardContent__p}>
            Language: &nbsp; &nbsp;
            <span>{data?.country.languages[0]?.name ?? "----"}</span>
          </p>
          <p className={styles.cardContent__p}>
            Currency: &nbsp; &nbsp;
            <span>
              {data?.country.currencies[0] ?? "----"},
              {data?.country.currencies[1] ?? "----"}
            </span>
          </p>
          <div className={styles.containerRegion}>
            <p className={styles.cardContent__p}>Region:</p>
            <div className={styles.containerRegion__regions}>
              <p>{data?.country?.states[0]?.name ?? "----"}</p>
              <p>{data?.country?.states[1]?.name ?? "----"}</p>
              <p>{data?.country?.states[2]?.name ?? "----"}</p>
              <p>{data?.country?.states[3]?.name ?? "----"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
