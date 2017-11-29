import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SEARCH } from '../constants/pathConstants';


function mapStateToProps({ searchTerms }) {
  return { searchTerms };
}

function PastSearches({ searchTerms }) {
  return (
    <ul>
      {searchTerms.map(searchTerm => (
        <li key={searchTerm}>
          <Link
            to={{
              pathname: SEARCH,
              search: `?q=${searchTerm}`,
            }}
          >
            {`${searchTerm}`}
          </Link>
        </li>
      ))}
    </ul>
  );
}

PastSearches.propTypes = { searchTerms: PropTypes.arrayOf(PropTypes.string).isRequired };

export default connect(mapStateToProps)(PastSearches);
