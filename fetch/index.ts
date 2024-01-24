// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "488fbc12c0msh86d32a72473524dp117130jsnd5dc39ebcc7f",
//     "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
//   },
// };

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "0c6ed00467msh048b286376d4202p1eed16jsnc9846997a5b5",
//     "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
//   },
// };

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "ee3521f564msh6202e5fc5df0354p1b3741jsnca3874db850a",
//     "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
//   },
// };

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a5a32f6f2fmshefc54297f375ed8p1c83b2jsnaa1c3d3f131f",
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

export const fetchSearch = async (query: string) => {
  if (!query) {
    throw new Error("error");
  }

  try {
    const response = await fetch(
      `https://myanimelist.p.rapidapi.com/v2/anime/search?q=${query}&n=50`,
      options
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

export const fetchAnimeById = async (id: number) => {
  if (!id || id <= 0) {
    console.error("Invalid ID:", id);
    throw new Error("Invalid ID");
  }

  try {
    const response = await fetch(
      `https://myanimelist.p.rapidapi.com/anime/${id}`,
      options
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error fetching data:", errorText);
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetchAnimeById:", error);
    throw error;
  }
};
