/* eslint-disable @typescript-eslint/no-explicit-any */
import { PodcastDetail } from '../../modules/podcast/models/PodcastDetails';
import { Podcast } from '../../modules/podcast/models/Podcast';

export const isPodcast = (podcast: any): podcast is Podcast =>
  'id' in podcast &&
  'title' in podcast &&
  'image' in podcast &&
  'summary' in podcast &&
  'artist' in podcast;

export const isPodcastArray = (podcasts: any): podcasts is Array<Podcast> =>
  Array.isArray(podcasts) && podcasts.every(isPodcast);

export const isPodcastDetail = (podcast: any): podcast is PodcastDetail =>
  'podcastImage' in podcast &&
  'podcastName' in podcast &&
  'artistName' in podcast;
