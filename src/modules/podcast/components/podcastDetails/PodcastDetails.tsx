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
import { styles } from './styles';
import { Link } from 'react-router-dom';
import { Podcast } from '../../models/Podcast';

export const PodcastDetails = () => {
  const { id } = useParams();
  const [podcastDetails, setPodcastDetails] = useState<Podcast | null>(null);
  const context = useOutletContext();
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
            src={podcastDetails?.image ?? ''}
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
            {podcastDetails?.title}
          </Typography>
          <Typography
            variant='body2'
            sx={styles.description}
            component={Link}
            to={url}
          >
            by {podcastDetails?.artist}
          </Typography>
        </Box>
        <Divider />
        <Box>
          <Typography variant='h6'>Summary</Typography>
          <Typography variant='body2' sx={styles.description}>
            {podcastDetails?.summary}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
