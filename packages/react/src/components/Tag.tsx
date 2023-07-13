import { colors } from '@higherme-ui/tokens';
import { styled } from '@stitches/react';
import { IconNames, IconSvg } from './Icon/IconSvg';

type TagProps = {
  /**
   * The content of the tag
   * @example
   * <Tag>Tag Content</Tag>
   * */
  children: React.ReactNode;

  /**
   * The background color of the tag
   * @default 'blue50'
   * */
  backgroundColor?: keyof typeof colors;

  /**
   * If true, the tag will render with the small style
   * @default false
   * */
  small?: boolean;

  /**
   * If true, the tag will render with the clickable style
   * @default false
   * */
  clickable?: boolean;

  /**
   * The onClick handler of the tag
   * */
  onClick?: () => void;

  /**
   * The left icon name of the tag (from the icon library) should be used with `leftIconColor`
   * */
  leftIconName?: IconNames;

  /**
   * The right icon name of the tag (from the icon library) should be used with `rightIconColor`
   * */
  rightIconName?: IconNames;

  /**
   * The left icon color of the tag
   * @default 'blue100'
   * */
  leftIconColor?: keyof typeof colors;

  /**
   *
   * The right icon color of the tag
   * @default 'blue100'
   * */
  rightIconColor?: keyof typeof colors;

  /**
   * The style of the tag
   * */
  style?: React.CSSProperties;
};

export const Tag = ({
  children,
  backgroundColor = 'blue50',
  small,
  clickable,
  onClick,
  leftIconName,
  rightIconName,
  leftIconColor,
  rightIconColor,
  style,
}: TagProps) => {
  return (
    <TagContainer
      style={{
        backgroundColor: colors[backgroundColor],
        ...style,
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
