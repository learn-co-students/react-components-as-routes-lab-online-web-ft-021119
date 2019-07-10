import React from 'react';
import { movies } from '../data';

const renderMovies = (movies) => {
  return (
    movies.map(function(movie) {
      return (
        <div>
          <h4>Name: { movie.title }</h4>
          <p>Time: { movie.time }</p>
          <p>Genres:
            <ul>
              {movie.genres.map(genre => <li>{genre}</li>)}
            </ul>
          </p>
        </div>
      )
    })
  )
}


const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies(movies)}
    </div>
  );
};

export default Movies;
