export interface EpisodeDTO {
  releaseDate: string;
  trackName: string;
  trackId: string;
  trackTimeMillis: number;
  kind: 'podcast' | 'podcast-episode';
}
