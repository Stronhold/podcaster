import { apiRoutes } from '../../../config/apiRoutes';
import { DAY_IN_MILLIS, CacheKeys } from '../../../config/consts';
import { BaseAPI } from '../../../shared/infra/services/BaseAPI';
import { BaseDTO } from '../dtos/baseDTO';
import { PodcastDetail } from '../models/PodcastDetails';
import { PodcastDetailsUtil } from '../utils/PodcastDetailsUtil';

export interface IPodcastDetailService {
  getPodcastDetails(id: string): Promise<PodcastDetail | unknown>;
}

export class PodCastDetailService
  extends BaseAPI
  implements IPodcastDetailService
{
  constructor() {
    super(CacheKeys.PodcastDetails, DAY_IN_MILLIS);
  }

  async getPodcastDetails(id: string): Promise<PodcastDetail | unknown> {
    try {
      const response: BaseDTO = await this.get(apiRoutes.getPodCastDetails(id));
      return PodcastDetailsUtil.toViewModel(response);
    } catch (err) {
      console.error('error fetching podcast details: ', err);
      return err;
    }
  }
}
