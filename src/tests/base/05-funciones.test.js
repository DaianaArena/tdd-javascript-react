import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Testeando funciones', () => {

    test('getUser debe devolver un user Test', () => {

        // 1. A- ARRANGE: Inicialización
        // Aquí preparamos todo lo necesario para la prueba. Definimos el valor esperado que la función `getUser` debe devolver.
        // En este caso, creamos un objeto `userTest` con un `uid` y un `username` específicos.
        const userTest =  {
            uid: 'ABC123',
            username: 'El_Papi1502' 
        };

        // 2. A- ACT: Estímulo
        // Ejecutamos la función `getUser` para obtener el usuario. Esta es la acción que queremos probar.
        const user = getUser();

        // 3. A- ASSERT: Observación
        // Verificamos que el valor obtenido de la función `getUser` coincida con el valor esperado.
        // Usamos `expect` junto con el matcher `.toEqual` para comparar el objeto `user` con `userTest`.
        // `.toEqual` se utiliza para verificar la igualdad estructural entre objetos o arrays.
        expect(user).toEqual(userTest);

    });

    test('getUsuarioActivo debe recibir un nombre y devolver un objeto con los datos del usuario', () => {
        // 1. A- ARRANGE: Inicialización
        // Aquí preparamos los datos necesarios para la prueba.
        // Definimos el nombre del usuario y el objeto esperado que la función `getUsuarioActivo` debe devolver.
        const nombre = "daiana";
        const usuarioActivoTest = {
            uid: 'ABC567',
            username: nombre
        };
    
        // 2. A- ACT: Estímulo
        // Ejecutamos la función `getUsuarioActivo` con el argumento `nombre` para obtener el usuario activo.
        // Esta es la acción que estamos probando.
        const usuarioActivo = getUsuarioActivo(nombre);
    
        // 3. A- ASSERT: Observación
        // Comparamos el resultado obtenido con el valor esperado.
        // Usamos `expect` y el matcher `.toEqual` para verificar que el objeto `usuarioActivo` devuelto por la función
        // coincide estructuralmente con `usuarioActivoTest`.
        expect(usuarioActivo).toEqual(usuarioActivoTest);
    });

});
