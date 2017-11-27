import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GiphyList from './GiphyList';
import { getTrendingGiphys } from '../api/giphyApi';

function mapStateToProps({ apiKey, trendingGiphys }) {
  return { apiKey, trendingGiphys };
}

class GiphyTrendingListContainer extends Component {
  constructor() {
    super();
    this.state = {
      dataLoaded: false
    };
  }

  componentDidMount() {
    getTrendingGiphys(this.props.apiKey).then((res) => {
      console.log(res);
      this.setState({ dataLoaded: true });
    });
  }

  render() {
    return <GiphyList giphys={this.props.trendingGiphys} />;
  }
}

GiphyTrendingListContainer.propTypes = {
  apiKey: PropTypes.string.isRequired,
  trendingGiphys: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(GiphyTrendingListContainer);
