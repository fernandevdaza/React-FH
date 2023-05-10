import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
  const title = 'Hola, Soy Goku';

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={ title } />);
    expect(container).toMatchSnapshot();
  });
  test('debe de mostrar el mensaje "Hola, Soy Goku', () => {
    render(<FirstApp title={ title } />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('debe de mostrar el titulo en un h1', () => {
    render(<FirstApp title={ title } />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  });
});
