import {usContext} from "../../src/base-pruebas/06-deses-obj.js";

describe('Pruebas en 06-deses-obj', () => {
    test('usContext debe retornar un objeto', () => {
        const user = {
            clave: 'XD',
            nombre: 'Fernando',
            edad: '18',
            rango: 'Capitán'
        }
        const response = usContext(user)
        //console.log(response)
        expect(response).toStrictEqual({
            nombreClave: 'XD',
            anios: '18',
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    });
});