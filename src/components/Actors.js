import React from 'react';
import { actors } from '../data';

const Actors = () => {
  // debugger
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => <div className="actor">{actor.name} - {actor.movies.join(", ")}</div>)}
    </div>
  );
};

export default Actors;
