import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../shared/components/layout/Layout';
import { Main } from '../pages/Main';

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
    ],
  },
]);
