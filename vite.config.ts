import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts'],
    pool: 'forks',
    include: ['**/__test__/**.spec.tsx', '**/__test__/**.spec.ts'],
  },
});
