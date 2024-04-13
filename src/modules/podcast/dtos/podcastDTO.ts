import { LabelDTO } from './LabelDTO';

export interface PodcastDTO {
  title: LabelDTO;
  summary: LabelDTO;
  id: {
    attributes: {
      'im:id': string;
    };
  } & LabelDTO;
  ['im:artist']: LabelDTO;
  ['im:image']: Array<LabelDTO>;
}
