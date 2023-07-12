import { Button, IconSvg } from '@higherme-ui/react';
import { Dropdown } from '@higherme-ui/react';
import { Meta } from '@storybook/react';

const meta: Meta<typeof DropdownStory> = {
  component: DropdownStory,
  tags: ['autodocs'],
};

export default meta;

function DropdownStory() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <Button
          icon={<IconSvg name="menu" width={20} height={20} color="blue10" />}
          small
        >
          Open
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
        <Dropdown.Item>Item 3</Dropdown.Item>
        <Dropdown.Arrow />
      </Dropdown.Content>
    </Dropdown.Root>
  );
}

export const Default = {
  render: () => (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <Button
          icon={<IconSvg name="menu" width={20} height={20} color="blue10" />}
          small
        >
          Open
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
        <Dropdown.Item>Item 3</Dropdown.Item>
        <Dropdown.Arrow />
      </Dropdown.Content>
    </Dropdown.Root>
  ),
};
