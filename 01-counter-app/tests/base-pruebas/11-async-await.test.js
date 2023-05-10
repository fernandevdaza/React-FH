import {getImagen} from "../../src/base-pruebas/11-async-await.js";
import {string} from "prop-types";

describe('Pruebas en 11-async-await', () => {
    // test('getImage debe retornar un URL de la imagen', async () => {
    //     const url = await getImagen();
    //     expect(typeof url).toBe('string')
    // });
    test('getImage debe retornar un error si no tenemos un API key', async () => {
        const resp = await getImagen();
        expect(resp).toBe('No se encontró la imagen')
    });
});