import { render, screen } from '@testing-library/react';
import Button from '../button.component';

describe('Button Component', () => {
  test('should render base button when no props are passed', () => {
    render(<Button/>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: white;');
  });
});
