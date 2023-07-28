/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { getPhotoCountry } from "../../services/pixabay";
import { useSearchParams } from "react-router-dom";
import { CardCountryProps } from "../../types/types";

export function CardCountry({ code, name, continent }: CardCountryProps) {
  const [countryImage, setCountryImage] = useState({
    country: "",
    flag: "",
  });
  const [_searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getPhotoCountry(name).then((data) => {
      setCountryImage({
        country: data.country.hits[0]?.webformatURL,
        flag: data.flag.hits[0]?.webformatURL,
      });
    });
  }, [name]);

  function showInfo() {
    setSearchParams(
      `country=${code}&image=${countryImage.country}&flag=${countryImage.flag}`
    );
  }

  return (
    <div onClick={showInfo} className={styles.cardContainer}>
      <img className={styles.mainImage} src={countryImage.country} alt="" />
      <div className={styles.cardBody}>
        <img className={styles.cardBody__Flag} src={countryImage.flag} alt="" />
        <div className={styles.cardBody__content}>
          <h3>{name}</h3>
          <p>{continent?.name}</p>
        </div>
      </div>
    </div>
  );
}
