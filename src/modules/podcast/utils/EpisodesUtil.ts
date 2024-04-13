import { ResultsDTO } from '../dtos/ResultsDTO';
import { BaseDTO } from '../dtos/baseDTO';
import { EpisodeDTO } from '../dtos/episodeDTO';
import { Episode } from '../models/Episode';
import { Util } from './Util';

export class EpisodesUtil extends Util {
  public static toViewModel(dto: BaseDTO): Array<Episode> {
    const episodes = EpisodesUtil.parseContent<ResultsDTO<EpisodeDTO>>(dto);
    return episodes.results.map((ep) => {
      const seconds = ep.trackTimeMillis / 1000;
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      const [date] = ep.releaseDate.split('T');
      const [year, month, day] = date.split('-');
      return {
        date: `${day}/${month}/${year}`,
        duration: `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`,
        id: ep.trackId,
        title: ep.trackName,
      };
    });
  }
}
