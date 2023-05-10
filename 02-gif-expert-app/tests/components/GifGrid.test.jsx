import { render, screen } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { GifGrid } from '../../src/components';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests on <GifGrid />', () => {
    const category = 'One Punch';
    test('should render loading in the first place', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={ category } />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });
    test('should show items when images are loaded by useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localost/saitama.jpg',
        }, {
            id: '123',
            title: 'Goku',
            url: 'https://localost/goku.jpg',
        }, {
            id: 'XD',
            title: 'Nirvana',
            url: 'https://localost/nirvana.jpg',
        }];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        render(<GifGrid category={ category } />);
        expect(screen.getAllByRole('img').length).toBe(3);
    });
});
