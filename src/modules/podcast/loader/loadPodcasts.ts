import { PodCastService } from '../services/podCastService';

export const podcastLoader = async () => {
  const podCastService = new PodCastService();
  const podcasts = await podCastService.getPodcasts();
  return { podcasts };
};
