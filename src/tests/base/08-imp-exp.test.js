import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';

describe('Testeando funciones que filtran objetos', () => {

    test('getHeroeById recibe un ID y debe retornar el objeto de Superman', () => {
        // 1. A- ARRANGE: Inicialización
        // Preparamos el valor que vamos a usar para la prueba, el ID del héroe que queremos buscar.
        // También definimos el objeto `testHero` que es el resultado esperado.
        const id = 3;
        const testHero = {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        };

        // 2. A- ACT: Estímulo
        // Ejecutamos la función `getHeroeById` con el ID proporcionado para obtener el héroe.
        // Esta es la acción que estamos probando.
        const hero = getHeroeById(id);

        // 3. A- ASSERT: Observación
        // Comparamos el resultado obtenido (`hero`) con el valor esperado (`testHero`).
        // Usamos `expect` y el matcher `.toEqual` para verificar que ambos objetos sean estructuralmente iguales.
        expect(hero).toEqual(testHero);
    });

    test('getHeroesByOwner recibe un owner y debe retornar el array con todos los héroes de esa franquicia', () => {
        // 1. A- ARRANGE: Inicialización
        // Definimos el propietario (`owner`) que queremos usar para la prueba y el array `testHeroes`
        // que es el resultado esperado con todos los héroes que pertenecen a esa franquicia.
        const owner = 'DC';
        const testHeroes = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ];

        // 2. A- ACT: Estímulo
        // Llamamos a la función `getHeroesByOwner` con el propietario especificado para obtener el array de héroes.
        // Esta es la acción que estamos probando.
        const heroes = getHeroesByOwner(owner);

        // 3. A- ASSERT: Observación
        // Comparamos el array obtenido (`heroes`) con el array esperado (`testHeroes`).
        // Usamos `expect` y el matcher `.toEqual` para asegurarnos de que ambos arrays sean iguales.
        expect(heroes).toEqual(testHeroes);
        //Comparamos el length del array recibido
        expect(heroes.length).toBe(3);
    });

});
