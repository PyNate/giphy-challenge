import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SEARCH } from '../constants/pathConstants';

const SearchContainer = styled.div`
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  margin: 5px 0 5px 0;
`;

const SearchLabel = styled.div`
  padding: 0 2% 0 2%;
  font-weight: bold;
  color: white;
  font-size: 20px;
  white-space: nowrap;
`;

const SearchItem = styled(Link)`
  text-decoration: none;
  padding: 0 10px 0 10px;
  color: white;
  font-size: 20px;
`;

function mapStateToProps({ searchTerms }) {
  return { searchTerms };
}

function PastSearches({ searchTerms }) {
  return (
    <SearchContainer>
      <SearchLabel>Previous Searches:</SearchLabel>
      {searchTerms.map(searchTerm => (
        <div key={searchTerm}>
          <SearchItem
            to={{
              pathname: SEARCH,
              search: `?q=${searchTerm}`,
            }}
          >
            {`${searchTerm}`}
          </SearchItem>
        </div>
      ))}
    </SearchContainer>
  );
}

PastSearches.propTypes = { searchTerms: PropTypes.arrayOf(PropTypes.string).isRequired };

export default connect(mapStateToProps)(PastSearches);
