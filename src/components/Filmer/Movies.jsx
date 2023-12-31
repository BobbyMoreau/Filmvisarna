import React, { useState } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import MovieFilter from './MovieFilter';
import MovieItem from './MovieItem';
import './../../sass/movies.css';


const Movies = () => {

  const { movies: moviesData } = useOutletContext();

  //const { movieId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [selectedAge, setSelectedAge] = useState(queryParams.get('age') || 'Alla åldrar');
  const [selectedGenre, setSelectedGenre] = useState(queryParams.get('genre') || 'Alla genrer');

  const uniqueGenres = [...new Set(moviesData.map((movie) => movie.description.genre))];
  const uniqueAges = [...new Set(moviesData.map((movie) => movie.description.ageRating))];

  const filterMovies = (age, genre) => {
    return moviesData.filter((movie) => {
      if (age === 'Alla åldrar' || age === movie.description.ageRating) {
        if (genre === 'Alla genrer' || genre === movie.description.genre) {
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
        src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/03/sci-fi-fantasy-march.jpg"
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
