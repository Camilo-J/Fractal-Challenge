import styles from "./style.module.css";
import search from "../../../public/search.svg";
export function Input() {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputContainer__content}>
        <label
          className={styles.inputContainer__content__title}
          htmlFor="country"
        >
          Pais
        </label>
        <input
          type="text"
          id="country"
          name="country"
          placeholder="Escribe el pais que desear ver"
        />
      </div>
      <button className={styles.inputContainer__button}>
        <img className={styles.button__icon} src={search} alt="" />
        Buscar
      </button>
    </div>
  );
}
