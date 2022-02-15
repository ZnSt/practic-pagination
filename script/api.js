const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = "f7d6a30af5958d06330f7e1173f523fb";

// ("https://api.themoviedb.org/3/trending/movies/day?api_key=f7d6a30af5958d06330f7e1173f523fb&page=1");

const fetchData = (page) => {
  return fetch(
    `${BASE_URL}/trending/movies/day?api_key=${API_KEY}&page=${page}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.message);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
};

const fetchDetails = (id) => {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.message);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
};
export { fetchData, fetchDetails };
