import { SxProps } from '@mui/material';
import { grey } from '@mui/material/colors';

interface Styles {
  container: SxProps;
  content: SxProps;
  description: SxProps;
  imageLink: SxProps;
  image: SxProps;
  podcastName: SxProps;
}

export const styles: Styles = {
  container: {
    flex: '0 0 calc(30%)',
    height: 'fit-content',
  },
  podcastName: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  },
  imageLink: {
    margin: '0 auto',
  },
  image: {
    height: 150,
    width: 150,
    margin: '0 auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  description: {
    fontStyle: 'italic',
    textDecoration: 'none',
    color: grey['800'],
  },
};
