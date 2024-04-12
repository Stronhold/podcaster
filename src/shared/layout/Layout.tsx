import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { Container } from '@mui/material';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
