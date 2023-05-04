import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@higherme-ui/react';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Text',
    disabled: false,
    variant: 'primary',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary-white', 'secondary-blue'],
    },
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
