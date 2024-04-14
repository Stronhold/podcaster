import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { theme } from '../infra/ui/theme';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface CustomRenderOptions<T = any> extends RenderOptions {
  context: T;
  children: React.ReactNode;
  route?: string;
}
// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = <T,>({
  children,
  context,
  route = '/',
}: CustomRenderOptions) => {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path='/' element={<Outlet context={context as T} />}>
            <Route index element={children} />
          </Route>
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: CustomRenderOptions) =>
  render(
    <AllTheProviders route={options?.route} context={options?.context}>
      {ui}
    </AllTheProviders>,
  );

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };
