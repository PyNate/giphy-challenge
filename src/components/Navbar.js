import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import PastSearches from './PastSearches';
import { ROOT } from '../constants/pathConstants';

function Navbar({ location }) {
  return (
    <ul>
      <li>Giphy Coding Challenge</li>
      <li><Link to={ROOT}>Trending</Link></li>
      <li><Searchbar location={location} /></li>
      <li><PastSearches /></li>
    </ul>
  );
}

export default Navbar;
