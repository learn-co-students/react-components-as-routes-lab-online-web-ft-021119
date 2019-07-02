import React from 'react';
import { actors } from '../data';

const Actors = () => {

  return (
    <div>
      <h1>Actors Page</h1>
       {actors.map((actor, index) => (
       	<div key={index} className="actor">
         	<hr></hr><h3>{actor.name}</h3>
         	<h4>Movies:</h4>
         	<ul>
           	{actor.movies.map((movie, index) => (
           		<li key={index}>{movie}</li>
           		))}
         	</ul>
       	</div>
       	))}
     </div>
  );
};

export default Actors;



// {actors.map((actor, index) => (
//        <div key={index} className="actor">
//        <h3>Name: {actor.name} </h3>
//        <h3>Movies:</h3>
//        <ul>
//        {actor.movies.map((movie, index) => (
//          <li key={index}>{movie}</li>
//
//          ))}
//        </ul>

// <div className="actor">
//   {actors.map(actor => actor.name)}
//     {actor.movies.map(movie => {
//       <ul>{movie}</ul>
//     })}
// </div>
// </div>
// debugger
// {actors.map(actor => actor.movies.map(movie => {
//   <ul>{movie}</ul>
//   }))}
// </div>
// </div>
//
