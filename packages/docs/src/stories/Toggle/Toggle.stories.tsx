import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@higherme-ui/react';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Components/Toggle',
  tags: ['autodocs'],
  argTypes: {
    checked: {
      defaultValue: false,
      description: 'If true, the toggle will be checked',
    },
    disabled: {
      defaultValue: false,
      description: 'If true, the toggle will be disabled',
    },
    children: {
      description: 'The content of the toggle',
    },
  },
};

type Story = StoryObj<typeof Toggle>;

export default meta;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
