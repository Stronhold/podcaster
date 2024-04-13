import { isEpisodeArray } from '../../../shared/utils/typeguards';
import { Episode } from '../models/Episode';
import { EpisodesService } from '../services/podcastEpisodesService';

export const podcastEpisodesLoader = async (
  id: string,
  setEpisodes: (podcast: Array<Episode>) => void,
  setLoading: (load: boolean) => void,
) => {
  if (!id) throw Error('not id provided');
  console.log('getting things');
  setLoading(true);
  const episodesService = new EpisodesService();
  const episodes = await episodesService.getEpisodes(id);
  if (isEpisodeArray(episodes)) setEpisodes(episodes);
  setLoading(false);
};
