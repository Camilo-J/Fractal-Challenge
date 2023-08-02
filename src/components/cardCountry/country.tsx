/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
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
    <div
      onClick={showInfo}
      className="bg-white w-72 rounded-3xl cursor-pointer sm:w-64 sm:h-64 md:w-full md:h-72 xl:max-w-xs"
    >
      <img
        className="rounded-t-3xl w-full h-40 object-cover sm:h-36 md:h-40"
        src={images.country || countryImage.country}
        alt="country's landscape"
      />
      <div className="flex gap-4 p-3">
        <img
          className="w-20 h-14 object-cover sm:h-12 md:h-16 md:w-24"
          src={images.flag || countryImage.flag}
          alt=""
        />
        <div className="flex flex-col gap-2 ">
          <h3 className="text-sky-450 text-xl font-semibold sm:text-lg md:text-xl">
            {name}
          </h3>
          <p className="text-gray-400 text-lg sm:text-base md:text-lg">
            {continent?.name}
          </p>
        </div>
      </div>
    </div>
  );
}
