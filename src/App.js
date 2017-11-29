import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import GiphySearchListContainer from './components/GiphySearchListContainer';
import GiphyTrendingListContainer from './components/GiphyTrendingListContainer';
import { ROOT, SEARCH } from './constants/pathConstants';

const BlackBackground = styled.div`
  background-color: black;
`;

function App() {
  return (
    <Router>
      <BlackBackground>
        <Route path={ROOT} component={Header} />
        <Switch>
          <Route exact path={ROOT} component={GiphyTrendingListContainer} />
          <Route path={SEARCH} component={GiphySearchListContainer} />
        </Switch>
      </BlackBackground>
    </Router>
  );
}

export default App;
