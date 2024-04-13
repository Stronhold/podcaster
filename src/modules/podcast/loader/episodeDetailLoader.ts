import { isEpisode } from '../../../shared/utils/typeguards';
import { Episode } from '../models/Episode';
import { EpisodeDetailService } from '../services/episodeDetailsService';

export const episodeDetailLoader = async (
  podcastId: string,
  episodeId: string,
  setEpisode: (podcast: Episode) => void,
  setLoading: (load: boolean) => void,
) => {
  if (!podcastId || !episodeId) throw Error('not id provided');
  setLoading(true);
  const podcastDetailService = new EpisodeDetailService();
  const episode = await podcastDetailService.getEpisodeDetails(
    podcastId,
    episodeId,
  );
  if (isEpisode(episode)) setEpisode(episode);
  setLoading(false);
};
