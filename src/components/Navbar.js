import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  return (
    <nav className="navbar">
      <div className="page-title">
        <h1>{active}</h1>
      </div>
      <div className="navlinks-container">
        <NavLink to="/" onClick={() => setActive('Home')}>Home</NavLink>
        <NavLink to="/calculator" onClick={() => setActive('Calculator')}>Calculator</NavLink>
        <NavLink to="/quote" onClick={() => setActive('Quote')}>Quote</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
