// La función `describe` se utiliza para agrupar varias pruebas relacionadas. 
//En este caso, estamos agrupando las pruebas que se realizarán en el archivo `demo.test.js`.
describe('Pruebas en el archivo demo.test.js', () => {

    // La función `test` define una prueba individual. Recibe dos parámetros:
    // 1. Una descripción de lo que hace la prueba.
    // 2. Una función que contiene el código que realiza la prueba.
    test('debe ser true', () => {

        // 1. A- ARRANGE: Inicialización
        // Aquí es donde preparas todo lo necesario para que la prueba funcione.
        // En este caso, estamos definiendo dos variables con el mismo valor.
        const msg1 = "hello";
        const msg2 = "hello";

        // 2. A- ACT: Estímulo
        // Esta parte no está explícita en el código, pero generalmente aquí es donde se realizan acciones que cambian el estado o ejecutan funcionalidades que queremos probar.
        // En este ejemplo, no hay acciones adicionales porque estamos simplemente comparando dos valores.

        // 3. A- ASSERT: Observar el comportamiento
        // Aquí es donde verificamos que el código se comporta como esperamos.
        // Usamos `expect` para crear una afirmación y `.toBe` para verificar que `msg1` es igual a `msg2`.
        // Si `msg1` no es igual a `msg2`, la prueba fallará.
        expect(msg1).toBe(msg2);

    });

});

/*
Explicación de los Conceptos
//describe: Agrupa pruebas relacionadas, facilitando la organización y comprensión del código de pruebas.
//test: Define una prueba individual. Cada test debe verificar una parte específica del código.
//expect: Es la función principal de Jest para hacer afirmaciones. Se usa para comprobar que el resultado de una operación es el esperado.
//.toBe: Es un "matcher" de Jest que verifica la igualdad exacta entre dos valores.
////////////
Metodología AAA
//ARRANGE (Preparar): Configuración inicial. Aquí defines las variables y el estado necesario para la prueba.
//ACT (Estímulo): Realizas la acción o el estímulo que deseas probar. En este caso, no hay una acción adicional, pero en pruebas más complejas, aquí es donde ejecutarías la función o acción que estás probando.
//ASSERT (Afirmar): Verificas que el resultado es el esperado. Usas expect para hacer afirmaciones sobre el resultado.
*/