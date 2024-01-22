// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "488fbc12c0msh86d32a72473524dp117130jsnd5dc39ebcc7f",
//     "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
//   },
// };

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0c6ed00467msh048b286376d4202p1eed16jsnc9846997a5b5",
    "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
  },
};

const url = "https://myanimelist.p.rapidapi.com/v2/anime";
const url2 = "https://myanimelist.p.rapidapi.com/anime/top";

export const fetchAnimeSeasonal = async () => {
  const response = await fetch(`${url}/seasonal?year=2024`, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchTVShows = async () => {
  const response = await fetch(`${url}/seasonal?year=2024`, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const result = await response.json();

  const tvShows = [...result["TV (New)"], ...result["TV (Continuing)"]];
  return tvShows;
};

export const fetchRecomendations = async () => {
  const response = await fetch(`${url}/recommendations?p=1`, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const result = await response.json();

  const recomendations = [...result["recommendations"]];

  return recomendations;
};

export const fetchMovies = async () => {
  const response = await fetch(
    "https://myanimelist.p.rapidapi.com/anime/top/movie",
    options
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
};

export const fetchSeasonal = async (query: string) => {
  const response = await fetch(
    `${url}/seasonal?year=2024&season=${query}`,
    options
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const result = await response.json();

  const winter = [...result["TV (New)"]];

  return winter;
};

export const fetchAnimes = async (query: string) => {
  const response = await fetch(`${url2}/${query}`, options);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
