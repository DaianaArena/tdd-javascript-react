import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Testeando arrays desestructurados', () => {

    test('retornaArreglo() debe devolver letras y numeros', () => {

        // 1. A- ARRANGE: Inicialización
        // En esta etapa, ejecutamos la función `retornaArreglo` y desestructuramos su resultado en dos variables:
        // `letras` y `numeros`. No necesitamos definir valores esperados aquí, ya que estamos verificando los tipos de los resultados.
        const [letras, numeros] = retornaArreglo();

        // 2. A- ACT: Estímulo
        // En esta etapa, no realizamos ninguna acción adicional porque simplemente estamos obteniendo el resultado de la función `retornaArreglo`.
        // No hay estímulo explícito más allá de la llamada a la función.

        // 3. A- ASSERT: Observación
        // Verificamos que el tipo de `letras` sea una cadena de caracteres (string) y que el tipo de `numeros` sea un número (number).
        // Usamos `expect` y el matcher `.toBe` para hacer estas afirmaciones.
        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');
        
    });

});
