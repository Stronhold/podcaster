/* eslint-disable @typescript-eslint/no-explicit-any */
import { Podcast } from '../../modules/podcast/models/Podcast';
import { Episode } from '../../modules/podcast/models/Episode';

export const isPodcast = (podcast: any): podcast is Podcast =>
  'id' in podcast &&
  'title' in podcast &&
  'image' in podcast &&
  'summary' in podcast &&
  'artist' in podcast;

export const isEpisode = (episode: any): episode is Episode =>
  'title' in episode &&
  'id' in episode &&
  'date' in episode &&
  'duration' in episode;

export const isPodcastArray = (podcasts: any): podcasts is Array<Podcast> =>
  Array.isArray(podcasts) && podcasts.every(isPodcast);

export const isEpisodeArray = (episodes: any): episodes is Array<Episode> =>
  Array.isArray(episodes) && episodes.every(isEpisode);
