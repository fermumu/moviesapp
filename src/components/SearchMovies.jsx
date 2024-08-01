import React from "react";
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard.jsx';

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movieListByName, setMovieListByName] = useState([]);

  function handleSubmit(e) {
    e.preventDefault(); // se usa de manera comun en react para evitar el comportamiento por defecto del evento submit
    setQuery(e.target.elements.search.value);
  }

  async function fetchMoviesByName(queryTerm) {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${queryTerm}`; // page=X, desde 1 hasta 45323
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDdmNTA3MWNiMjA4NTEyMWE4NGYyNzlhNjRlNDQ2YyIsIm5iZiI6MTcyMjAzMTEwMS4zOTM0NjUsInN1YiI6IjY2MjA0MTYyZWNhZWY1MDEzMGY4ODA5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.inpkKraJt176sXIlfNr6tETm9ekzjn9Qvx79Ore2KGg",
      },
    };
    try {
      // solicitud fetch
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      console.log(data);
      return data.results;
    } catch (error) {
      // capturar el error
      console.error("Error al obtener las peliculas: ", error);
    }
  }

  useEffect(() => {
    async function getMovies () {
      const movies = await fetchMoviesByName(query);
      setMovieListByName(movies);
    }
    getMovies();
  }, [query]);

  return (
    <>
    <div className="container">
        <h1>Buscar Peliculas</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" id="search" className="form-control"></input>
            <button type="submit" className="btn btn-secondary">Buscar peliculas</button>
          </div> 
        </form>
        {movieListByName.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
    </div>
    </>
  );
}
