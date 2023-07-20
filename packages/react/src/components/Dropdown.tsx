import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { keyframes, styled } from '../styles';

const StyledDropdownTrigger = styled(DropdownMenu.Trigger, {
  backgroundColor: 'transparent',
  border: 'none',
});

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const DropdownMenuContent = styled(DropdownMenu.Content, {
  minWidth: '128px',
  backgroundColor: '$white',
  borderRadius: '$md',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});
const DropdownMenuArrow = styled(DropdownMenu.Arrow, { fill: 'white' });

const DropdownMenuItem = styled(DropdownMenu.Item, {
  all: 'unset',
  fontSize: '$body',
  lineHeight: '$body',
  color: '$black',
  borderRadius: '$sm',
  padding: '$1 $2',
  display: 'flex',
  alignItems: 'center',
  height: 25,
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$gray25',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: '$blue25',
    color: '$blue100',
  },
});

export const Dropdown = {
  Root: DropdownMenu.Root,
  Trigger: StyledDropdownTrigger,
  Content: DropdownMenuContent,
  Arrow: DropdownMenuArrow,
  Item: DropdownMenuItem,
};
