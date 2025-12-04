import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/angular",
    options: {
      enableIvy: true,
      enableProdMode: false
    }
  },
  docs: {
    autodocs: true
  },
  core: {
    disableTelemetry: true
  },
  typescript: {
    check: false,
    reactDocgen: false
  },
  webpackFinal: async (config: any) => {
    // Ensure CSS files are handled properly
    // Storybook already has CSS loaders, but we ensure @import works
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // Find CSS rules and ensure they handle @import
    config.module.rules.forEach((rule: any) => {
      if (rule.test && rule.test.toString().includes('css')) {
        // Ensure css-loader processes @import statements
        if (rule.use) {
          rule.use = rule.use.map((loader: any) => {
            if (typeof loader === 'string' && loader.includes('css-loader')) {
              return {
                loader: 'css-loader',
                options: {
                  import: true, // Process @import statements
                  esModule: false,
                },
              };
            }
            if (typeof loader === 'object' && loader.loader && loader.loader.includes('css-loader')) {
              return {
                ...loader,
                options: {
                  ...loader.options,
                  import: true, // Process @import statements
                  esModule: false,
                },
              };
            }
            return loader;
          });
        }
      }
    });

    return config;
  }
};
export default config;