import { useEffect, useState } from 'react';
import { podcastDetailsLoader } from '../../loader/podcastDetailsLoader';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  Link as MUILink,
} from '@mui/material';
import { useOutletContext, useParams } from 'react-router-dom';
import { PodcastDetail } from '../../models/PodcastDetails';
import { styles } from './styles';
import { Link } from 'react-router-dom';

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

  const url = `/podcast/${id}`;

  return (
    <Card sx={styles.container}>
      <CardContent sx={styles.content}>
        <MUILink to={url} component={Link} sx={styles.imageLink}>
          <Box
            component={'img'}
            src={podcastDetails?.podcastImage ?? ''}
            sx={styles.image}
          />
        </MUILink>
        <Divider />
        <Box display='flex' flexDirection={'column'}>
          <Typography
            variant='h6'
            sx={styles.podcastName}
            component={Link}
            to={url}
          >
            {podcastDetails?.podcastName}
          </Typography>
          <Typography
            variant='body2'
            sx={styles.description}
            component={Link}
            to={url}
          >
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
