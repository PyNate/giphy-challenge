import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import GiphySearchListContainer from './components/GiphySearchListContainer';
import GiphyTrendingListContainer from './components/GiphyTrendingListContainer';
import { ROOT, SEARCH } from './constants/pathConstants';

function App() {
  return (
    <Router>
      <div>
        <Route path={ROOT} component={Navbar} />
        <Switch>
          <Route exact path={ROOT} component={GiphyTrendingListContainer} />
          <Route path={SEARCH} component={GiphySearchListContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
