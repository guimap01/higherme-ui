import { FloatingLabelInput } from '@higherme-ui/react';
import { Meta, StoryObj } from '@storybook/react';
export default {
  title: 'Input',
  component: FloatingLabelInput,
} as Meta;

export const Default: StoryObj = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
};
