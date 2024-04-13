import { Box } from '@mui/material';
import { PodcastFilter } from '../../modules/podcast/components/podcastFilter/PodcastFilter';
import { useEffect, useState } from 'react';
import { Podcast } from '../../modules/podcast/models/Podcast';
import { styles } from './styles';
import { podcastLoader } from '../../modules/podcast/loader/podcastLoader';
import { PodcastList } from '../../modules/podcast/components/podcastList/PodcastList';
import { useHeaderLoadingState } from '../../shared/hooks/useHeaderLoadingState';

export const Main = () => {
  const [filter, setFilterText] = useState('');
  const [podcasts, setPodcasts] = useState<Array<Podcast>>([]);
  const { updateState } = useHeaderLoadingState();

  useEffect(() => {
    podcastLoader(setPodcasts, updateState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
