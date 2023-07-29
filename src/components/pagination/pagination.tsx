import styles from "./style.module.css";

export function PaginationSection({
  pageNumber,
  page,
  handlePage,
}: {
  pageNumber: number;
  page: number;
  handlePage: (index: number) => void;
}) {
  return (
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
  );
}
