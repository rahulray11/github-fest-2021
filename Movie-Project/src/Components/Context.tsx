import React from "react";
import { Movie } from "./Movie";

export const MoviesContext = React.createContext<{
  movies: Movie[];

}>({
  movies: []
});