import { defineConfig, type OxlintConfig } from 'oxlint';
import { config } from 'oxlint-config-canonical';

type Equal<Actual, Expected> =
  (<Value>() => Value extends Actual ? 1 : 2) extends (<Value>() => Value extends Expected ? 1 : 2)
    ? true
    : false;

export const exact: Equal<typeof config, OxlintConfig> = true;

export const extended: OxlintConfig = defineConfig({
  extends: [
    config,
  ],
});
