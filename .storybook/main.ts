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
    // Add support for CSS files
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // Ensure CSS is handled properly
    const cssRule = config.module.rules.find((rule: any) =>
      rule.test && rule.test.toString().includes('css')
    );

    if (!cssRule) {
      config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      });
    }

    return config;
  }
};
export default config;