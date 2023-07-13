import { Button, Drawer } from '@higherme-ui/react';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: 'Components/Drawer',
  tags: ['autodocs'],
  argTypes: {
    position: {
      defaultValue: 'right',
      description: 'The position of the drawer',
    },
    trigger: {
      description: 'The trigger of the drawer',
    },
    children: {
      description: 'The content of the drawer',
    },
    title: {
      description: 'The title of the drawer',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Drawer
        trigger={
          <Button variant="primary" small>
            Open Drawer right
          </Button>
        }
        title="Drawer Title"
      >
        <div>Drawer Content</div>
      </Drawer>
      <Drawer
        position="left"
        trigger={
          <Button variant="primary" small>
            Open Drawer left
          </Button>
        }
        title="Drawer Title"
      >
        <div>Drawer Content</div>
      </Drawer>
    </div>
  ),
};
