import { apiRoutes } from '../../../config/apiRoutes';
import { DAY_IN_MILLIS, CacheKeys } from '../../../config/consts';
import { BaseAPI } from '../../../shared/infra/services/BaseAPI';
import { BaseDTO } from '../dtos/baseDTO';
import { Podcast } from '../models/Podcast';
import { PopularPodtcasUtil } from '../utils/PopularPodcastUtil';

export interface IPodcastService {
  getPodcasts(): Promise<Array<Podcast> | unknown>;
}

export class PodCastService extends BaseAPI implements IPodcastService {
  constructor() {
    super(CacheKeys.TopPodcasts, DAY_IN_MILLIS);
  }

  async getPodcasts(): Promise<Array<Podcast> | unknown> {
    try {
      const response: BaseDTO = await this.get(apiRoutes.getTopPodcastsApi());
      return PopularPodtcasUtil.toViewModel(response);
    } catch (err) {
      console.error('error fetching podcasts: ', err);
      return err;
    }
  }
}
