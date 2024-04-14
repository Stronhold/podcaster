import { Box } from '@mui/material';
import { Podcast } from '../../models/Podcast';
import { PodcastCard } from './podcastCard/PodcastCard';
import { styles } from './styles';
import { EmptyPodcastCard } from './podcastCard/EmptyPodcastCard';
import { DataTestid } from '../../../../shared/utils/dataTestId';

const CARDS_PER_LINE = 4;
interface Props {
  podcasts: Array<Podcast>;
}
export const PodcastList = ({ podcasts }: Props) => {
  if (!podcasts || podcasts.length === 0) return null;
  const extraEmptyCards =
    podcasts.length % 4 === 0 ? 0 : CARDS_PER_LINE - (podcasts.length % 4);
  return (
    <Box sx={styles.container} data-testid={DataTestid.PodcastContainer}>
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
