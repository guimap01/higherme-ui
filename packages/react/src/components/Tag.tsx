import { colors } from '@higherme-ui/tokens';
import { styled } from '@stitches/react';
import { IconNames, IconSvg } from './Icon/IconSvg';

const TagContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '$1 $2',
  gap: '$1',
  width: 'fit-content',
  borderRadius: '$full',
  variants: {
    small: {
      true: {
        padding: '$none $2',
      },
    },
    clickable: {
      true: {
        cursor: 'pointer',
      },
    },
  },
});

type TagProps = {
  children: React.ReactNode;
  backgroundColor: keyof typeof colors;
  small?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  leftIconName?: IconNames;
  rightIconName?: IconNames;
  leftIconColor?: keyof typeof colors;
  rightIconColor?: keyof typeof colors;
};

export const Tag = ({
  children,
  backgroundColor,
  small,
  clickable,
  onClick,
  leftIconName,
  rightIconName,
  leftIconColor,
  rightIconColor,
}: TagProps) => {
  return (
    <TagContainer
      style={{
        backgroundColor: colors[backgroundColor],
      }}
      small={small}
      clickable={clickable}
      onClick={onClick}
    >
      {leftIconName && (
        <IconSvg
          name={leftIconName}
          color={leftIconColor || 'blue100'}
          width={20}
          height={20}
        />
      )}
      {children}
      {rightIconName && (
        <IconSvg
          name={rightIconName}
          color={rightIconColor || 'blue100'}
          width={20}
          height={20}
        />
      )}
    </TagContainer>
  );
};
