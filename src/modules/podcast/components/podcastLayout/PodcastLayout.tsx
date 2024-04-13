import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { styles } from './styles';
import { PodcastDetails } from '../podcastDetails/PodcastDetails';

export const PodcastLayout = () => {
  return (
    <Box sx={styles.container}>
      <PodcastDetails />
      <Outlet />
    </Box>
  );
};
