/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
// import styles from "./style.module.css";
import { ContainerCountries } from "../../components/containerCountries/containerCountries";

export function AmericaPage() {
  const [page, setPage] = useState(1);

  const handlePage = (index: number) => {
    setPage(index + 1);
  };
  return (
    <div>
      <ContainerCountries page={page} handlePage={handlePage} />
    </div>
  );
}
