import {retornaArreglo} from "../../src/base-pruebas/07-deses-arr.js";

describe('Pruebas en 07-deses-arr', () => {
    test('debe retornar un string y un número', () => {
        const [letters, numbers] = retornaArreglo()
        expect(typeof letters).toStrictEqual('string')
        expect(typeof numbers).toStrictEqual('number');
        expect(letters).toBe('ABC')
        expect(numbers).toBe(123)
        expect(letters).toEqual(expect.any(String))
    });
});