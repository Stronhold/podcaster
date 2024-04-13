import { SxProps } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

interface Style {
  oddRow: SxProps;
  evenRow: SxProps;
  link: SxProps;
  header: SxProps;
}
export const styles: Style = {
  oddRow: {
    background: lightBlue['100'],
  },
  evenRow: {
    background: 'inherit',
  },
  link: {
    textDecoration: 'none',
  },
  header: {
    fontWeight: 'bold',
  },
};
