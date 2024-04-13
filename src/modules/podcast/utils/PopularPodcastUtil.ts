import { BaseDTO } from '../dtos/baseDTO';
import { PopularPodcastDTO } from '../dtos/popularPodcastDTO';
import { Podcast } from '../models/Podcast';

export class PopularPodtcasUtil {
  private static parseContentToFeed(dto: BaseDTO): PopularPodcastDTO {
    return JSON.parse(dto.contents);
  }

  public static toViewModel(dto: BaseDTO): Array<Podcast> {
    const popularPodcasts = PopularPodtcasUtil.parseContentToFeed(dto);
    return popularPodcasts.feed.entry.map((entry) => ({
      artist: entry['im:artist'].label,
      image: entry['im:image'].length > 0 ? entry['im:image'][0].label : '',
      summary: entry.summary.label,
      title: entry.title.label,
      id: entry.id.attributes['im:id'],
    }));
  }
}
