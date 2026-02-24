import { defineConfig } from 'oxlint';
import { config } from './src/config.ts';

export default defineConfig({
  extends: [
    config,
  ],
  globals: {},
  ignorePatterns: [
    '**/node_modules/**',
    '**/dist/**',
  ],
});
