import React, { Component } from 'react';
import {connect} from 'react-redux';
import GIPHY_URL from '../constants/giphyUrl';
import buildUrl from '../utils/buildUrl';

function mapStateToProps({ apiKey }) {
  return { apiKey };
}

export default function withGiphyData(WrappedComponent, { endpoint, responseHandler, parameters }) {
  class GiphyDataLoader extends Component {
    componentDidMount() {
      fetch();
    }

    render() {
      return <WrappedComponent />
    }
  }
}
