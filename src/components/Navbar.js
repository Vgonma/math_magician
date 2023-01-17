import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  return (
    <nav>
      <div>
        <h1>{active}</h1>
      </div>
      <div>
        <NavLink to="/" onClick={() => setActive('Home')}>Home</NavLink>
        <NavLink to="/calculator" onClick={() => setActive('Clculator')}>Calculator</NavLink>
        <NavLink to="/quote" onClick={() => setActive('Quote')}>Quote</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
