import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard.jsx';

function SearchMovies() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${query}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDdmNTA3MWNiMjA4NTEyMWE4NGYyNzlhNjRlNDQ2YyIsIm5iZiI6MTcyMjAzMTEwMS4zOTM0NjUsInN1YiI6IjY2MjA0MTYyZWNhZWY1MDEzMGY4ODA5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.inpkKraJt176sXIlfNr6tETm9ekzjn9Qvx79Ore2KGg",
    },
  };

  useEffect(() => {
    if (query.length > 2) {
      async function fetchMovies() {
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        setResults(data.results);
      }

      fetchMovies();
    }
  }, [query]);

  return (
    <div className="container">
      <h1>Buscar Películas</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(e.target.elements.search.value);
        }}
      >
        <div className="input-group">
          <input type="text" className="form-control" id="search" placeholder="Ingrese el nombre de la película" />
          <button type="submit" className="btn btn-primary">Buscar</button>
        </div>
      </form>
      
      {/* <div className="row mt-4">
        {results.map((movie) => (
          <div className="col-md-4" key={movie.id}>
            <div className="card mb-4 shadow-sm">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      {results.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default SearchMovies;
