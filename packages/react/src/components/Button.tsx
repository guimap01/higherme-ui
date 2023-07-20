import { forwardRef } from 'react';

import { styled } from '../styles';

const StyledButton = styled('button', {
  padding: '$4 $8',
  borderRadius: '$lg',
  border: '2px solid transparent',
  boxSizing: 'border-box',
  fontFamily: '$default',
  fontWeight: '$bold',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  svg: {
    marginRight: '$2',
  },

  transition: 'all 0.3s ease-in-out',

  '&:hover': {
    boxShadow: '1px 1px 4px 0px rgba(0, 0, 0, 0.1)',
  },

  '&:focus': {
    border: '2px solid $cyan100',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$blue100',
        color: '$white',
        '&:disabled': {
          backgroundColor: '$gray5',
        },
        '&:pressed': {
          backgroundColor: '$blue75',
        },
      },
      'secondary-white': {
        backgroundColor: '$white',
        color: '$blue100',

        '&:disabled': {
          color: '$gray5',
        },
      },
      'secondary-blue': {
        backgroundColor: '$blue5',
        color: '$blue100',
        '&:disabled': {
          color: '$gray5',
        },
      },
    },
    small: {
      true: {
        padding: '$2 $4',
        borderRadius: '$md',
      },
    },
    rounded: {
      true: {
        borderRadius: '$full',
      },
    },
  },
});

export type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  /** Icon to be rendered before the children */
  icon?: React.ReactNode;

  /**
   * The variant of the button
   * @default primary
   */
  variant?: 'primary' | 'secondary-white' | 'secondary-blue';

  /**
   * If true, the button will be small
   * @default false
   */
  small?: boolean;

  /**
   * If true, the button will be rounded
   * @default false
   *
   */
  rounded?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon, children, variant = 'primary', small, rounded, ...rest }, ref) => {
    return (
      <StyledButton
        {...rest}
        small={small}
        rounded={rounded}
        variant={variant}
        ref={ref}
      >
        {icon}
        {children}
      </StyledButton>
    );
  }
);

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: '$5',
  width: '$5',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray50',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});
