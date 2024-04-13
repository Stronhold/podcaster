import { BaseAPI } from '../../../shared/infra/services/BaseAPI';
import { isEpisodeArray } from '../../../shared/utils/typeguards';
import { Episode } from '../models/Episode';
import {
  EpisodesService,
  IPodcastEPisodesService,
} from './podcastEpisodesService';

export interface IEpisodeDetailService {
  getEpisodeDetails(
    podcastId: string,
    episodeId: string,
  ): Promise<Episode | unknown>;
}

export class EpisodeDetailService
  extends BaseAPI
  implements IEpisodeDetailService
{
  private podcastService: IPodcastEPisodesService;
  constructor() {
    super();
    this.podcastService = new EpisodesService();
  }

  async getEpisodeDetails(
    podcastId: string,
    episodeId: string,
  ): Promise<Episode | unknown> {
    try {
      const response = await this.podcastService.getEpisodes(podcastId);
      if (isEpisodeArray(response)) {
        const episode = response.find((r) => r.id.toString() === episodeId);
        if (!episode) throw Error('No episode found');
        return episode;
      }
    } catch (err) {
      console.error('error fetching episode details: ', err);
      return err;
    }
  }
}
