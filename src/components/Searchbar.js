import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { SEARCH } from '../constants/pathConstants';

class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
      searchValue: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.key !== this.props.location.key) {
      this.setState({
        fireRedirect: false,
        searchValue: '',
      });
    }
  }

  handleInput(event) {
    this.setState({
      fireRedirect: false,
      searchValue: event.target.value,
    });
  }

  handleSearch(event) {
    event.preventDefault();
    this.setState({ fireRedirect: true });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input type="text" onChange={this.handleInput} value={this.state.searchValue} />
          <button type="submit">Search Giphys</button>
        </form>
        {this.state.fireRedirect &&
          <Redirect push to={{ pathname: SEARCH, search: `?q=${this.state.searchValue}` }} />
        }
      </div>
    );
  }
}

Searchbar.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
  }),
};

Searchbar.defaultProps = { location: {} };

export default Searchbar;
