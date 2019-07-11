import React from 'react';
import { actors } from '../data';

const renderActors = (actors) => {
  return actors.map(actor => {
    return(
      <div className="actor">
        <p>Name: {actor.name}</p>
        <ul>
          {actor.movies.map(movie => <li>{movie}</li> )}
        </ul>
      </div>
    ) 
  })
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
