import {getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp.js";
import heroes from "../../src/data/heroes.js";

describe('Pruebas de 08-imp-exp', () => {
    test('getHeroById debe retornar un Héroe or ID', () => {
        const ID = 100;
        const hero = getHeroeById(ID)
        expect( hero ).toBeFalsy();
    });
    test('getHeroByOwner', () => {
        const ownerDC = 'DC';
        const ownerMarvel = 'Marvel';
        const marvelHeroes = getHeroesByOwner(ownerMarvel)
        const dcHeroes = getHeroesByOwner(ownerDC)
        expect(dcHeroes.length).toBe(3)
        expect(dcHeroes).toEqual(heroes.filter((hero) => hero.owner === ownerDC))
        expect(marvelHeroes.length).toBe(2)
    })
});