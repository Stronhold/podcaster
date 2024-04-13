import { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { episodeDetailLoader } from '../../loader/episodeDetailLoader';
import { Episode } from '../../models/Episode';
import { styles } from './styles';
import { isHTML } from '../../../../shared/utils/isHtml';
import { useHeaderLoadingState } from '../../../../shared/hooks/useHeaderLoadingState';

export const EpisodeDetails = () => {
  const { id, episodeId } = useParams();
  const [episodeDetails, setEpisodeDetails] = useState<Episode | null>(null);
  const { updateState } = useHeaderLoadingState();

  useEffect(() => {
    episodeDetailLoader(
      id ?? '',
      episodeId ?? '',
      setEpisodeDetails,
      updateState,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!episodeDetails) return null;
  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.container}>
        <Typography variant='h6'>{episodeDetails?.title}</Typography>
        {isHTML(episodeDetails?.description ?? '') ? (
          <p
            dangerouslySetInnerHTML={{
              __html: episodeDetails?.description ?? '',
            }}
          />
        ) : (
          <Typography variant='body2'>{episodeDetails?.description}</Typography>
        )}
        <audio controls preload='auto'>
          <source src={episodeDetails.podcastUrl} />
        </audio>
      </CardContent>
    </Card>
  );
};
