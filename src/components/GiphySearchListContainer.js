import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GiphyList from './GiphyList';
import { getGiphySearch } from '../api/giphyApi';
import { startSearch, loadGiphySearch, loadGiphySearchFailure } from '../actions/apiActions';

function mapStateToProps({ apiKey, searchResultGiphys }) {
  return { apiKey, searchResultGiphys };
}

class GiphySearchListContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    getGiphySearch(this.props.apiKey, 'test')
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        dispatch(loadGiphySearchFailure());
        return null;
      })
      .then((data) => {
        if (data) {
          dispatch(loadGiphySearch(data));
        }
      });
  }

  render() {
    return <GiphyList giphys={this.props.searchResultGiphys} />;
  }
}

GiphySearchListContainer.propTypes = {
  apiKey: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  searchResultGiphys: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(GiphySearchListContainer);
