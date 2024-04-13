import { Box, Card, CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { styles } from './styles';
import { useParams } from 'react-router-dom';
import { Episode } from '../../modules/podcast/models/Episode';
import { podcastEpisodesLoader } from '../../modules/podcast/loader/podcastEpisodesLoader';
import { EpisodesTable } from '../../modules/podcast/components/episodesTable/EpisodesTable';

export const PodcastEpisodes = () => {
  const { id } = useParams();
  const [episodes, setEpisodes] = useState<Array<Episode>>([]);
  // const context = useOutletContext();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    podcastEpisodesLoader(id ?? '', setEpisodes, () => null);
  }, [id]);

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
