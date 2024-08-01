import React from 'react'

export default function Header() {
  return (
    <>
         <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <img src={require('../image/sensei.png')} alt="The movie ninja logo" width="82px" />
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none px-5">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">NinjaFlix</h1>
            </a>

            {/* <ul class="nav nav-pills">
                <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                <li class="nav-item"><a href="#" class="nav-link">About</a></li>
            </ul> */}
            </header>
        </div>
    </>
  )
}
