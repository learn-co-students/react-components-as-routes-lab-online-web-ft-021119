import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyle = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/movies" style={linkStyle}>Movies</NavLink>
      <NavLink to="/actors" style={linkStyle}>Actors</NavLink>
      <NavLink to="/directors" style={linkStyle}>Directors</NavLink>
    </div>
  );
};

export default NavBar;