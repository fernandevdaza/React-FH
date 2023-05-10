import {getSaludo} from "../../src/base-pruebas/02-template-string.js";

describe('Pruebas en 02-template-string', () => {
    test('getSaludo deber retornar "Hola Fernando"', () => {
        const name = 'Fernando';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`)
    });
});