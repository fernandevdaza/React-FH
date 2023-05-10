import {render} from "@testing-library/react";
import {FirstApp} from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

    // test('debe hacer un match con el snapshot', () => {
    //
    //     const title = "Hola, Soy Vegeta";
    //     const { container } = render( <FirstApp title={title}/>);
    //     console.log(container)
    //     expect(container).toMatchSnapshot();
    //
    // });
    test('debe de mostrar el título en un h1', () => {

        const title = "Hola, Soy Goku";
        const { container, getByText, getByTestId } = render( <FirstApp title={title}/>);

        expect( getByText( title ) ).toBeTruthy()

        // const h1 = container.querySelector('h1');
         expect(getByTestId('test-title').innerHTML).toContain(title)
    });
    test('debe de mostrar el subitulo enviado por props', () => {

        const title = "Hola, Soy Goku";
        const subtitle = 'Soy un subtitulo';
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subtitle={ subtitle }

            />);

        expect( getAllByText( subtitle ).length ).toBe(1)
    });
});