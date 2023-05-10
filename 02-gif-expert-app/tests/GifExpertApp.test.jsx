const { render, screen } = require('@testing-library/react');
const { GifExpertApp } = require('../src/GifExpertApp');

describe('Tests on <GifExpertApp />', () => {
    test('should match with snapshot', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });
    test('should render h1 with text GifExpertApp', () => {
        render(<GifExpertApp />);
        expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('GifExpertApp');
    });
});
