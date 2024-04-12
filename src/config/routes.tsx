import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../shared/layout/Layout';
import { podcastLoader } from '../modules/podcast/loader/loadPodcasts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <span>hey</span>,
        loader: podcastLoader,
        id: 'home',
      },
    ],
  },
]);
