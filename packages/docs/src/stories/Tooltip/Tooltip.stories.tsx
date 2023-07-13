import { Meta, StoryObj } from '@storybook/react';
import { Button, Tooltip } from '@higherme-ui/react';
const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  argTypes: {
    content: {
      description: 'The content of the tooltip',
    },
    children: {
      description: 'The children of the tooltip',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
  },
};

export const WithCustomChildren: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button>Hover me</Button>,
  },
};
