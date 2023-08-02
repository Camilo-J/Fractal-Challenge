/* eslint-disable @typescript-eslint/no-unused-vars */
import { gql, useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import closeIcon from "../../../public/closeBlack.svg";
const GET_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      capital
      languages {
        name
      }
      continent {
        name
      }
      states {
        name
      }
      currencies
    }
  }
`;

export function InfoCountry() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCountry = searchParams.get("country");
  const image = searchParams.get("image");
  const flag = searchParams.get("flag");
  const { data } = useQuery(GET_COUNTRY, {
    variables: { code: `${selectedCountry}` },
  });

  function closeInfo() {
    setSearchParams();
  }

  return (
    <div className="fixed max-w-xs top-20 box-border bg-white p-5 h-fit shadow-md md:w-80 md:top-44 lg:left-5 xl:static xl:w-96 xl:ml-5 xl:p-5 ">
      <img
        className="w-8 cursor-pointer mb-2"
        src={closeIcon}
        alt="close-icon-info-country"
        onClick={closeInfo}
      />
      <img
        className="rounded-lg h-44 w-full object-cover"
        src={image || ""}
        alt=""
      />
      <div>
        <div className="flex gap-6 pt-4">
          <img className="w-20" src={flag || ""} alt="" />
          <div>
            <h3 className="text-xl font-bold text-sky-450">
              {data?.country.name}
            </h3>
            <p className="text-base text-stone-350">
              {data?.country.continent.name}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-stone-350 text-xl font-semibold">
            Capital: &nbsp; &nbsp;
            <span className="text-lg font-normal ">
              {data?.country.capital ?? "----"}
            </span>
          </p>
          <p className="text-stone-350 text-xl font-semibold">
            Language: &nbsp; &nbsp;
            <span className="text-lg font-normal ">
              {data?.country.languages[0]?.name ?? "----"}
            </span>
          </p>
          <p className="text-stone-350 text-xl font-semibold">
            Currency: &nbsp; &nbsp;
            <span className="text-lg font-normal ">
              {data?.country.currencies[0] ?? "----"},
              {data?.country.currencies[1] ?? "----"}
            </span>
          </p>
          <div>
            <p className="text-stone-350 text-xl font-semibold">Region:</p>
            <div className="mt-2 p-4 text-stone-550 flex flex-col gap-3 shadow-xl ">
              <p>{data?.country?.states[0]?.name ?? "----"}</p>
              <p>{data?.country?.states[1]?.name ?? "----"}</p>
              <p>{data?.country?.states[2]?.name ?? "----"}</p>
              <p>{data?.country?.states[3]?.name ?? "----"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
