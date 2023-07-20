import { render, screen } from '@testing-library/react';

import { Button } from '../../components/Button';

describe('Button', () => {
  it('should render the button with the correct props', () => {
    render(<Button variant="primary">Click me</Button>);
    expect(
      screen.getByRole('button', {
        name: 'Click me',
      })
    ).toBeTruthy();
  });

  it('should render the button with the correct size', () => {
    render(
      <Button variant="primary" small>
        Click me
      </Button>
    );
    expect(
      screen.getByRole('button', {
        name: 'Click me',
      })
    ).toHaveAttribute('class', expect.stringContaining('small'));
  });

  it('should render the button with the correct rounded corners', () => {
    render(
      <Button variant="primary" rounded>
        Click me
      </Button>
    );
    expect(
      screen.getByRole('button', {
        name: 'Click me',
      })
    ).toHaveAttribute('class', expect.stringContaining('rounded'));
  });

  it('should render the button in the disabled state', () => {
    render(
      <Button variant="primary" disabled>
        Click me
      </Button>
    );
    expect(
      screen.getByRole('button', {
        name: 'Click me',
      })
    ).toBeDisabled();
  });
});
