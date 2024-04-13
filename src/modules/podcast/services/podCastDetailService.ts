import { BaseAPI } from '../../../shared/infra/services/BaseAPI';
import { isPodcastArray } from '../../../shared/utils/typeguards';
import { Podcast } from '../models/Podcast';
import { IPodcastService, PodCastService } from './podCastService';

export interface IPodcastDetailService {
  getPodcastDetails(id: string): Promise<Podcast | unknown>;
}

export class PodCastDetailService
  extends BaseAPI
  implements IPodcastDetailService
{
  private podcastService: IPodcastService;
  constructor() {
    super();
    this.podcastService = new PodCastService();
  }

  async getPodcastDetails(id: string): Promise<Podcast | unknown> {
    try {
      const response = await this.podcastService.getPodcasts();
      if (isPodcastArray(response)) {
        const podcast = response.find((r) => r.id === id);
        if (!podcast) throw Error('No podcast found');
        return podcast;
      }
    } catch (err) {
      console.error('error fetching podcast details: ', err);
      return err;
    }
  }
}
