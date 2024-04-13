import { Box } from '@mui/material';
import { Podcast } from '../../models/Podcast';
import { PodcastCard } from './podcastCard/PodcastCard';
import { styles } from './styles';

interface Props {
  podcasts: Array<Podcast>;
}
export const PodcastList = ({ podcasts }: Props) => {
  return (
    <Box sx={styles.container}>
      {podcasts.map((p) => (
        <PodcastCard podcast={p} />
      ))}
    </Box>
  );
};
