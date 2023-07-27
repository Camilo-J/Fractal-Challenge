import { handleUrl } from "./handler";

const API_KEY = import.meta.env.VITE_API_KEY;

export async function getPhotoCountry(name: string) {
  const country = await handleUrl(
    `https://pixabay.com/api/?key=${API_KEY}&q=${name}&lang=en&image_type=photo&orientation=horizontal&per_page=3`
  );
  const flag = await handleUrl(
    `https://pixabay.com/api/?key=${API_KEY}&q=${name} flag&lang=en&image_type=photo&orientation=horizontal&per_page=3`
  );
  const data = { country, flag };

  return data;
}
