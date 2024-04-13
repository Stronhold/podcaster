import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../shared/components/layout/Layout';
import { Main } from '../pages/Main/Main';
import { PodcastLayout } from '../modules/podcast/components/podcastLayout/PodcastLayout';
import { PodcastEpisodes } from '../pages/PodcastEpisodes/PodcastEpisodes';
import { EpisodeDetailPage } from '../pages/EpisodeDetailsPage/EpisodeDetailsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
        id: 'home',
      },
      {
        path: '/podcast/:id',
        element: <PodcastLayout />,
        children: [
          {
            element: <PodcastEpisodes />,
            path: '/podcast/:id',
          },
          {
            element: <EpisodeDetailPage />,
            path: '/podcast/:id/episode/:episodeId',
          },
        ],
      },
    ],
  },
]);
