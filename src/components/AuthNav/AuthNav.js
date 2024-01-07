import { Nav, NavLinkStyled } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <Nav>
      <NavLinkStyled to="/register">Registration</NavLinkStyled>
      <NavLinkStyled to="/login">Login</NavLinkStyled>
    </Nav>
  );
};
