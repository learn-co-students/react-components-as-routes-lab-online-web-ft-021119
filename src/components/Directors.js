import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, idx) =>
        <div>
          <h2>{director.name}</h2>
          Movies:
        {director.movies.map((movie, idx) =>
        <ul>{movie}</ul>

      )}
      </div>
    )}

    </div>
  );
}

export default Directors
