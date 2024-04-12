import { BaseAPI } from '../../../shared/infra/services/BaseAPI';
import { BaseDTO } from '../dtos/baseDTO';
import { Podcast } from '../models/Podcast';
import { PopularPodtcasUtil } from '../utils/PopularPodcastUtil';

export interface ICommentService {
  getPodcasts(): Promise<Array<Podcast> | unknown>;
}

export class PodCastService extends BaseAPI implements ICommentService {
  constructor() {
    super();
  }

  async getPodcasts(): Promise<Array<Podcast> | unknown> {
    try {
      const response = await this.get(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
      );
      const data: BaseDTO = await response.json();
      return PopularPodtcasUtil.toViewModel(data);
    } catch (err) {
      return err;
    }
  }
}
