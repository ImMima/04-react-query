import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface SearchResults {
  results: Movie[];
  page: number;
  total_page: number;
  total_results: number;
}

export const fetchMovies = async (
  query: string,
  page: number,
): Promise<SearchResults> => {
  const response = await axios.get<SearchResults>(BASE_URL + "/search/movie", {
    params: { query, page },
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return response.data;
};
