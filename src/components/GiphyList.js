import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Giphy from './Giphy';

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function GiphyList({ giphys }) {
  return (
    <FlexContainer>
      {
        giphys.map(giphy => (
          <Giphy
            key={giphy.id}
            url={giphy.url}
            title={giphy.title}
          />
        ))
      }
    </FlexContainer>
  );
}

GiphyList.propTypes = {
  giphys: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default GiphyList;
