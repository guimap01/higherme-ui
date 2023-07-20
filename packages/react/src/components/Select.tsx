import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@higherme-ui/tokens';
import { useState } from 'react';
import ReactSelect, {
  components,
  GroupBase,
  MultiValueGenericProps,
  OptionProps,
  Props,
} from 'react-select';

import { styled } from '../styles';
import { Tag } from './Tag';

type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Props<Option, IsMulti, Group> & {
  showCheckbox?: boolean;
};

export function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: SelectProps<Option, IsMulti, Group>) {
  return (
    <ReactSelect
      placeholder=""
      {...props}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          height: space[10],
          borderRadius: radii.md,
          overflow: 'hidden',
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          maxHeight: '125px',
          overflowY: 'auto',
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          maxHeight: '125px',
          overflowY: 'auto',
          '::-webkit-scrollbar': {
            width: space[2],
          },
          '::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: colors.gray10,
            borderRadius: radii.md,
          },
        }),
        multiValue: (baseStyles) => ({
          ...baseStyles,
          borderRadius: radii.md,
          backgroundColor: colors.cyan25,
          display: 'flex',
          alignItems: 'center',
          gap: space[2],
          padding: `${space[1]} ${space[2]}`,
          'div:first-child': {
            fontFamily: fonts.default,
            fontSize: fontSizes.caption,
            fontWeight: fontWeights.normal,
            lineHeight: lineHeights.caption,
          },
          margin: 0,
          height: '28px',
          ':nth-child(n+3)': {
            display: 'none',
          },
        }),
        multiValueRemove: (baseStyles) => ({
          ...baseStyles,
          borderRadius: radii.full,
          backgroundColor: colors.black,
          color: colors.white,
          width: '20px',
          height: '20px',
          ':hover': {
            backgroundColor: colors.red100,
          },
        }),
        valueContainer: (baseStyles) => ({
          ...baseStyles,
          padding: `0 ${space[2]}`,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          flexWrap: 'nowrap',
          overflow: 'hidden',
          display: 'flex',
          gap: space[1],
          maxWidth: '40%',
        }),
        option: (baseStyles) => ({
          ...baseStyles,
          cursor: 'pointer',
          ':hover': {
            color: colors.blue100,
          },
          ':active': {
            color: colors.blue100,
          },
          ':focus': {
            color: colors.blue100,
          },
        }),
      }}
      components={{
        Option: props.showCheckbox ? InputOption : DefaultOption,
        MultiValueContainer,
      }}
    />
  );
}

function DefaultOption<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  isFocused,
  innerProps,
  isDisabled,
  isSelected,
  getStyles,
  children,
  ...rest
}: OptionProps<Option, IsMulti, Group>) {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  let color = 'inherit';
  if (isFocused) color = colors.blue100;
  if (isActive) color = colors.blue100;

  const style = {
    alignItems: 'center',
    backgroundColor: 'transparent',
    color,
    display: 'flex',
  };
  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style,
  };
  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      {children}
    </components.Option>
  );
}

function InputOption<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  isFocused,
  innerProps,
  isDisabled,
  isSelected,
  getStyles,
  children,
  ...rest
}: OptionProps<Option, IsMulti, Group>) {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  let color = 'inherit';
  if (isFocused) color = colors.blue100;
  if (isActive) color = colors.blue100;

  const style = {
    alignItems: 'center',
    backgroundColor: 'transparent',
    color,
    display: 'flex',
  };

  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style,
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <StyledCheckbox
        type="checkbox"
        checked={isSelected}
        isFocused={isFocused || isActive}
      />
      {children}
    </components.Option>
  );
}

function MultiValueContainer(props: MultiValueGenericProps) {
  const values = props.selectProps.value as any[];
  const value = props.data.value as string;
  const index = values.findIndex((v) => v.value === value);
  const shouldShowNumberTag = index === 1 && values.length > 2;
  return (
    <>
      <components.MultiValueContainer {...props}>
        {props.children}
      </components.MultiValueContainer>
      {shouldShowNumberTag && (
        <Tag
          backgroundColor="cyan25"
          small
          style={{
            marginLeft: space[1],
            padding: `${space[1]} ${space[2]}`,
          }}
        >
          +{values?.length - 2}
        </Tag>
      )}
    </>
  );
}

const StyledCheckbox = styled('input', {
  height: '20px',
  width: '20px',
  display: 'flex',
  borderRadius: `$sm`,
  outline: 'none',
  appearance: 'none',
  cursor: 'pointer',
  border: `2px solid ${colors.gray10}`,
  position: 'relative',

  '&:checked': {
    backgroundColor: colors.blue100,
    border: `2px solid ${colors.blue100}`,
    '&::before': {
      content: '\\2714',
      color: colors.white,
      fontSize: '$body',
      position: 'absolute',
      top: '-2px',
      left: '2px',
    },
  },
  variants: {
    isFocused: {
      true: {
        border: `2px solid ${colors.blue100}`,
      },
    },
  },
});
