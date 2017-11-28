import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

function Navbar() {
  return (
    <ul>
      <li>Giphy Coding Challenge</li>
      <li><Link to="/">Trending</Link></li>
      <li><Searchbar /></li>
    </ul>
  );
}

export default Navbar;
