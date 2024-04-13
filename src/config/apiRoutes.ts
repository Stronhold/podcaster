export const apiRoutes = {
  getTopPodcastsApi: () =>
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
  getPodCastDetails: (id: string) =>
    `https://itunes.apple.com/lookup?media=podcast&entity=podcast&id=${id}`,
  getPodcastEpisodes: (id: string) =>
    `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`,
};
