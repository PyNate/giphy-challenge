import React from 'react';
import PropTypes from 'prop-types';
import Giphy from './Giphy';

function GiphyList({ giphys }) {
  return (
    <div>
      {
        giphys.map(giphy => (
          <Giphy
            url={giphy.url}
            title={giphy.title}
          />
        ))
      }
    </div>
  );
}

GiphyList.propTypes = {
  giphys: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default GiphyList;
