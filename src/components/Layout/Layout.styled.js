import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: black;

  &.active {
    color: #4903fc;
  }
`;
