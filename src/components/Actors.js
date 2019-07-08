import React from 'react';
import { actors } from '../data';

const Actors = () => {


  return (
 		<div>
      <h1>Actors Page</h1>
      {actors.map((a,index)=>( 

      	<div  className="actor" key={index}>
      		<h2>Name: {a.name}</h2>
      		 <p>Movies:</p>
			       	<ul>
			       	{a.movies.map((m,ind)=> (
			       		<li key={ind}>{m}</li>
					))}
					</ul>
		</div>

      ))}






    </div>
      

  

      )
}

export default Actors;
