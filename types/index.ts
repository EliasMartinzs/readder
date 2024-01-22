export interface Genre {
  name: string;
  url: string;
}

export interface Studio {
  name: string;
  url: string;
}

export interface Anime {
  title: string;
  type: string;
  url: string;
  image_url: string;
  score: number;
  members: number;
  synopsis: string;
  date?: {
    date: string;
    timestamp?: number;
  };
  episodes: number;
  duration: number;
  properties: {
    studio?: Studio[];
    source?: string;
    theme?: Genre[];
  };
}

interface AnimeRecommendations {
  title: string;
  picture_url: string;
  myanimelist_url: string;
  myanimelist_id: number;
}

interface Recommendation extends AnimeRecommendations {
  description: string;
}

interface AuthorRecomendation {
  name: string;
  url: string;
}

export interface AnimeRecommendation {
  liked: AnimeRecommendations;
  recommendation: Recommendation;
  author: AuthorRecomendation;
  recommendation_age: string;
}

export interface AnimeMovies {
  title: string;
  picture_url: string;
  myanimelist_url: string;
  myanimelist_id: number;
  rank: number;
  score: number;
  type: string;
  aired_on: string;
  members: number;
}
