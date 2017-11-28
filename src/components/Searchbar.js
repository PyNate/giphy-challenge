import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Searchbar extends Component {
  constructor() {
    super();
    this.state = { searchValue: '' };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInput} />
        <Link
          to={{
            pathname: '/search',
            search: `?q=${this.state.searchValue}`,
          }}
        >
          <button>Search Giphys</button>
        </Link>
      </div>
    );
  }
}

export default Searchbar;
