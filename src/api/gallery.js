import axios from 'axios';

const galleryInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  params: {
    url: '',
    client_id: 'acVujeomuaS1q3_vwesJkm8Mq5vVW_MEzbexo3KLiyo',
    orientation: 'portrait',
  },
});

export const fetchImagesBySearchValue = async (searchValue, page) => {
  const { data } = await galleryInstance.get(
    `/search/photos?query=${searchValue}&page=${page}`
  );
  return data;
};
