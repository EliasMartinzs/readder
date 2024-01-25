const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f89215d985msh0d2201ee70de0b9p1d1f9bjsne88d0f92a600",
    "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
  },
};

const url = "https://myanimelist.p.rapidapi.com/v2/anime";
const url2 = "https://myanimelist.p.rapidapi.com/anime/top";
const urlManga = "https://myanimelist.p.rapidapi.com/manga/top";

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
  const response = await fetch(`${url}/recommendations?p=5`, options);
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
      `https://myanimelist.p.rapidapi.com/v2/anime/search?q=${query}&n=20`,
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

export const fetchManga = async (query: string) => {
  if (!query || query.length <= 0) {
    console.error("Invalid ID:", query);
    throw new Error("Invalid ID");
  }

  try {
    const response = await fetch(`${urlManga}/${query}`, options);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error fetching data:", errorText);
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetch mangas:", error);
    throw error;
  }
};
