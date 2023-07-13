import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Drawer } from '../../components/Drawer';
import { Button } from '../../components/Button';

describe('Drawer', () => {
  async function openAndReturnDrawer() {
    userEvent.click(
      screen.getByRole('button', {
        name: 'Open Drawer',
      })
    );
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    return screen.getByRole('dialog');
  }
  it('should render the drawer with the correct props', async () => {
    render(
      <Drawer
        trigger={
          <Button variant="primary" small>
            Open Drawer
          </Button>
        }
        title="My Drawer"
      >
        Hello
      </Drawer>
    );
    await openAndReturnDrawer();
  });

  it('should render the drawer with the correct position', async () => {
    render(
      <Drawer
        trigger={
          <Button variant="primary" small>
            Open Drawer
          </Button>
        }
        title="My Drawer"
        position="left"
      >
        Hello
      </Drawer>
    );
    const dialog = await openAndReturnDrawer();
    await waitFor(() => {
      expect(dialog).toHaveAttribute('class', expect.stringContaining('left'));
    });
  });

  it('should render the drawer with close button', async () => {
    render(
      <Drawer
        trigger={
          <Button variant="primary" small>
            Open Drawer
          </Button>
        }
        title="My Drawer"
      >
        Hello
      </Drawer>
    );
    const dialog = await openAndReturnDrawer();
    await waitFor(() => {
      expect(
        within(dialog).getByRole('button', { name: /drawer\-close\-button/i })
      );
    });
    const closeButton = within(dialog).getByRole('button', {
      name: /drawer\-close\-button/i,
    });
    userEvent.click(closeButton);
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
