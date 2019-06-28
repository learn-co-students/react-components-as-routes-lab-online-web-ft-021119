import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor,idx) =>
        <div>
          Name: {actor.name}
          <p>Movies: {actor.movies.map((movie, idx) =>
            <ul>{movie}</ul>
          )}
          </p>
        </div>
      )}

    </div>
  );
};

export default Actors;
