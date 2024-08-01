import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard.jsx";
import Header from "./Header.jsx";
import Button from "./Button.jsx";
import "./MovieList.css";
import SearchMovies from './SearchMovies.jsx';

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [pagination, setPagination] = useState(1); // contador
  const [displayPage, setDisplayPage] = useState(1);

  async function fetchPopularMovies(page) {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${page}`; // page=X, desde 1 hasta 45323
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

  const nextPage = () => {
    // incrementar el contador
    setPagination(pagination + 1);
  };

  const prevPage = () => {
    // decrementar el contador
    if (pagination > 1) {
      setPagination(pagination - 1);
    }
  };

  const changeDisplayPage = (pageId) => {
    setDisplayPage(pageId);
  }

  // useEffect(() => {}); // cuando se renderiza el componente y cuando se re-renderiza el componente
  // useEffect(() => {}, []); // cuando se renderiza el componente
  // useEffect(() => {}, [param1, param2, paramN]); // cuando se renderiza el componente y cuando las dependencias cambian

  useEffect(() => {
    async function getMovies() {
      const movies = await fetchPopularMovies(pagination);
      setMovieList(movies);
    }
    getMovies();
  }, [pagination]);

  //fetchPopularMovies();

  let content;
  if (displayPage === 1) {
    content = (
      <>
        <div className="fixed-buttons d-flex justify-content-between px-5">
          <Button handleClick={prevPage}>Anterior</Button>
          <Button handleClick={nextPage}>Siguiente</Button>
        </div>
        {movieList.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </>
    );
  }
  if (displayPage === 2) {
    content = (
      <>
        <SearchMovies />
      </>
    );
  }

  return (
    <>
      <Header handleClick={changeDisplayPage} />
      {content}
    </>
  );
}
