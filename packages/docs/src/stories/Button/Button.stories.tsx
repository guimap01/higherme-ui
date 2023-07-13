import { Button } from '@higherme-ui/react';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
  argTypes: {
    variant: {
      defaultValue: 'primary',
      description: 'The variant of the button',
    },
    children: {
      description: 'The content of the button',
    },
    small: {
      defaultValue: false,
      description: 'If true, the button will be small',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const SecondaryWhite: Story = {
  args: {
    variant: 'secondary-white',
    children: 'Secondary White',
  },
};

export const SecondaryBlue: Story = {
  args: {
    variant: 'secondary-blue',
    children: 'Secondary Blue',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    children: 'Small',
    small: true,
  },
};
