import React, {Component} from 'react';
import { movies } from '../data';

class Movies extends Component {

  generateMovies(){
    return (
      movies.map(movie => {
        return (
          <div>
            <h1>Title: {movie.title}</h1>
            <p>Time: {movie.time}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(genre => {
                return <li>{genre}</li>
              })}
            </ul>
            <p>MetaScore: {movie.metascore}</p>
          </div>
        )
      })
    )
  }

  render (){
    return (
      <div>
          <h1>Movies Page</h1>
          {this.generateMovies()}
      </div>
    )
  }
}

export default Movies;