import { SxProps } from '@mui/material';

interface Style {
  container: SxProps;
  card: SxProps;
}
export const styles: Style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  card: {
    flex: '1 0',
    height: 'fit-content',
  },
};
