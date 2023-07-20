import { InfoCircledIcon } from '@radix-ui/react-icons';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import { keyframes, styled } from '../styles';
import { IconButton } from './Button';

type TooltipProps = {
  /**
   * The content of the tooltip
   * @example
   * <Tooltip content="Tooltip Content" />
   * */
  content: string;

  /**
   * The children of the tooltip
   * @example
   * <Tooltip content="Tooltip Content">
   * <Button>Hover Me</Button>
   * </Tooltip>
   * */
  children?: React.ReactNode;
};

export const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          {children || (
            <IconButton>
              <InfoCircledIcon />
            </IconButton>
          )}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={5} align="start">
            {content}
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

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

const TooltipContent = styled(RadixTooltip.Content, {
  borderRadius: '$md',
  padding: '$2',
  fontSize: '$caption',
  lineHeight: '$caption',
  color: '$black',
  backgroundColor: '$white',
  userSelect: 'none',
  fontFamily: '$default',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
  '>span': {
    bottom: '1px !important',
  },
});

const TooltipArrow = styled(RadixTooltip.Arrow, {
  fill: '$white',
});
