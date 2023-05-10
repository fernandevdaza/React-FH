const { render, screen } = require('@testing-library/react');
const { GifItem } = require('../../src/components');

describe('Tests on <GifItem />', () => {
    const title = 'Hello';
    const url = 'https://www.google.com/';
    test('should match with snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect(container).toMatchSnapshot();
    });
    test('should show image with the exact url and alt', () => {
        render(<GifItem title={ title } url={ url } />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    test('should show title in component', () => {
        render(<GifItem title={ title } url={ url } />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});
