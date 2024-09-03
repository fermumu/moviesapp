import React from 'react';
import NavButton from './NavButton.jsx';

export default function Header({ handleClick }) {
  return (
    <>
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <img src={require('../image/sensei.png')} alt="The sensei movie app" width="82px" />
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none px-5">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Movies App</h1>
            </a>

            <ul className="nav nav-pills align-items-end">
                <li className="nav-item"><NavButton handleClick={handleClick}>Peliculas Populares</NavButton></li>
                <li className="nav-item"><NavButton handleClick={handleClick}>Search by name</NavButton></li>
                <li className="nav-item"><NavButton handleClick={handleClick}>Custom Hook</NavButton></li>
            </ul>
            </header>
        </div>
    </>
  )
}
