import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie,idx) =>
        <div>
          <h2>Title: {movie.title}</h2>
          <h3>Time: {movie.time}</h3>
          <h4>Genres: {movie.genres.map((genre,idx) =>
            <ul>{genre}</ul>)}</h4>
        </div>
      )}
    </div>
  );
};

export default Movies;
