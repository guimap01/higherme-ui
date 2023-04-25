import * as Switch from '@radix-ui/react-switch';
import { styled } from '../styles';
import { forwardRef } from 'react';

const StyledSwitchRoot = styled(Switch.Root, {
  width: '$12',
  height: '$6',
  backgroundColor: '$blue5',
  borderRadius: '$full',
  position: 'relative',
  border: '1px solid $blue25',
  '[data-state="checked"] &': {
    backgroundColor: '$green10',
    border: '1px solid $green200',
  },
});

const StyledSwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: '$5',
  height: '$5',
  backgroundColor: '$blue25',
  borderRadius: '$full',
  transition: 'transform 100ms',
  transform: 'translateX(-4px)',
  willChange: 'transform',
  '[data-state="checked"] &': {
    transform: 'translateX(18px)',
    backgroundColor: '$green200',
  },
});

export const Toggle = forwardRef<
  React.ElementRef<typeof StyledSwitchRoot>,
  React.ComponentProps<typeof StyledSwitchRoot>
>((props, forwardedRef) => {
  return (
    <StyledSwitchRoot {...props} ref={forwardedRef}>
      <StyledSwitchThumb />
    </StyledSwitchRoot>
  );
});
