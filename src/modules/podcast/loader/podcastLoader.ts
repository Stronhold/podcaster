import { Podcast } from '../models/Podcast';
import { PodCastService } from '../services/podCastService';

export const podcastLoader = async (
  setPodcasts: (podcast: Array<Podcast>) => void,
  setLoading: (load: boolean) => void,
) => {
  setLoading(true);
  const podCastService = new PodCastService();
  const podcasts = await podCastService.getPodcasts();
  if (Array.isArray(podcasts)) setPodcasts(podcasts);
  setLoading(false);
};
