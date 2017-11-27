import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GiphyList from './GiphyList';

function mapStateToProps({ trendingGiphys }) {
  return { trendingGiphys };
}

function GiphyTrendingListContainer({ trendingGiphys }) {
  return <GiphyList giphys={trendingGiphys} />;
}

GiphyTrendingListContainer.propTypes = {
  trendingGiphys: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(GiphyTrendingListContainer);
