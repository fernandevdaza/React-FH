const { render, screen, fireEvent } = require('@testing-library/react');
const { AddCategory } = require('../../src/components');

describe('Tests on <AddCategory />', () => {
    const inputValue = 'Nirvana';

    test("should change textbox's value", () => {
        render(<AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: inputValue } });

        expect(input.value).toBe(inputValue);

    });
    test('should call onNewCategory if input got a new value', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        // screen.debug();
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });
    test('should not call onNewCategory if input is empty', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory } />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});
