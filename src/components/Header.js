import React from 'react';
import Navbar from './Navbar';
import PastSearches from './PastSearches';

export default function Header(props) {
  return (
    <div>
      <Navbar {...props} />
      <PastSearches {...props} />
    </div>
  );
}
