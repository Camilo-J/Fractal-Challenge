/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { ContainerCountries } from "../../components/containerCountries/containerCountries";

export function AmericaPage() {
  const [page, setPage] = useState(1);

  const handlePage = (index: number) => {
    setPage(index + 1);
  };
  return <ContainerCountries page={page} handlePage={handlePage} />;
}
