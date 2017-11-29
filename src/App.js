import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import GiphySearchListContainer from './components/GiphySearchListContainer';
import GiphyTrendingListContainer from './components/GiphyTrendingListContainer';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Navbar} />
        <Switch>
          <Route exact path="/" component={GiphyTrendingListContainer} />
          <Route path="/search" component={GiphySearchListContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
