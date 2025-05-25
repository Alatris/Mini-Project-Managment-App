import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';


describe('Button', () => {

    test('renders with correct text', () => {
        render(<Button onClick={() => {}}>Test Button</Button>);
        const buttonElement = screen.getByText(/Test Button/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        const buttonElement = screen.getByText(/Click Me/i);
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});