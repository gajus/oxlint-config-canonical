# oxlint-config-canonical

The most comprehensive Oxlint configuration.

Successor to https://github.com/gajus/eslint-config-canonical.

## Usage

```ts
import { config } from 'oxlint-config-canonical';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [
    config,
  ],
});
```