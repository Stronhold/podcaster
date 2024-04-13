export interface EpisodeDTO {
  releaseDate: string;
  trackName: string;
  trackId: number;
  trackTimeMillis: number;
  kind: 'podcast' | 'podcast-episode';
  description: string;
  previewUrl: string;
}
