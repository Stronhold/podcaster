import { PodcastDetailDTO } from '../dtos/PodcastDetailDTO';
import { ResultsDTO } from '../dtos/ResultsDTO';
import { BaseDTO } from '../dtos/baseDTO';
import { PodcastDetail } from '../models/PodcastDetails';
import { Util } from './Util';

export class PodcastDetailsUtil extends Util {
  public static toViewModel(dto: BaseDTO): PodcastDetail | null {
    const popcastDetails =
      PodcastDetailsUtil.parseContent<ResultsDTO<PodcastDetailDTO>>(dto);
    if (popcastDetails.resultCount === 1) {
      const [popcastDetail] = popcastDetails.results;
      return {
        artistName: popcastDetail.artistName,
        podcastImage: popcastDetail.artworkUrl600,
        podcastName: popcastDetail.trackName,
        summary: '',
      };
    }
    return null;
  }
}
