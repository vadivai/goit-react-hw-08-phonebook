import { Outlet } from 'react-router-dom';
import { Container } from 'components';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading Layout...</div>}>
          {/* сделать null */}
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
