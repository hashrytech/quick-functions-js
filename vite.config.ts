import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'Quick-Functions-JS',
      formats: ['es', 'cjs'],
      fileName: (format) => `quick-functions-js.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    minify: false,
    rollupOptions: {
      external: [], // Add dependencies here if you have any
    },
  },
  plugins: [dts({ outDir: 'dist' })],
});
