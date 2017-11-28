import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import GiphySearchListContainer from './components/GiphySearchListContainer';
import GiphyTrendingListContainer from './components/GiphyTrendingListContainer';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Trending</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>

        <Route exact path="/" component={GiphyTrendingListContainer} />
        <Route path="/search" component={GiphySearchListContainer} />
      </div>
    </Router>
  );
}

export default App;
