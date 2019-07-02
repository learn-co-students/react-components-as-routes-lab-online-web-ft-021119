import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index} className="movie">
          <hr></hr><h3>{movie.title}</h3>
          <h4>Time: {movie.time} minutes</h4>
          <h4>Genre:</h4>
          <ul>
          {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
      ))}
    </div>
  );
};

export default Movies;
