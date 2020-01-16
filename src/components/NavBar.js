import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <li><Link to="/" exact>Home</Link></li>
      <li><Link to="/movies" exact>Movies</Link></li>
      <li><Link to="/directors" exact>Directors</Link></li>
      <li><Link to="/actors" exact>Actors</Link></li>
    </div>
  );
};

export default NavBar;
