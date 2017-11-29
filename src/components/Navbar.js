import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Searchbar from './Searchbar';
import { ROOT } from '../constants/pathConstants';

const Bar = styled.div`
  font-family: Helvetica;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 75px;
  background-color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
`;

const AppTitle = styled.div`
  padding-left: 2%;
  font-size: 24px;
  font-weight: bold;
  white-space: nowrap;
`;

const MenuItem = styled.li`
  padding: 0 10px 0 10px;
  line-height: 40px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
`;

function Navbar({ location }) {
  return (
    <Bar>
      <AppTitle>Giphy Coding Challenge</AppTitle>
      <Menu>
        <MenuItem><StyledLink exact to={ROOT}>Trending Gifs</StyledLink></MenuItem>
        <MenuItem><Searchbar location={location} /></MenuItem>
      </Menu>
    </Bar>
  );
}

export default Navbar;
