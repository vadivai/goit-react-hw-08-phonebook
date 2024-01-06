import { Outlet } from 'react-router-dom';
import { Container, NavLinkStyled, NavList } from 'components';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Container>
      <header>
        <nav>
          <NavList>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/register">Registration</NavLinkStyled>
            <NavLinkStyled to="/login">Login</NavLinkStyled>
            <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
          </NavList>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
