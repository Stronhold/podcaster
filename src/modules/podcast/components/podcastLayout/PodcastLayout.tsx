import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { styles } from './styles';
import { PodcastDetails } from '../podcastDetails/PodcastDetails';
import { useHeaderLoadingState } from '../../../../shared/hooks/useHeaderLoadingState';

export const PodcastLayout = () => {
  const { updateState } = useHeaderLoadingState();
  return (
    <Box sx={styles.container}>
      <PodcastDetails />
      <Outlet context={{ updateState }} />
    </Box>
  );
};
