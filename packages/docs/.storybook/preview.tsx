import { themes } from '@storybook/theming';
import {
  Title,
  Subtitle,
  Description,
  Stories,
  ArgsTable,
  ArgTypes,
} from '@storybook/blocks';
import React from 'react';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories />
          <ArgTypes />
        </>
      ),
    },
  },
};

export default preview;
