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

export interface AnimeSearch {
  title: string;
  description: string;
  picture_url: string;
  myanimelist_url: string;
  myanimelist_id: number;
}
interface AlternativeTitles {
  synonyms: string;
  japanese: string;
  english: string;
}

interface InformationType {
  name: string;
  url: string;
}

interface Producer {
  name: string;
  url: string;
}

interface Demographic {
  name: string;
  url: string;
}

interface Statistics {
  score: number;
  ranked: number;
  popularity: number;
  members: number;
  favorites: number;
}

interface Character {
  name: string;
  picture_url: string;
  myanimelist_url: string;
  voice_actor_name: string;
  voice_actor_picture_url: string;
  voice_actor_myanimelist_url: string;
}

export interface AnimeDetails {
  title_ov: string;
  title_en: string;
  synopsis: string;
  alternative_titles: AlternativeTitles;
  information: {
    type: InformationType[];
    episodes: string;
    status: string;
    aired: string;
    premiered: InformationType[];
    broadcast: string;
    producers: Producer[];
    licensors: string;
    studios: Studio[];
    source: string;
    genre: string;
    theme: string;
    duration: string;
    rating: string;
    genres: Genre[];
    demographic: Demographic[];
  };
  statistics: Statistics;
  characters: Character[];
  picture_url: string;
}

export interface IFavoriteAnime {
  title: string;
  image: string;
  description?: string;
  user: string;
}
