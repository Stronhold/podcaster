import { isPodcastDetail } from '../../../shared/utils/typeguards';
import { PodcastDetail } from '../models/PodcastDetails';
import { PodCastDetailService } from '../services/podCastDetailService';

export const podcastDetailsLoader = async (
  id: string,
  setPodcast: (podcast: PodcastDetail) => void,
  setLoading: (load: boolean) => void,
) => {
  if (!id) throw Error('not id provided');
  setLoading(true);
  const podcastDetailService = new PodCastDetailService();
  const podcast = await podcastDetailService.getPodcastDetails(id);
  if (isPodcastDetail(podcast)) setPodcast(podcast);
  setLoading(false);
};
