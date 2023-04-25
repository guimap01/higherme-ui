import { styled } from '../styles';

const StyledButton = styled('button', {
  padding: '$4 $8',
  borderRadius: '$lg',
  border: '2px solid transparent',
  boxSizing: 'border-box',
  fontFamily: '$default',
  fontWeight: '$bold',
  cursor: 'pointer',
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
  },
});

type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary-white' | 'secondary-blue';
};

export const Button = ({
  icon,
  children,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton {...rest} variant={variant}>
      {icon}
      {children}
    </StyledButton>
  );
};
