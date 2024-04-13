import { Card, CardContent, CircularProgress, Typography } from '@mui/material';
import { styles } from './styles';

interface Props {
  loading: boolean;
}
export const Header = ({ loading }: Props) => {
  return (
    <Card>
      <CardContent sx={styles.container}>
        <Typography variant='h5' color={'primary'} sx={styles.header}>
          Podcaster
        </Typography>
        {loading && <CircularProgress />}
      </CardContent>
    </Card>
  );
};
