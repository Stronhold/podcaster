import { Box } from '@mui/material';
import { Podcast } from '../../models/Podcast';
import { PodcastCard } from './podcastCard/PodcastCard';
import { styles } from './styles';
import { EmptyPodcastCard } from './podcastCard/EmptyPodcastCard';

const CARDS_PER_LINE = 4;
interface Props {
  podcasts: Array<Podcast>;
}
export const PodcastList = ({ podcasts }: Props) => {
  const extraEmptyCards = CARDS_PER_LINE - (podcasts.length % 4);
  return (
    <Box sx={styles.container}>
      {podcasts.map((p) => (
        <PodcastCard podcast={p} key={p.id} />
      ))}
      {Array(extraEmptyCards)
        .fill(1)
        .map(() => (
          <EmptyPodcastCard />
        ))}
    </Box>
  );
};
