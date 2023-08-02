import { useLocation } from "react-router-dom";
import { Country, GraphQLResponseCountries } from "../../types/types";
import {
  continentValue,
  getNumberPages,
  paginateCountries,
} from "../../utils/utils";
import { CardCountry } from "../cardCountry/country";
import { PaginationSection } from "../pagination/pagination";
import { gql, useQuery } from "@apollo/client";

const GET_COUNTRIES = gql`
  query GetCountries($continent: [String!]) {
    countries(filter: { continent: { in: $continent } }) {
      code
      name
      continent {
        name
      }
    }
  }
`;

export function ContainerCountries({
  page,
  handlePage,
}: {
  page: number;
  handlePage: (index: number) => void;
}) {
  const location = useLocation();
  const codeContinent = continentValue(location);
  const result = useQuery(GET_COUNTRIES, {
    variables: { continent: codeContinent },
  });
  const { data }: GraphQLResponseCountries = result;
  let pageNumber = 0;
  if (data) pageNumber = getNumberPages(data);
  const newdata = paginateCountries(data);

  return (
    <div className="p-4">
      <div className="my-4 grid auto-cols-fr gap-5 place-items-center sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {newdata &&
          newdata[page]?.map(({ code, name, continent }: Country) => (
            <CardCountry
              code={code}
              key={`id-${code}`}
              name={name}
              continent={continent}
            />
          ))}
      </div>
      <PaginationSection
        handlePage={handlePage}
        pageNumber={pageNumber}
        page={page}
      />
    </div>
  );
}
