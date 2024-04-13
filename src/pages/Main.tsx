import { Box } from '@mui/material';
import { PodcastFilter } from '../modules/podcast/components/podcastFilter/PodcastFilter';
import { useEffect, useState } from 'react';
import { Podcast } from '../modules/podcast/models/Podcast';
import { styles } from './styles';
import { podcastLoader } from '../modules/podcast/loader/podcastLoader';
import { useOutletContext } from 'react-router-dom';
import { PodcastList } from '../modules/podcast/components/podcastList/PodcastList';

export const Main = () => {
  const [filter, setFilterText] = useState('');
  const [podcasts, setPodcasts] = useState<Array<Podcast>>([]);
  const { setLoading }: { setLoading: (loading: boolean) => void } =
    useOutletContext();

  useEffect(() => {
    podcastLoader(setPodcasts, setLoading);
  }, [setLoading]);

  const filteredPodcasts = podcasts.filter(
    (p) =>
      p.artist.toLowerCase().includes(filter.toLowerCase()) ||
      p.title.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <Box sx={styles.container}>
      <PodcastFilter
        availableResults={filteredPodcasts.length}
        filterText={filter}
        setFilter={setFilterText}
      />
      <PodcastList podcasts={filteredPodcasts} />
    </Box>
  );
};
