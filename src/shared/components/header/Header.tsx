import { Card, CardContent, CircularProgress, Typography } from '@mui/material';
import { styles } from './styles';
import { Link } from 'react-router-dom';

interface Props {
  loading: boolean;
}
export const Header = ({ loading }: Props) => {
  return (
    <Card>
      <CardContent sx={styles.container}>
        <Typography
          variant='h5'
          color={'primary'}
          sx={styles.header}
          component={Link}
          to='/'
        >
          Podcaster
        </Typography>
        {loading && <CircularProgress size={30} />}
      </CardContent>
    </Card>
  );
};
