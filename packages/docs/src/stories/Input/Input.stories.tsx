import { FloatingLabelInput } from '@higherme-ui/react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';

const meta: Meta<typeof FloatingLabelInput> = {
  component: FloatingLabelInput,
  title: 'Components/FloatingLabelInput',
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'The label of the input',
    },
    isOptional: {
      defaultValue: false,
      description: 'If true, the label will be optional',
    },
    disabled: {
      defaultValue: false,
      description: 'If true, the input will be disabled',
    },
    children: {
      description: 'The content of the input',
    },
  },
};

export default meta;

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ height: 64, display: 'flex', alignItems: 'center' }}>
    {children}
  </div>
);

type Story = StoryObj<typeof FloatingLabelInput>;

export const Default: Story = {
  args: {
    label: 'Label',
  },
  render: (args: any) => (
    <Container>
      <FloatingLabelInput {...args} />
    </Container>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    disabled: true,
  },
  render: (args: any) => (
    <Container>
      <FloatingLabelInput {...args} />
    </Container>
  ),
};

export const Optional: Story = {
  args: {
    label: 'Label',
    isOptional: true,
  },
  render: (args: any) => (
    <Container>
      <FloatingLabelInput {...args} />
    </Container>
  ),
};

export const Invalid: Story = {
  args: {
    label: 'Label',
    isInvalid: true,
  },
  render: (args: any) => (
    <Container>
      <FloatingLabelInput {...args} />
    </Container>
  ),
};

export const WithErrorMessage: Story = {
  args: {
    label: 'Label',
    isInvalid: true,
    errorMessage: 'This is an error message',
  },
  render: (args: any) => (
    <Container>
      <FloatingLabelInput {...args} />
    </Container>
  ),
};

export const WithIcon: Story = {
  args: {
    label: 'Label',
    iconName: 'search',
    iconColor: 'gray25',
  },
  render: (args: any) => (
    <Container>
      <FloatingLabelInput {...args} />
    </Container>
  ),
};
