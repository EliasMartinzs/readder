import {
  fetchAnimeById,
  fetchAnimeSeasonal,
  fetchAnimes,
  fetchMovies,
  fetchRecomendations,
  fetchSearch,
  fetchSeasonal,
  fetchTVShows,
} from "@/fetch";
import {
  Anime,
  AnimeDetails,
  AnimeMovies,
  AnimeRecommendation,
  AnimeSearch,
} from "@/types";
import { UseQueryResult, useQuery } from "react-query";

export const useAnimeSeasonal = () => {
  return useQuery("animeSeasonal", fetchAnimeSeasonal);
};

export const useTVShows = (): UseQueryResult<Anime[], Error> => {
  return useQuery<Anime[], Error>("tvShows", fetchTVShows, {
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  });
};

export const useRecomendations = (): UseQueryResult<
  AnimeRecommendation[],
  Error
> => {
  return useQuery("recomendations", fetchRecomendations, {
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  });
};

export const useMovies = (): UseQueryResult<AnimeMovies[], Error> => {
  return useQuery("movies", fetchMovies, {
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  });
};

export const useSeasonal = (query: string): UseQueryResult<Anime[], Error> => {
  return useQuery(["animeSeasonData", query], () => fetchSeasonal(query), {
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  });
};

export const getAnimes = (
  query: string
): UseQueryResult<AnimeMovies[], Error> => {
  return useQuery(["getAnimes", query], () => fetchAnimes(query), {
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  });
};

export const useSearchAnimes = (
  query: string
): UseQueryResult<AnimeSearch[], Error> => {
  return useQuery(["searchAnimes", query], () => fetchSearch(query), {
    enabled: !!query,
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  });
};

export const useAnimeById = (
  id: number
): UseQueryResult<AnimeDetails, Error> => {
  return useQuery(["anime", id], () => fetchAnimeById(id), {
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
    onError: (error) => {
      console.error("Error in useAnimeById:", error);
    },
    enabled: !!id,
  });
};
