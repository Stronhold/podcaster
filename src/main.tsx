import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/routes.tsx';
import { theme } from './shared/infra/ui/theme.ts';
import { ThemeProvider } from '@mui/material';

async function enableMocking() {
  if (
    import.meta.env.NODE_ENV !== 'development' &&
    !import.meta.env.VITE_MOCK
  ) {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>,
  ),
);
