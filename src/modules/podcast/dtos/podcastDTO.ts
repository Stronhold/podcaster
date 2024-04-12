import { LabelDTO } from './LabelDTO';

export interface PodcastDTO {
  title: LabelDTO;
  summary: LabelDTO;
  ['im:artist']: LabelDTO;
  ['im:image']: Array<LabelDTO>;
}
