import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { getPhotoCountry } from "../../services/pixabay";
type CardCountryProps = {
  name: string;
  continent: { name: string };
};

export function CardCountry({ name, continent }: CardCountryProps) {
  const [countryImage, setCountryImage] = useState({
    country: "",
    flag: "",
  });

  useEffect(() => {
    getPhotoCountry(name).then((data) => {
      setCountryImage({
        country: data.country.hits[0]?.webformatURL,
        flag: data.flag.hits[0]?.webformatURL,
      });
    });
  }, [name]);

  return (
    <div className={styles.cardContainer}>
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
