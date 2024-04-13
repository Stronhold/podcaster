import { Loading } from '../../../shared/components/layout/Layout';
import { isEpisodeArray } from '../../../shared/utils/typeguards';
import { Episode } from '../models/Episode';
import { EpisodesService } from '../services/podcastEpisodesService';

export const podcastEpisodesLoader = async (
  id: string,
  setEpisodes: (podcast: Array<Episode>) => void,
  setLoading: (load: keyof Loading, value: boolean) => void,
) => {
  if (!id) throw Error('not id provided');
  setLoading('episodesList', true);
  const episodesService = new EpisodesService();
  const episodes = await episodesService.getEpisodes(id);
  if (isEpisodeArray(episodes)) setEpisodes(episodes);
  setLoading('episodesList', false);
};
