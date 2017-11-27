import React from 'react';
import PropTypes from 'prop-types';

function Giphy({ url, title }) {
  return (
    <img src={url} alt={title} />
  );
}

Giphy.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Giphy;
