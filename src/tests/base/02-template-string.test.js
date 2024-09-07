import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Testeando un template string', () => {

    test('getSaludo() debe retornar "Hola daiana!"', () => {

        // 1. A- ARRANGE: Inicialización
        // En esta etapa, preparamos todo lo necesario para que la prueba funcione correctamente.
        // Aquí, estamos definiendo la variable `nombre` con el valor "daiana" que utilizaremos en la prueba.
        const nombre = "daiana";

        // 2. A- ACT: Estímulo
        // Ejecutamos la función `getSaludo` con el argumento `nombre` para obtener el saludo.
        // Esta es la acción que queremos probar. 
        const saludo = getSaludo(nombre);

        // 3. A- ASSERT: Observación
        // Verificamos que el resultado obtenido (almacenado en `saludo`) sea el esperado.
        // Usamos `expect` para hacer una afirmación sobre el valor de `saludo`.
        // En este caso, comprobamos que el saludo generado sea exactamente "Hola daiana!".
        expect(saludo).toBe("Hola " + nombre + "!");

    });

    test('getSaludo() debe retornar "Hola Carlos! si no recibe nombre como argumento"', () => {

        // 1. A- ARRANGE: Inicialización
        // En esta etapa, preparamos todo lo necesario para que la prueba funcione correctamente.
        // Aquí, estamos definiendo la variable `nombre` con el valor "daiana" que utilizaremos en la prueba.
       // const nombre = "daiana"; se elimina el argumento

        // 2. A- ACT: Estímulo
        // Ejecutamos la función `getSaludo` con el argumento `nombre` para obtener el saludo.
        // Esta es la acción que queremos probar. 
        const saludo = getSaludo();

        // 3. A- ASSERT: Observación
        // Verificamos que el resultado obtenido (almacenado en `saludo`) sea el esperado.
        // Usamos `expect` para hacer una afirmación sobre el valor de `saludo`.
        // En este caso, comprobamos que el saludo generado sea exactamente "Hola daiana!".
        expect(saludo).toBe("Hola Carlos!");

    });

});