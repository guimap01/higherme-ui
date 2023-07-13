import { Tag, Typography } from '@higherme-ui/react';
import { Meta } from '@storybook/react';

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ['autodocs'],
  title: 'Components/Tag',
  args: {
    children: <Typography.TextBody>Tag</Typography.TextBody>,
    backgroundColor: 'red10',
  },
  argTypes: {
    children: {
      description: 'The content of the tag',
    },
    backgroundColor: {
      description: 'The background color of the tag',
    },
    clickable: {
      defaultValue: false,
      description: 'If true, the tag will be clickable',
    },
    onClick: {
      description: 'The click handler of the tag',
    },
    leftIconName: {
      description: 'The name of the left icon',
    },
    leftIconColor: {
      description: 'The color of the left icon',
    },
    rightIconName: {
      description: 'The name of the right icon',
    },
    rightIconColor: {
      description: 'The color of the right icon',
    },
  },
};

export default meta;

export const Default = {};

export const Clickable = {
  args: {
    clickable: true,
    onClick: () => alert('Clicked!'),
  },
};

export const WithLeftIcon = {
  args: {
    leftIconName: 'addCircle',
    leftIconColor: 'blue100',
    backgroundColor: 'white',
  },
};

export const WithRightIcon = {
  args: {
    rightIconName: 'addCircle',
    rightIconColor: 'blue100',
    backgroundColor: 'white',
  },
};
