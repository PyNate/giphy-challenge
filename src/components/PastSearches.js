import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


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
              pathname: '/search',
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
