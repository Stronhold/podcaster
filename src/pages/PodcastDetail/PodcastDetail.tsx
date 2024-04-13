import { Box } from '@mui/material';
import { styles } from './Main/styles';
import { PodcastDetails } from '../modules/podcast/components/podcastDetails/PodcastDetails';
import { Outlet } from 'react-router-dom';

export const PodcastDetail = () => {
  return (
    <Box sx={styles.container}>
      <PodcastDetails />
      <Outlet />
    </Box>
  );
};
