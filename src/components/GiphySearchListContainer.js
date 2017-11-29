import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GiphyList from './GiphyList';
import { getGiphySearch } from '../api/giphyApi';
import { loadGiphySearch, loadGiphySearchFailure, startSearch } from '../actions/apiActions';

function mapStateToProps({ apiKey, searchResultGiphys }) {
  return { apiKey, searchResultGiphys };
}

class GiphySearchListContainer extends Component {
  constructor() {
    super();
    this.fetchGiphys = this.fetchGiphys.bind(this);
  }

  componentDidMount() {
    this.fetchGiphys();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.fetchGiphys();
    }
  }

  fetchGiphys() {
    const { dispatch } = this.props;
    dispatch(startSearch(this.props.location.search));
    getGiphySearch(this.props.apiKey, this.props.location.search)
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
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

GiphySearchListContainer.defaultProps = { location: {} };

export default connect(mapStateToProps)(GiphySearchListContainer);
