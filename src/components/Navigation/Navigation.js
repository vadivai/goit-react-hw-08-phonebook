import { Nav, NavLinkStyled } from 'components/Layout/Layout.styled';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {<NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
    </Nav>
  );
};
