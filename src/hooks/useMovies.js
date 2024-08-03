import { useState, useEffect } from 'react';

const baseUrl = 'https://api.themoviedb.org/3';
const options = {
    method: "GET",
    headers: {
    accept: "application/json",
    Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDdmNTA3MWNiMjA4NTEyMWE4NGYyNzlhNjRlNDQ2YyIsIm5iZiI6MTcyMjAzMTEwMS4zOTM0NjUsInN1YiI6IjY2MjA0MTYyZWNhZWY1MDEzMGY4ODA5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.inpkKraJt176sXIlfNr6tETm9ekzjn9Qvx79Ore2KGg",
    },
};

const useMovies = (endpoint, query = '') => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        const fecthMovies = async () => {
            try { // fetching de datos
                const url = query ? `${baseUrl}/${endpoint}?query=${query}` : `${baseUrl}/${endpoint}`;
                const response = await fetch(url, options);
                const data = await response.json();
                if (response.ok) {
                    setMovies(data.results);
                } else {
                    setError(data.status_message);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fecthMovies();
    }, [endpoint, query]);
    
    return { movies, loading, error }; // en un custom Hook el return no renderiza ninugna UI, el return intercambia informacion entre el hook mismo y quien lo esta usando
}

export default useMovies;