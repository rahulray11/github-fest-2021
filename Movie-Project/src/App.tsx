  
import React, { useState, useEffect } from "react";
import "../src/Assets/catalog.css"
import { Movie, discoverMovies } from './Components/Movie';
import { MoviesContext } from "./Components/Context";
import { Catalog } from "./Components/Catalog";
import Header from "./Components/Header";

function App() {
  useEffect(() => {
    discoverMovies()
      .then(setMovies)
      .catch((_) => setMovies([]));
  }, []);

  const [movies, setMovies] = useState<Movie[]>([]);
  return (
    <MoviesContext.Provider value={{ movies }}>
      <div className="App">
        <Header/>
        <Catalog/>
      </div>
    </MoviesContext.Provider>
  );
}

export default App;