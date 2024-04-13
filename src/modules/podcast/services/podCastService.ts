import { API_ROUTES } from '../../../config/apiRoutes';
import { TOP_PODCASTS_KEY } from '../../../config/consts';
import { BaseAPI } from '../../../shared/infra/services/BaseAPI';
import { BaseDTO } from '../dtos/baseDTO';
import { Podcast } from '../models/Podcast';
import { PopularPodtcasUtil } from '../utils/PopularPodcastUtil';

export interface ICommentService {
  getPodcasts(): Promise<Array<Podcast> | unknown>;
}

export class PodCastService extends BaseAPI implements ICommentService {
  constructor() {
    super(TOP_PODCASTS_KEY, 24 * 60 * 60 * 1000);
  }

  async getPodcasts(): Promise<Array<Podcast> | unknown> {
    try {
      const response: BaseDTO = await this.get(API_ROUTES.TOP_PODCASTS);
      return PopularPodtcasUtil.toViewModel(response);
    } catch (err) {
      console.error('error fetching podcasts: ', err);
      return err;
    }
  }
}
