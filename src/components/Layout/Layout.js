import { Outlet } from 'react-router-dom';
import { Container, NavLinkStyled, NavList } from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Container>
      <header>
        <nav>
          <NavList>
            <li>
              <NavLinkStyled to="/">Home</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/register">Registration</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/login">Login</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
            </li>
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
