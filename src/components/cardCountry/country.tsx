import styles from "./style.module.css";
type CardCountryProps = {
  countryImage: string;
  flagImage: string;
  name: string;
  continent: string;
};

export function CardCountry({
  countryImage,
  flagImage,
  name,
  continent,
}: CardCountryProps) {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.mainImage}
        src="../../../../public/palace-gd74aed6eb_1280.jpg"
        alt=""
      />
      <div className={styles.cardBody}>
        <img
          className={styles.cardBody__Flag}
          src="../../../../public/palace-gd74aed6eb_1280.jpg"
          alt=""
        />
        <div className={styles.cardBody__content}>
          <h3>United Kingdom</h3>
          <p>Europe</p>
        </div>
      </div>
    </div>
  );
}
