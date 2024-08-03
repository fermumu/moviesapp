import React from 'react';
import useMovies from '../hooks/useMovies.js';

export default function PopularCustomHook() {
    const { movies } = useMovies('movie/popular');


  return (
    <>
    <div className="container">
        <h3>Listado de peliculas populares usando el Custom Hook!</h3>
        <ul>
            {movies.map((movie, index) => (
                <li key={index}>{movie.title}</li>
            ))}
        </ul>
    </div>
    </>
  )
}
