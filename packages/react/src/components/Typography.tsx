import { styled } from '../styles';

const sharedTitleFontFamily = {
  fontFamily: '$gilmer',
  margin: 0,
};

const sharedBodyFontFamily = {
  fontFamily: '$default',
  margin: 0,
};

const TitleHuge = styled('h1', {
  ...sharedTitleFontFamily,

  fontSize: '$medium',
  lineHeight: '$medium',
  fontWeight: '$huge',
  '@media (min-width: 768px)': {
    fontSize: '$huge',
    lineHeight: '$huge',
  },
});

const TitleBig = styled('h1', {
  ...sharedTitleFontFamily,

  fontSize: '$small',
  lineHeight: '$small',
  fontWeight: '$bold',
  '@media (min-width: 768px)': {
    fontSize: '$big',
    lineHeight: '$big',
  },
});

const TitleMedium = styled('h1', {
  ...sharedTitleFontFamily,

  fontSize: '$tiny',
  lineHeight: '$tiny',
  fontWeight: '$bold',
  '@media (min-width: 768px)': {
    fontSize: '$medium',
    lineHeight: '$medium',
  },
});

const TitleSmall = styled('h1', {
  ...sharedTitleFontFamily,
  fontSize: '$tiny',
  lineHeight: '$mobileSmall',
  fontWeight: '$bold',
  '@media (min-width: 768px)': {
    fontSize: '$small',
    lineHeight: '$small',
  },
});

const TitleTiny = styled('h1', {
  ...sharedTitleFontFamily,

  fontSize: '$mobileTiny',
  lineHeight: '$mobileTiny',
  fontWeight: '$bold',
  '@media (min-width: 768px)': {
    fontSize: '$tiny',
    lineHeight: '$tiny',
  },
});

const TextLead = styled('p', {
  ...sharedBodyFontFamily,

  fontSize: '$mobileLead',
  lineHeight: '$mobileLead',
  fontWeight: '$light',
  '@media (min-width: 768px)': {
    fontSize: '$lead',
    lineHeight: '$lead',
  },
});

const TextBody = styled('p', {
  ...sharedBodyFontFamily,

  fontSize: '$body',
  lineHeight: '$body',
  fontWeight: '$normal',
  '@media (min-width: 768px)': {
    fontSize: '$body',
    lineHeight: '$body',
  },
});

const TextLink = styled('a', {
  ...sharedBodyFontFamily,

  fontSize: '$body',
  lineHeight: '$body',
  fontWeight: '$bold',
  textDecoration: 'none',
  '@media (min-width: 768px)': {
    fontSize: '$body',
    lineHeight: '$body',
  },
});

const TextCaption = styled('p', {
  ...sharedBodyFontFamily,

  fontSize: '$caption',
  lineHeight: '$caption',
  fontWeight: '$normal',
  '@media (min-width: 768px)': {
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
};
