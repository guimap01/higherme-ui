/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
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
    reactDocgen: 'react-docgen-typescript-plugin',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
    },
  },
};
export default config;
