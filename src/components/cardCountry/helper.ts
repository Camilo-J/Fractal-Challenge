type SaveImageProps = {
  name: string;
  data: {
    country: { hits: [{ webformatURL: string }] };
    flag: { hits: [{ webformatURL: string }] };
  };
};

export type GetImageProps = { country: string | null; flag: string | null };

export function saveImageSessionStorage({ name, data }: SaveImageProps) {
  sessionStorage.setItem(
    `countryImage-${name}`,
    JSON.stringify({
      country: data.country.hits[0]?.webformatURL,
      flag: data.flag.hits[0]?.webformatURL,
    })
  );
}
