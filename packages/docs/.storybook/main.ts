import { StorybookConfig } from '@storybook/react-webpack5';
/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config: StorybookConfig = {
  stories: [
    '../src/stories/home.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.mdx',
  ],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
    },
  },
  webpackFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      // @ts-ignore
      config.output.publicPath = '/higherme-ui/';
    }
    return config;
  },
};
export default config;
