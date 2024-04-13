import { SxProps } from '@mui/material';

interface Styles {
  filterLine: SxProps;
  chip: SxProps;
}

export const styles: Styles = {
  filterLine: {
    display: 'flex',
    justifyContent: 'end',
    gap: 2,
  },
  chip: {
    margin: 'auto 0',
  },
};
