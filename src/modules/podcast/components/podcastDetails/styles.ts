import { SxProps } from '@mui/material';

interface Styles {
  container: SxProps;
  content: SxProps;
  description: SxProps;
}

export const styles: Styles = {
  container: {
    flex: '0 0 calc(30%)',
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
