import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  list-style: none;
  font-weight: bold;
  margin: 0;
  padding: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: black;

  &.active {
    color: #4903fc;
  }
`;
