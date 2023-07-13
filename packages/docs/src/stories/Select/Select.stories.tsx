import { Select } from '@higherme-ui/react';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  component: Select,
  title: 'Components/Select',
  tags: ['autodocs'],
  argTypes: {
    options: {
      defaultValue: [],
      description: 'The options of the select',
    },
    isMulti: {
      defaultValue: false,
      description: 'If true, the select will be multi-select',
    },
    children: {
      description: 'The content of the select',
    },
    showCheckbox: {
      defaultValue: false,
      description: 'If true, the select will show checkbox',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
  },
  render: (args: any) => (
    <div
      style={{
        height: '150px',
      }}
    >
      <Select {...args} label="Label" />
    </div>
  ),
};

export const MultiSelect: Story = {
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    isMulti: true,
  },
  render: (args: any) => (
    <div
      style={{
        height: '150px',
      }}
    >
      <Select {...args} label="Label" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      { value: '4', label: 'Option 4' },
      { value: '5', label: 'Option 5' },
      { value: '6', label: 'Option 6' },
      { value: '7', label: 'Option 7' },
      { value: '8', label: 'Option 8' },
      { value: '9', label: 'Option 9' },
    ],
    showCheckbox: true,
    isMulti: true,
  },
  render: (args: any) => (
    <div
      style={{
        height: '150px',
      }}
    >
      <Select {...args} label="Label" />
    </div>
  ),
};
