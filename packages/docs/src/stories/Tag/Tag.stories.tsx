import { Tag, Typography } from '@higherme-ui/react';
import { Meta } from '@storybook/react';

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ['autodocs'],
  args: {
    children: <Typography.TextBody>Tag</Typography.TextBody>,
    backgroundColor: 'red10',
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
