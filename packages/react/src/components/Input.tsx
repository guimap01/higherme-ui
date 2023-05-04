import { InputHTMLAttributes } from 'react';
import { styled } from '../styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type FloatingLabelInputProps = {
  label: string;
} & InputProps;

const InputContainer = styled('div', {
  position: 'relative',
  marginBottom: '20px',
  width: '100%',
});

const Input = styled('input', {
  padding: '10px',
  border: 'none',
  borderBottom: '1px solid gray',
  width: '100%',
  fontSize: '16px',
  '&:focus': {
    outline: 'none',
    borderBottom: '1px solid blue',
  },
  '&:not(:placeholder-shown) + label': {
    top: '-18px',
    fontSize: '14px',
    color: 'gray',
  },
});

const Label = styled('label', {
  position: 'absolute',
  top: '10px',
  left: '10px',
  fontSize: '16px',
  color: '#777',
  transition: 'all 0.2s ease-out',
  pointerEvents: 'none',
});

export const FloatingLabelInput = ({
  label,
  ...props
}: FloatingLabelInputProps) => {
  return (
    <InputContainer>
      <Input {...props} />
      <Label>{label}</Label>
    </InputContainer>
  );
};
