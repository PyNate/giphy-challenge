import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GiphyList from './GiphyList';
import { getTrendingGiphys } from '../api/giphyApi';
import { loadTrendingGiphys, loadTrendingGiphysFailure } from '../actions/apiActions';

function mapStateToProps({ apiKey, trendingGiphys }) {
  return { apiKey, trendingGiphys };
}

class GiphyTrendingListContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    getTrendingGiphys(this.props.apiKey)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        dispatch(loadTrendingGiphysFailure());
        return null;
      })
      .then((data) => {
        if (data) {
          dispatch(loadTrendingGiphys(data));
        }
      });
  }

  render() {
    return <GiphyList giphys={this.props.trendingGiphys} />;
  }
}

GiphyTrendingListContainer.propTypes = {
  apiKey: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  trendingGiphys: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(GiphyTrendingListContainer);
