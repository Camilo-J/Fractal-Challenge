import styles from "./style.module.css";

export function InfoCountry() {
  return (
    <div className={styles.infoContainer}>
      <img
        className={styles.infoCountry__img}
        src="https://pixabay.com/get/g124e00b23acc39b80221f04e26b03a6f131ae8080a8bf5514156c3bd3bfd7dce49614c3beda5e30a0d5bb2d703b09cddb852659ac96c3bda7a40d98be3b0dcce_640.jpg"
        alt=""
      />
      <div>
        <div className={styles.cardBody}>
          <img
            className={styles.cardBody__Flag}
            src="https://pixabay.com/get/g124e00b23acc39b80221f04e26b03a6f131ae8080a8bf5514156c3bd3bfd7dce49614c3beda5e30a0d5bb2d703b09cddb852659ac96c3bda7a40d98be3b0dcce_640.jpg"
            alt=""
          />
          <div className={styles.cardBody__content}>
            <h3>United Kingdom</h3>
            <p>Europe</p>
          </div>
        </div>
        <div className={styles.containerContent}>
          <p className={styles.cardContent__p}>
            Capital: &nbsp; &nbsp;
            <span>London</span>
          </p>
          <p className={styles.cardContent__p}>
            Language: &nbsp; &nbsp; <span>English</span>
          </p>
          <p className={styles.cardContent__p}>
            Population: &nbsp;<span>500k People</span>
          </p>
          <p className={styles.cardContent__p}>
            Currency: &nbsp; &nbsp; <span>Euro, Dollar</span>
          </p>
          <div className={styles.containerRegion}>
            <p className={styles.cardContent__p}>Region:</p>
            <div className={styles.containerRegion__regions}>
              <p>Santa Cruz</p>
              <p>Cordova</p>
              <p>Jujuy</p>
              <p>Tucuman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
