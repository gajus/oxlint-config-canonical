import { defineConfig, type OxlintConfig } from 'oxlint';
import { config } from './src/config.ts';

const oxlintConfig: OxlintConfig = defineConfig({
  extends: [
    config,
  ],
  globals: {},
  ignorePatterns: [
    '**/node_modules/**',
    '**/dist/**',
  ],
});

export default oxlintConfig;
