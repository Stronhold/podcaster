import { SxProps } from '@mui/material';

interface Styles {
  container: SxProps;
  header: SxProps;
}
export const styles: Styles = {
  container: {
    display: 'flex',
  },
  header: {
    flex: '1 0 auto',
    margin: 'auto 0',
  },
};
