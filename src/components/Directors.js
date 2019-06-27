import React, {Component} from 'react';
import { directors } from '../data';

class Directors extends Component {

  generateDirectors(){
    return (
      directors.map(director => {
        return (
          <div>
            <h2>Title: {director.name}</h2>
            <h3>Movies</h3>
            <ul>
              {director.movies.map(movie => {
                return <li>{movie}</li>
              })}
            </ul>
          </div>
        )
      })
    )
  }

  render(){
    return (
      <div>
        <h1>Directors Page</h1>
        {this.generateDirectors()}
      </div>
    );
  }
  
}

export default Directors
