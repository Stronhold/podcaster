import { useEffect, useState } from 'react';
import { podcastDetailsLoader } from '../../loader/podcastDetailsLoader';
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { useOutletContext, useParams } from 'react-router-dom';
import { PodcastDetail } from '../../models/PodcastDetails';
import { styles } from './styles';

export const PodcastDetails = () => {
  const { id } = useParams();
  const [podcastDetails, setPodcastDetails] = useState<PodcastDetail | null>(
    null,
  );
  const context = useOutletContext();
  console.log('contex: ', context);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (context && context.setLoading) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      podcastDetailsLoader(id ?? '', setPodcastDetails, context.setLoading);
    }
  }, [id, context]);

  return (
    <Card sx={styles.container}>
      <CardContent sx={styles.content}>
        <Box component={'img'} src={podcastDetails?.podcastImage ?? ''} />
        <Divider />
        <Box>
          <Typography variant='h6'>{podcastDetails?.podcastName}</Typography>
          <Typography variant='body2' sx={styles.description}>
            by {podcastDetails?.artistName}
          </Typography>
        </Box>
        {podcastDetails?.summary && (
          <Box>
            <Typography>Summary</Typography>
            <Typography sx={styles.description}>
              {podcastDetails?.summary}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
