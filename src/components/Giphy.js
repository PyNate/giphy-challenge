import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaddedImg = styled.img`
  padding: 3px;
`;

function Giphy({ url, title }) {
  return (
    <PaddedImg src={url} alt={title} />
  );
}

Giphy.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Giphy;
