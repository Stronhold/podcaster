import { Box, Card, CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { styles } from './styles';
import { useParams } from 'react-router-dom';
import { Episode } from '../../modules/podcast/models/Episode';
import { podcastEpisodesLoader } from '../../modules/podcast/loader/podcastEpisodesLoader';
import { EpisodesTable } from '../../modules/podcast/components/episodesTable/EpisodesTable';
import { useHeaderLoadingState } from '../../shared/hooks/useHeaderLoadingState';

export const PodcastEpisodes = () => {
  const { id } = useParams();
  const [episodes, setEpisodes] = useState<Array<Episode>>([]);
  const { updateState } = useHeaderLoadingState();

  useEffect(() => {
    podcastEpisodesLoader(id ?? '', setEpisodes, updateState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={styles.container}>
      <Card>
        <CardContent>
          <Typography variant='h6'>Episodes: {episodes.length} </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <EpisodesTable podcastId={id ?? ''} episodes={episodes} />
        </CardContent>
      </Card>
    </Box>
  );
};
