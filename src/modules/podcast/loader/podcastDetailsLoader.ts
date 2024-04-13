import { Loading } from '../../../shared/components/layout/Layout';
import { isPodcast } from '../../../shared/utils/typeguards';
import { Podcast } from '../models/Podcast';
import { PodCastDetailService } from '../services/podCastDetailService';

export const podcastDetailsLoader = async (
  id: string,
  setPodcast: (podcast: Podcast) => void,
  setLoading: (load: keyof Loading, value: boolean) => void,
) => {
  if (!id) throw Error('not id provided');
  setLoading('podcastDetails', true);
  const podcastDetailService = new PodCastDetailService();
  const podcast = await podcastDetailService.getPodcastDetails(id);
  if (isPodcast(podcast)) setPodcast(podcast);
  setLoading('podcastDetails', false);
};
