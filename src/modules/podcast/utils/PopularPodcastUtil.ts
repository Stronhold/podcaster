import { BaseDTO } from '../dtos/baseDTO';
import { PopularPodcastDTO } from '../dtos/popularPodcastDTO';
import { Podcast } from '../models/Podcast';
import { Util } from './Util';

export class PopularPodtcasUtil extends Util {
  public static toViewModel(dto: BaseDTO): Array<Podcast> {
    const popularPodcasts =
      PopularPodtcasUtil.parseContent<PopularPodcastDTO>(dto);
    return popularPodcasts.feed.entry.map((entry) => {
      console.log('entry: ', entry);
      return {
        artist: entry['im:artist'].label,
        image: entry['im:image'].length > 0 ? entry['im:image'][0].label : '',
        summary: entry.summary.label,
        title: entry.title.label,
        id: entry.id.attributes['im:id'],
      };
    });
  }
}
