import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import { Container } from '@mui/material';
import { styles } from './styles';
import { useState } from 'react';

export interface Loading {
  podcastList: boolean;
  podcastDetails: boolean;
  episodesList: boolean;
  episodeDetails: boolean;
}

export const Layout = () => {
  const [podcastListLoading, setPodcastListLoading] = useState<boolean>(false);
  const [podcastDetailsLoading, setPodcastDetailsLoading] =
    useState<boolean>(false);
  const [episodeListLoading, setEpisodeListLoading] = useState<boolean>(false);
  const [episodeDetailsLoading, setEpisodeDetailsLoading] =
    useState<boolean>(false);
  const updateState = (load: keyof Loading, value: boolean) => {
    switch (load) {
      case 'episodeDetails':
        setEpisodeDetailsLoading(value);
        break;
      case 'episodesList':
        setEpisodeListLoading(value);
        break;
      case 'podcastDetails':
        setPodcastDetailsLoading(value);
        break;
      case 'podcastList':
        setPodcastListLoading(value);
        break;
    }
  };
  const isLoading =
    podcastDetailsLoading ||
    podcastListLoading ||
    episodeListLoading ||
    episodeDetailsLoading;

  return (
    <Container sx={styles.container}>
      <Header loading={isLoading} />
      <Outlet context={{ updateState }} />
    </Container>
  );
};
