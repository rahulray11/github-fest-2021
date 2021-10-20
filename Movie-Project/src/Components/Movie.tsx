const movieApiBaseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";
const REACT_APP_API_KEY= "409315a1f3a858942ec52e21c28356b1"

export function discoverMovies(): Promise<Movie[]> {
  return fetch(
    `${movieApiBaseUrl}/discover/movie?sort_by=popularity.desc&api_key=${REACT_APP_API_KEY}`
  )
    .then((res) => res.json())
    .then((response) => mapResult(response.results))
    .catch((_) => {
      return [];
    });
}
function mapResult(res: any[]): Movie[] {
  return res.map((movie) => {
    const {
      id,
      title,
      vote_average,
      overview,
      poster_path,
      release_date,
    } = movie;
console.log(movie)
    return {
      id,
      title,
      date: release_date,
      rating: vote_average,
      resume: overview,
      picture: poster_path ? `${posterBaseUrl}${poster_path}` : undefined,
    };
  });
}
export interface Movie {
  id: number;
  date: string;
  title: string;
  rating: number;
  resume: string;
  picture?: string;
}