import React, {Component} from 'react';
import { actors } from '../data';

class Actors extends Component {
  
  generateActors(){
    return (
      actors.map(actor => {
        return (
          <div>
            <h2>Name: {actor.name}</h2>
            <h3>Movies</h3>
            <ul>
              {actor.movies.map(movie => {
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
        <h1>Actors Page</h1>
        {this.generateActors()}
      </div>
    );
  }
  
};

export default Actors;
