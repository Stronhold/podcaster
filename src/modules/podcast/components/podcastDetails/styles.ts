import { SxProps } from '@mui/material';

interface Styles {
  container: SxProps;
  content: SxProps;
  description: SxProps;
  image: SxProps;
}

export const styles: Styles = {
  container: {
    flex: '0 0 calc(30%)',
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
  },
};
