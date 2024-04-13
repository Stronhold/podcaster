import { isPodcast } from '../../../shared/utils/typeguards';
import { Podcast } from '../models/Podcast';
import { PodCastDetailService } from '../services/podCastDetailService';

export const podcastDetailsLoader = async (
  id: string,
  setPodcast: (podcast: Podcast) => void,
  setLoading: (load: boolean) => void,
) => {
  if (!id) throw Error('not id provided');
  setLoading(true);
  const podcastDetailService = new PodCastDetailService();
  const podcast = await podcastDetailService.getPodcastDetails(id);
  if (isPodcast(podcast)) setPodcast(podcast);
  setLoading(false);
};
