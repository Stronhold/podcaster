import {
  Link as MUILink,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { Episode } from '../../models/Episode';
import { styles } from './styles';
import { Link } from 'react-router-dom';

interface Props {
  episodes: Array<Episode>;
  podcastId: string;
}
export const EpisodesTable = ({ episodes, podcastId }: Props) => (
  <Table sx={{ width: '100%' }}>
    <TableHead>
      <TableRow>
        <TableCell width={'60%'} sx={styles.header}>
          Title
        </TableCell>
        <TableCell width={'20%'} sx={styles.header}>
          Date
        </TableCell>
        <TableCell width={'20%'} align='center' sx={styles.header}>
          Duration
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {episodes.map((ep, index) => (
        <TableRow
          key={ep.id}
          sx={index % 2 === 0 ? styles.evenRow : styles.oddRow}
        >
          <TableCell width={'60%'}>
            <MUILink
              sx={styles.link}
              component={Link}
              to={`/podcast/${podcastId}/episode/${ep.id}`}
            >
              {ep.title}
            </MUILink>
          </TableCell>
          <TableCell width={'20%'}>{ep.date}</TableCell>
          <TableCell align='center'>{ep.duration}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
