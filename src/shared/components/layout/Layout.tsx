import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import { Container } from '@mui/material';
import { styles } from './styles';
import { useState } from 'react';

export const Layout = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <Container sx={styles.container}>
      <Header loading={isLoading} />
      <Outlet context={{ setLoading }} />
    </Container>
  );
};
