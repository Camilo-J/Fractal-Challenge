/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { getPhotoCountry } from "../../services/pixabay";
import { useSearchParams } from "react-router-dom";
import { CardCountryProps } from "../../types/types";
import { GetImageProps, saveImageSessionStorage } from "./helper";

export function CardCountry({ code, name, continent }: CardCountryProps) {
  const data = sessionStorage.getItem(`countryImage-${name}`);
  let images: GetImageProps = {
    country: null,
    flag: null,
  };
  if (data) images = JSON.parse(data);

  const [countryImage, setCountryImage] = useState({
    country: "",
    flag: "",
  });
  const [_searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!data) {
      getPhotoCountry(name).then((data) => {
        saveImageSessionStorage({ name, data });
        setCountryImage({
          country: data.country.hits[0]?.webformatURL,
          flag: data.flag.hits[0]?.webformatURL,
        });
      });
    }
  }, [name, data]);

  function showInfo() {
    setSearchParams(
      `country=${code}&image=${images.country || countryImage.country}&flag=${
        images.flag || countryImage.flag
      }`
    );
  }

  return (
    <div onClick={showInfo} className={styles.cardContainer}>
      <img
        className={styles.mainImage}
        src={images.country || countryImage.country}
        alt=""
      />
      <div className={styles.cardBody}>
        <img
          className={styles.cardBody__Flag}
          src={images.flag || countryImage.flag}
          alt=""
        />
        <div className={styles.cardBody__content}>
          <h3>{name}</h3>
          <p>{continent?.name}</p>
        </div>
      </div>
    </div>
  );
}
