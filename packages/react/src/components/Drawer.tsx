import * as RadixDialog from '@radix-ui/react-dialog';
import { styled } from '../styles';
import { IconButton } from './Button';
import { IconSvg } from './Icon/IconSvg';
import { Typography } from './Typography';

type DrawerProps = {
  position?: 'right' | 'left';
  trigger: React.ReactNode;
  children: React.ReactNode;
  title: string;
};

export const Drawer = ({
  position = 'right',
  trigger,
  children,
  title,
}: DrawerProps) => {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <StyledDrawerOverlay>
        <StyledDrawerContent position={position}>
          <StyledDrawerHeader>
            <Typography.TitleMedium>{title}</Typography.TitleMedium>
          </StyledDrawerHeader>
          <StyledDrawerContainer>{children}</StyledDrawerContainer>
          <RadixDialog.Close asChild>
            <StyledIconButton>
              <IconSvg name="close" width={12} height={12} color="black" />
            </StyledIconButton>
          </RadixDialog.Close>
        </StyledDrawerContent>
      </StyledDrawerOverlay>
    </RadixDialog.Root>
  );
};

const StyledDrawerOverlay = styled(RadixDialog.DialogOverlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledDrawerContent = styled(RadixDialog.DialogContent, {
  backgroundColor: '#fff',
  borderRadius: '$sm',
  width: '400px',
  height: '100%',
  position: 'absolute',
  variants: {
    position: {
      right: { right: 0 },
      left: { left: 0 },
    },
  },
});
const StyledDrawerContainer = styled('div', {
  padding: '$4',
  overflow: 'auto',
  height: '100%',
  width: '100%',
});
const StyledIconButton = styled(IconButton, {
  position: 'absolute',
  top: '$5',
  right: '$4',
});

const StyledDrawerHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$4',
  borderBottom: '1px solid $gray50',
});