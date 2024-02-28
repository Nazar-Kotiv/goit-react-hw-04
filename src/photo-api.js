import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const myKey = "KICdsRUk31XDxm7026n-qirFOU6Qk-UtdyHj82bZLB8";

export const fetchPhoto = async (searchQuery) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      per_page: 10,
      client_id: myKey,
    },
  });

  return response.data.results;
};
