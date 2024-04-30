import axios from 'axios';

const ACCESS_KEY = 'dEm4bysMWlOkPfqhJxSBpBX8NLy4bXDiFpPqIY80zxU';
axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async () => {
  const response = await axios.get(`search/photos?client_id=${ACCESS_KEY}&query=car&page=1&urls=small`);

  return response.data.results;
  
};

