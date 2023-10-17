import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import moviesData from '../data/movies.json';
import MovieFilter from './MovieFilter';
import MovieItem from './MovieItem';
import './../../sass/movies.css';

const Movies = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [selectedAge, setSelectedAge] = useState(queryParams.get('age') || 'Alla åldrar');
    const [selectedGenre, setSelectedGenre] = useState(queryParams.get('genre') || 'Alla genrer');

    const uniqueGenres = [...new Set(moviesData.map((movie) => movie.genre))];
    const uniqueAges = ['Alla åldrar', 'Barn', 'Pensionär', 'Vuxen'];

    const filterMovies = (age, genre) => {
        return moviesData.filter((movie) => {
            if (age === 'Alla åldrar' ||
                (age === 'Barn' && (movie.genre === 'Animerat' || movie.genre === 'Fantasy')) ||
                (age === 'Pensionär' || age === 'Välj ålder') ||
                (age === 'Vuxen')) {
                if (genre === 'Alla genrer' || genre === movie.genre) {
                    return true;
                }
            }
            return false;
        });
    };

    const handleAgeSelection = (ageCategory) => {
        queryParams.set('age', ageCategory);
        setSelectedAge(ageCategory);
        window.history.replaceState({}, '', `?${queryParams.toString()}`);
    };

    const handleGenreSelection = (selectedGenre) => {
        queryParams.set('genre', selectedGenre);
        setSelectedGenre(selectedGenre);
        window.history.replaceState({}, '', `?${queryParams.toString()}`);
    };

    const filteredMovies = filterMovies(selectedAge, selectedGenre);

    return (
        <div>
            <img
                src="https://i-viaplay-com.akamaized.net/viaplay-prod/575/668/1686897326-b16e011791d011412639483343f89c9f3af6f360.jpg?width=400&height=600"
                alt="Filmer Poster"
                className="movie-poster"
            />
            <h1>Filmer</h1>
            <div>
                <MovieFilter
                    uniqueAges={uniqueAges}
                    uniqueGenres={uniqueGenres}
                    selectedAge={selectedAge}
                    selectedGenre={selectedGenre}
                    handleAgeSelection={handleAgeSelection}
                    handleGenreSelection={handleGenreSelection}
                />

                <div className="movie-list">
                    {filteredMovies.map((movie) => (
                        <MovieItem key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Movies;