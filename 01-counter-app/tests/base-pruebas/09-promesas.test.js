import {getHeroeByIdAsync} from "../../src/base-pruebas/09-promesas.js";

describe('Pruebas en 09-promesas', () => {
    test('getHeroByIdAsync debe retornar un héroe', (done) => {
        const id = 1;
        const hero = getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done();
            })
    });
    test('getHeroByIdAsync debe retornar un Error si hero no existe', (done) => {
        const id = 100;
        const hero = getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy()
                done()
            }).catch(err => {
                expect(err).toBe(`No se pudo encontrar el héroe de ID ${id}`)
                done();
            })
    });
});