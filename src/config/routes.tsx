import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../shared/components/layout/Layout';
import { Main } from '../pages/Main';
import { PodcastLayout } from '../modules/podcast/components/podcastLayout/PodcastLayout';

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
            element: <span />,
            path: '/podcast/:id',
          },
        ],
      },
    ],
  },
]);
