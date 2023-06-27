import { Button } from '@higherme-ui/react';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
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
