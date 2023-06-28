import { Typography } from '@higherme-ui/react';
import { Meta } from '@storybook/react';

const TextBody = Typography.TextBody;

const meta: Meta<typeof TextBody> = {
  component: Typography.TextBody,
  tags: ['autodocs'],
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

export const MobileTitleHuge = {
  render: () => (
    <Container>
      <Typography.MobileTitleHuge>MobileTitleHuge</Typography.MobileTitleHuge>
    </Container>
  ),
};

export const MobileTitleBig = {
  render: () => (
    <Container>
      <Typography.MobileTitleBig>MobileTitleBig</Typography.MobileTitleBig>
    </Container>
  ),
};

export const MobileTitleMedium = {
  render: () => (
    <Container>
      <Typography.MobileTitleMedium>
        MobileTitleMedium
      </Typography.MobileTitleMedium>
    </Container>
  ),
};

export const MobileTitleSmall = {
  render: () => (
    <Container>
      <Typography.MobileTitleSmall>
        MobileTitleSmall
      </Typography.MobileTitleSmall>
    </Container>
  ),
};

export const MobileTitleTiny = {
  render: () => (
    <Container>
      <Typography.MobileTitleTiny>MobileTitleTiny</Typography.MobileTitleTiny>
    </Container>
  ),
};

export const MobileTextLead = {
  render: () => (
    <Container>
      <Typography.MobileTextLead>MobileTextLead</Typography.MobileTextLead>
    </Container>
  ),
};

export const MobileTextLink = {
  render: () => (
    <Container>
      <Typography.MobileTextLink>MobileTextLink</Typography.MobileTextLink>
    </Container>
  ),
};

export const MobileTextCaption = {
  render: () => (
    <Container>
      <Typography.MobileTextCaption>
        MobileTextCaption
      </Typography.MobileTextCaption>
    </Container>
  ),
};
