import { Typography } from '@higherme-ui/react';
import { Meta } from '@storybook/react';

const TextBody = Typography.TextBody;

const meta: Meta<typeof TextBody> = {
  component: Typography.TextBody,
  title: 'Components/Typography',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The content of the text',
    },
  },
};

const Container = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      color: '#ddd',
    }}
  >
    {children}
  </div>
);

export default meta;

export const Default = {
  render: () => (
    <Container>
      <TextBody>TextBody</TextBody>
    </Container>
  ),
};

export const TitleHuge = {
  render: () => (
    <Container>
      <Typography.TitleHuge>TitleHuge</Typography.TitleHuge>
    </Container>
  ),
};

export const TitleBig = {
  render: () => (
    <Container>
      <Typography.TitleBig>TitleBig</Typography.TitleBig>
    </Container>
  ),
};

export const TitleMedium = {
  render: () => (
    <Container>
      <Typography.TitleMedium>TitleMedium</Typography.TitleMedium>
    </Container>
  ),
};

export const TitleSmall = {
  render: () => (
    <Container>
      <Typography.TitleSmall>TitleSmall</Typography.TitleSmall>
    </Container>
  ),
};

export const TitleTiny = {
  render: () => (
    <Container>
      <Typography.TitleTiny>TitleTiny</Typography.TitleTiny>
    </Container>
  ),
};

export const TextLead = {
  render: () => (
    <Container>
      <Typography.TextLead>TextLead</Typography.TextLead>
    </Container>
  ),
};

export const TextLink = {
  render: () => (
    <Container>
      <Typography.TextLink>TextLink</Typography.TextLink>
    </Container>
  ),
};

export const TextCaption = {
  render: () => (
    <Container>
      <Typography.TextCaption>TextCaption</Typography.TextCaption>
    </Container>
  ),
};
