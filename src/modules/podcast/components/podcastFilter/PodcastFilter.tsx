import { Box, Chip, TextField } from '@mui/material';
import { styles } from './styles';

interface Props {
  filterText: string;
  setFilter: (filter: string) => void;
  availableResults: number;
}
export const PodcastFilter = ({
  availableResults,
  filterText,
  setFilter,
}: Props) => {
  return (
    <Box sx={styles.filterLine}>
      <Chip label={availableResults} color='primary' sx={styles.chip} />
      <TextField
        variant='outlined'
        label='Filter podcasts...'
        value={filterText}
        onChange={(event) => setFilter(event.target.value)}
      />
    </Box>
  );
};
