import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
	       <h1>Movies Page</h1>
	       {movies.map((m,index) => (
	       	<div key={index}>
			       	<h2> Title: {m.title} </h2>
			       	<h3> Time: {m.time} </h3>
			       	<p>Genres: </p>
				       	<ul>
					       	
					       			{m.genres.map((g,ind)=>(
					       			<li key={ind}> {g} </li>
									))}
						</ul>
						</div>
			))}
	</div>
  );
};

export default Movies;
