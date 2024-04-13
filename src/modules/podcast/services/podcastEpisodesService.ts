import { apiRoutes } from '../../../config/apiRoutes';
import { BaseAPI } from '../../../shared/infra/services/BaseAPI';
import { BaseDTO } from '../dtos/baseDTO';
import { Episode } from '../models/Episode';
import { Podcast } from '../models/Podcast';
import { EpisodesUtil } from '../utils/EpisodesUtil';

export interface IPodcastEPisodesService {
  getEpisodes(id: string): Promise<Array<Episode> | unknown>;
}

export class EpisodesService
  extends BaseAPI
  implements IPodcastEPisodesService
{
  constructor() {
    super();
  }

  async getEpisodes(id: string): Promise<Array<Podcast> | unknown> {
    try {
      const response: BaseDTO = await this.get(
        apiRoutes.getPodcastEpisodes(id),
      );
      return EpisodesUtil.toViewModel(response);
    } catch (err) {
      console.error('error fetching episodes: ', err);
      return err;
    }
  }
}
