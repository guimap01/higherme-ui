import { IconSvg, IconNames, iconNames, Typography } from '@higherme-ui/react';
import { Meta } from '@storybook/react';

const IconSvgStory = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
    }}
  >
    {iconNames.map((name: IconNames) => (
      <div
        key={name}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1rem',
          gap: '0.5rem',
        }}
      >
        <IconSvg name={name} color="blue100" width={20} height={20} />
        <Typography.TextBody
          css={{
            color: '#ddd',
          }}
        >
          {name}
        </Typography.TextBody>
      </div>
    ))}
  </div>
);

const meta: Meta = {
  title: 'IconSvg',
  component: IconSvgStory,
  tags: ['autodocs'],
};

export default meta;

export const Default = IconSvgStory.bind({});
