import { css, styled } from '@stitches/react';

const sharedTitleFontFamily = css({
  fontFamily: '$gilmer',
  margin: 0,
});

const sharedBodyFontFamily = css({
  fontFamily: '$default',
  margin: 0,
});

const TitleHuge = styled('h1', {
  ...sharedTitleFontFamily,
  fontSize: '$huge',
  fontWeight: '$huge',
  lineHeight: '$huge',
});

const TitleBig = styled('h1', {
  ...sharedTitleFontFamily,
  fontSize: '$big',
  fontWeight: '$bold',
  lineHeight: '$big',
});

const TitleMedium = styled('h1', {
  ...sharedTitleFontFamily,
  fontSize: '$medium',
  fontWeight: '$bold',
  lineHeight: '$medium',
});

const TitleSmall = styled('h1', {
  ...sharedTitleFontFamily,
  fontSize: '$small',
  fontWeight: '$bold',
  lineHeight: '$small',
});

const TitleTiny = styled('h1', {
  ...sharedTitleFontFamily,
  fontSize: '$tiny',
  fontWeight: '$bold',
  lineHeight: '$tiny',
});

const TextLead = styled('p', {
  ...sharedBodyFontFamily,
  fontSize: '$lead',
  fontWeight: '$light',
  lineHeight: '$lead',
});

const TextBody = styled('p', {
  ...sharedBodyFontFamily,
  fontSize: '$body',
  fontWeight: '$normal',
  lineHeight: '$body',
});

const TextLink = styled('a', {
  ...sharedBodyFontFamily,
  fontSize: '$body',
  fontWeight: '$bold',
  lineHeight: '$body',
  textDecoration: 'none',
});

const TextCaption = styled('p', {
  ...sharedBodyFontFamily,
  fontSize: '$caption',
  fontWeight: '$normal',
  lineHeight: '$caption',
});

const MobileTitleHuge = styled(TitleHuge, {
  '@bp1': {
    fontSize: '$medium',
    lineHeight: '$medium',
  },
});

const MobileTitleBig = styled(TitleBig, {
  '@bp1': {
    fontSize: '$small',
    lineHeight: '$small',
  },
});

const MobileTitleMedium = styled(TitleMedium, {
  '@bp1': {
    fontSize: '$tiny',
    lineHeight: '$tiny',
  },
});

const MobileTitleSmall = styled(TitleSmall, {
  '@bp1': {
    fontSize: '$tiny',
    lineHeight: '$mobileSmall',
  },
});

const MobileTitleTiny = styled(TitleTiny, {
  '@bp1': {
    fontSize: '$mobileTiny',
    lineHeight: '$mobileTiny',
  },
});

const MobileTextLead = styled(TextLead, {
  '@bp1': {
    fontSize: '$mobileLead',
    lineHeight: '$mobileLead',
  },
});

const MobileTextBody = styled(TextBody, {
  '@bp1': {
    fontSize: '$body',
    lineHeight: '$body',
  },
});

const MobileTextLink = styled(TextLink, {
  '@bp1': {
    fontSize: '$body',
    lineHeight: '$body',
  },
});

const MobileTextCaption = styled(TextCaption, {
  '@bp1': {
    fontSize: '$caption',
    lineHeight: '$caption',
  },
});

export const Typography = {
  TitleHuge,
  TitleBig,
  TitleMedium,
  TitleSmall,
  TitleTiny,
  TextLead,
  TextBody,
  TextLink,
  TextCaption,
  MobileTitleHuge,
  MobileTitleBig,
  MobileTitleMedium,
  MobileTitleSmall,
  MobileTitleTiny,
  MobileTextLead,
  MobileTextBody,
  MobileTextLink,
  MobileTextCaption,
};
