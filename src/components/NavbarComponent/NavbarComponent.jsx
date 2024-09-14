import React from 'react';
import './style.css';

const NavbarComponent = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">Anonime</div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">List anime</a>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search anime or movie" />
      </div>
    </div>
  );
};

export default NavbarComponent;