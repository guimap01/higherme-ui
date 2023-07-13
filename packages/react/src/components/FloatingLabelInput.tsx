import { styled } from '@stitches/react';
import React, { InputHTMLAttributes, useState } from 'react';
import { IconNames, IconSvg } from './Icon/IconSvg';
import { colors } from '@higherme-ui/tokens';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type FloatingLabelInputProps = {
  /**
   * The label of the input
   * @example
   * <FloatingLabelInput label="Email" />
   * */
  label: string;

  /**
   * If true, the input will render a optional label, should be used with `optionalLabel`
   * @default false
   *
   */
  isOptional?: boolean;

  /**
   * The optional label of the input
   * @example
   * <FloatingLabelInput label="Email" isOptional optionalLabel="(Optional)" />
   *
   */
  optionalLabel?: string;

  /**
   * If true, the input will render with the error style`
   */
  isInvalid?: boolean;

  /**
   * The error message of the input
   * @example
   * <FloatingLabelInput label="Email" isInvalid errorMessage="Invalid email" />
   *
   * */
  errorMessage?: string;

  /**
   * The icon name of the input (from the icon library) should be used with `iconColor`
   */
  iconName?: IconNames;

  /**
   * The icon color of the input
   * @default 'blue100'
   *
   * */
  iconColor?: keyof typeof colors;

  /**
   * The icon height of the input
   * @default 24
   *
   * */
  iconHeight?: number;

  /**
   * The icon width of the input
   * @default 24
   * */
  iconWidth?: number;
} & InputProps;

export const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ label, ...props }, ref) => {
  const defaultInputId = `floating-label-input-${Math.random() * 1000}}`;

  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.length > 0);
    if (props.onChange) props.onChange(e);
  };

  const handleContainerClick = () => {
    const input = document.getElementById(props.id || defaultInputId);
    if (input) input.focus();
  };

  const shouldTranslate = isFocused || props.value || hasValue;

  return (
    <Wrapper>
      <Container
        onClick={handleContainerClick}
        aria-disabled={props.disabled}
        aria-invalid={props.isInvalid}
        aria-has-icon={!!props.iconName}
      >
        {props.iconName && props.iconColor && (
          <IconSvg
            name={props.iconName}
            color={props.iconColor}
            height={props.iconHeight || 24}
            width={props.iconWidth || 24}
          />
        )}
        <Input
          id={props.id || defaultInputId}
          {...props}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          aria-has-icon={!!props.iconName}
        />
        <Label
          style={{
            transform: shouldTranslate
              ? 'translate(-2px, -18px) scale(1)'
              : 'none',
          }}
          aria-disabled={props.disabled}
          aria-open={shouldTranslate}
          aria-invalid={props.isInvalid}
          aria-has-icon={!!props.iconName}
        >
          {label} {props.isOptional && <span>({props.optionalLabel})</span>}
        </Label>
      </Container>
      {props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
    </Wrapper>
  );
});

const Wrapper = styled('div', {
  fontFamily: '$default',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '82px',
  gap: '$2',
});

const Container = styled('div', {
  boxSizing: 'border-box',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '$lg',
  backgroundColor: '$white',
  '&:hover': {
    border: '2px solid $blue100',
  },
  '&:focus-within': {
    border: '2px solid $cyan100',
  },
  '&[aria-disabled="true"]': {
    backgroundColor: '$gray5',
    '&:hover': {
      border: 'none',
    },
    '&:focus-within': {
      border: 'none',
    },
  },
  '&[aria-invalid="true"]': {
    border: '2px solid $red100',
    '&:hover': {
      border: '2px solid $red100',
    },
    '&:focus-within': {
      border: '2px solid $red100',
    },
  },
  '&[aria-has-icon=true]': {
    svg: {
      marginLeft: '10px',
    },
  },
});

const Input = styled('input', {
  boxSizing: 'border-box',
  height: '54px',
  borderRadius: '4px',
  border: 'none',
  padding: '5px 15px',
  fontSize: '$body',
  lineHeight: '1',
  outline: 'none',
  boxShadow: 'none',
  backgroundColor: 'transparent',
  transition: '200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
  paddingBottom: '0',
  paddingTop: '10px',
  '&[aria-has-icon=true]': {
    paddingLeft: '0',
  },
});

const Label = styled('label', {
  position: 'absolute',
  pointerEvents: 'none',
  transition: '200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
  fontSize: '$body',
  lineHeight: '24px',
  left: '16px',
  top: 'calc(50% - 10px)',
  color: '$black',
  '&[aria-disabled="true"]': {
    color: '$gray10',
  },
  span: {
    color: '$gray10',
  },
  '&[aria-open="true"]': {
    span: {
      fontSize: '$caption',
    },
  },
  '&[aria-invalid="true"]': {
    color: '$red100',
  },
  '&[aria-has-icon=true]': {
    paddingLeft: '30px',
  },
});

const ErrorMessage = styled('span', {
  color: '$red100',
  marginLeft: '$3',
  display: 'block',
  fontSize: '$caption',
});
