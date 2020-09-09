import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <h1>React Movie Cards</h1>
      <Link className='link' to='/'>
        <li>Home</li>
      </Link>
      <Link className='link' to='/about'>
        <li>About</li>
      </Link>
    </nav>
  );
}

export default Header;
