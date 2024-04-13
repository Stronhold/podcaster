import { SxProps } from '@mui/material';
import { grey } from '@mui/material/colors';

interface Style {
  card: SxProps;
  image: SxProps;
  content: SxProps;
  title: SxProps;
  artist: SxProps;
}

export const styles: Style = {
  card: {
    display: 'flex',
    gap: 1,
    flexDirection: 'column',
    flex: '1 0 calc(25% - 16px)',
    marginTop: 4,
    paddingTop: 4,
    position: 'relative',
    overflow: 'visible',
  },
  content: {
    display: 'flex',
    gap: 1,
    flexDirection: 'column',
    paddingBottom: 0,
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    top: '-32px',
    left: '50%',
    marginLeft: '-30px',
    width: '60px !important',
    height: '60px',
    borderRadius: '50%',
  },
  title: {
    background: grey['400'],
    textTransform: 'uppercase',
    width: 'fit-content',
  },
  artist: { background: grey['400'], width: 'fit-content' },
};
