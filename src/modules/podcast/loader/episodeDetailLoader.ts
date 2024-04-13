import { Loading } from '../../../shared/components/layout/Layout';
import { isEpisode } from '../../../shared/utils/typeguards';
import { Episode } from '../models/Episode';
import { EpisodeDetailService } from '../services/episodeDetailsService';

export const episodeDetailLoader = async (
  podcastId: string,
  episodeId: string,
  setEpisode: (episode: Episode) => void,
  setLoading: (load: keyof Loading, value: boolean) => void,
) => {
  if (!podcastId || !episodeId) throw Error('not id provided');
  setLoading('episodeDetails', true);
  const podcastDetailService = new EpisodeDetailService();
  const episode = await podcastDetailService.getEpisodeDetails(
    podcastId,
    episodeId,
  );
  if (isEpisode(episode)) setEpisode(episode);
  setLoading('episodeDetails', false);
};
