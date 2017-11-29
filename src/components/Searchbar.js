import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { SEARCH } from '../constants/pathConstants';

const SearchBoxWrapper = styled.form`
  display: inline-block;
  position: relative;
  width: 200px;
  height: 37px;
  white-space: nowrap;
  box-sizing: border-box;
  font-size: 13px;
`;

const SearchBoxInput = styled.input`
  display: inline-block;
  -webkit-transition: box-shadow .4s ease, background .4s ease;
  transition: box-shadow .4s ease, background .4s ease;
  border: 0;
  border-radius: 19px;
  box-shadow: inset 0 0 0 1px #D9D9D9;
  background: #FFFFFF;
  padding: 0;
  padding-right: 30px;
  padding-left: 37px;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  white-space: normal;
  font-size: inherit;
`;

const SearchBoxButton = styled.button`
  position: absolute;
  top: 0;
  right: inherit;
  left: 0;
  margin: 0;
  border: 0;
  border-radius: 18px 0 0 18px;
  background-color: rgba(255, 255, 255, 0);
  padding: 0;
  width: 37px;
  height: 100%;
  vertical-align: middle;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

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
        <SearchBoxWrapper onSubmit={this.handleSearch}>
          <SearchBoxInput type="text" onChange={this.handleInput} value={this.state.searchValue} />
          <SearchBoxButton type="submit">{">"}</SearchBoxButton>
        </SearchBoxWrapper>
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
