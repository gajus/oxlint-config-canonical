import { defineConfig } from 'tsdown';

export default defineConfig({
  clean: false,
  dts: true,
  entry: ['src/config.ts'],
  format: 'esm',
  outDir: 'dist',
  outputOptions: {
    entryFileNames: '[name].js',
  },
});
