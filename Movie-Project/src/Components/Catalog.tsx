import React, { useContext } from "react";
import imgPlaceholder from "../Components/movie_placeholder.png";
import { MoviesContext } from "../Components/Context";

export const Catalog = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <div className="catalogContainer">
      {movies.map((movie) => (
        <div className="catalog__item" key={movie.id}>
          <div className="catalog__item__img">
            <img src={movie.picture || imgPlaceholder} alt={movie.title} />
            <div className="catalog__item__resume">{movie.resume}</div>
          </div>
          <div className="catalog__item__footer">
            <div className="catalog__item__footer__name">
              {movie.title} ({new Date(movie.date).getFullYear()})
            </div>
            <div className="catalog__item__footer__rating">{movie.rating}</div>
          </div>
        </div>
      ))}
    </div>
  );
};