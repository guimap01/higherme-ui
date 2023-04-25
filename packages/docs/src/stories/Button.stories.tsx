import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@higherme-ui/react';
export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Text',
    disabled: false,
  },
} as Meta;

export const Primary: StoryObj = {};

export const SecondaryWhite: StoryObj = {
  args: {
    variant: 'secondary-white',
  },
};

export const SecondaryBlue: StoryObj = {
  args: {
    variant: 'secondary-blue',
  },
};
