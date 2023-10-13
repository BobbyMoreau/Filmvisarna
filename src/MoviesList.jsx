import React, { useState, useEffect } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/movies');
                const moviesListed = await response.json();
                setMovies(moviesListed);
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); 
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Movie List</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <strong>Title:</strong> {movie.title}
                            <br />
                            {/* <strong>Cast:</strong> {movie.description.cast.join(', ')}
                            <br /> */}
                            <strong>Genre:</strong> {movie.description.genre}
                            <br />
                            <strong>Duration:</strong> {movie.description.duration} min {/*Omvandla till timmar?? */}
                            <br />
                            <strong>Åldersgräns:</strong> {movie.description.ageRating} år
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MoviesList;