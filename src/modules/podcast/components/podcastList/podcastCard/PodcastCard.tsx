import { Box, Card, CardContent, Typography } from '@mui/material';
import { Podcast } from '../../../models/Podcast';
import { styles } from './styles';

interface Props {
  podcast: Podcast;
}
export const PodcastCard = ({ podcast }: Props) => {
  return (
    <Card sx={styles.card}>
      <Box component={'img'} src={podcast.image} sx={styles.image} />
      <CardContent sx={styles.content}>
        <Typography variant='body2' sx={styles.title}>
          {podcast.title}
        </Typography>
        <Typography variant='caption' sx={styles.artist}>
          {podcast.artist}
        </Typography>
      </CardContent>
    </Card>
  );
};
