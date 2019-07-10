import React from 'react';
import { actors } from '../data';

const renderActors = (actors) => {
  return (
    actors.map(function(actor) {
      return (
        <div>
          <h4>Name: { actor.name }</h4>
          <p>Movies:
            <ul>
              {actor.movies.map(movie => <li>{movie}</li>)}
            </ul>
          </p>
        </div>
      )
    })
  )
}
const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors(actors)}
    </div>
  );
};

export default Actors;
