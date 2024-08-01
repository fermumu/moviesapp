import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';

export default function MovieCard({ movie }) {
  return (
    <>
        <div className="container my-5">
            <div className="row p-4 pe-lg-0 align-items-center rounded-3 border shadow-lg">
              <div className="col-lg-8 p-3 p-lg-5 pt-lg-3">
                  <h1 className="display-4 fw-bold lh-1 text-body-emphasis">{movie.title}</h1>
                  <p className="lead">{movie.overview}</p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <p>Vote average: <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /> {movie.vote_average}</p>
                    <p>Votes: <FontAwesomeIcon icon={faSquarePollVertical} style={{color: "#ff5151",}} /> {movie.vote_count}</p>
                  </div>
              </div>
              <div className="col-lg-3 p-0 shadow-lg">
                  <img className="rounded-lg-3" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" width="330" />
              </div>
            </div>
        </div>
    </>
  )
}
