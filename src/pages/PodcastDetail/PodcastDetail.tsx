import { Box } from '@mui/material';
import { styles } from './styles';
import { Outlet } from 'react-router-dom';
import { PodcastDetails } from '../../modules/podcast/components/podcastDetails/PodcastDetails';

export const PodcastDetail = () => {
  return (
    <Box sx={styles.container}>
      <PodcastDetails />
      <Outlet />
    </Box>
  );
};
