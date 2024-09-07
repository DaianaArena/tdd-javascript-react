# TDD (Test-Driven Development)

El Desarrollo Guiado por Pruebas, es una metodología de desarrollo de software que se basa en escribir pruebas antes de escribir el código que debe pasar esas pruebas. La idea central de TDD es que las pruebas definan el comportamiento esperado del código antes de que se escriba.

## Cómo Funciona TDD
El proceso de TDD se puede dividir en los siguientes pasos:

1. Escribir una Prueba: Escribe una prueba que defina una pequeña parte de la funcionalidad que deseas implementar. La prueba debe fallar inicialmente porque el código que la hace pasar aún no existe.

2. Escribir el Código: Escribe el código mínimo necesario para hacer que la prueba pase. El código no debe ser más de lo necesario; el objetivo es que sea suficiente para cumplir con la prueba.

3. Refactorizar: Una vez que la prueba pasa, refactoriza el código para mejorar su estructura o eficiencia sin cambiar su comportamiento. Asegúrate de que las pruebas sigan pasando después de la refactorización.

4. Repetir: Repite este ciclo de escribir pruebas, implementar el código, y refactorizar hasta que toda la funcionalidad deseada esté implementada y todas las pruebas pasen.

## Beneficios de TDD
- Código de Mayor Calidad: TDD fomenta la escritura de código más limpio y modular, ya que cada unidad de código se escribe para pasar pruebas específicas.
- Menos Bugs: Las pruebas automatizadas ayudan a detectar errores antes en el ciclo de desarrollo, lo que reduce el número de bugs en la etapa de producción.
- Diseño Mejorado: TDD puede conducir a un diseño de código más estructurado y bien pensado, ya que el desarrollo se basa en requisitos claros definidos por las pruebas.
- Documentación en Pruebas: Las pruebas actúan como documentación viva del sistema, mostrando claramente qué debería hacer el código y cómo debería comportarse.

## Ciclo de TDD
El ciclo de TDD a menudo se representa con el acrónimo "Red, Green, Refactor":

- Red: Escribe una prueba que falla (roja).
- Green: Escribe el código mínimo necesario para hacer que la prueba pase (verde).
- Refactor: Mejora el código mientras mantienes las pruebas verdes (funcionando).

## Ejemplo de TDD en JavaScript
Supongamos que quieres desarrollar una función que sume dos números. El proceso TDD sería:

1. Escribir la prueba:

```javascript
// sum.test.js
const sum = require('./sum');

test('suma 1 + 2 para igualar 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

2. Escribir el código mínimo:

```javascript
// sum.js
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

3. Refactorizar (en este caso, el código ya es bastante simple, pero podrías mejorar la estructura o añadir más funciones si fuera necesario).

Con TDD, cada pieza del código está respaldada por una prueba, lo que ayuda a garantizar que el código sea correcto y funcione como se espera.

## Aprendiendo Jest en el Frontend

Este repositorio está dedicado a aprender a usar **Jest** para realizar pruebas en aplicaciones frontend, con un enfoque en aplicaciones **React**. Los ejemplos del repositorio están basados en una aplicación de contador (**counter app**) desarrollada con  ´create-react-app´ .

## ¿Qué es un test?

Un test (prueba) es una validación automatizada que nos permite asegurarnos de que nuestro código funcione según lo esperado. En el contexto de desarrollo frontend, escribir tests es fundamental para:

- Prevenir errores y regresiones.
- Asegurarse de que las funcionalidades críticas funcionen correctamente.
- Tener confianza al refactorizar o agregar nuevas características.
  
## Tipos de Pruebas

### 1. Pruebas Unitarias

Las **pruebas unitarias** son aquellas que prueban una unidad pequeña y aislada de código, como una función o un componente en particular. El objetivo es asegurarse de que esa unidad funcione correctamente de manera independiente.

- **Ejemplo**: Probar que un componente de contador incremente correctamente su valor cuando se hace clic en un botón.

### 2. Pruebas de Integración

Las **pruebas de integración** verifican que diferentes partes de la aplicación funcionen correctamente cuando se integran entre sí. En lugar de probar unidades aisladas, aquí se comprueba que los módulos trabajen en conjunto.

- **Ejemplo**: Probar que un componente padre y sus componentes hijos se comuniquen y funcionen correctamente cuando se integran.

## Metodología AAA (Arrange, Act, Assert)

La metodología **AAA** es una forma estructurada de escribir tests. Se divide en tres fases:

1. **Arrange**: Preparas todos los datos y condiciones necesarios para ejecutar la prueba.
2. **Act**: Ejecutas la funcionalidad o el código que deseas probar.
3. **Assert**: Verificas que el resultado sea el esperado.
 
## Uso de funciones propias de Jest:

En la documentación oficial, encontraremos varias funciones que se utilizan a lo largo de este repo: 

1. [`test`](https://jestjs.io/docs/api#testname-fn): Función utilizada para definir una prueba.

2. [`describe`](https://jestjs.io/docs/api#describename-fn): Agrupa varias pruebas relacionadas.

3. [`it`](https://jestjs.io/docs/api#itname-fn): Alias de `test`, utilizado para definir una prueba.

4. [`expect`](https://jestjs.io/docs/expect): Función principal para hacer afirmaciones sobre el resultado de una prueba.
    - [`toBe(value)`](https://jestjs.io/docs/expect#tobevalue): Verifica que el valor esperado sea igual al valor recibido.

    - [`not.toBe(value)`](https://jestjs.io/docs/expect#tonotbevalue): Verifica que el valor esperado no sea igual al valor recibido.

    - [`toBeNull()`](https://jestjs.io/docs/expect#tobenull): Verifica que el valor sea `null`.

    - [`toBeTruthy()`](https://jestjs.io/docs/expect#tobetruthy): Verifica que el valor sea considerado "truthy" (verdadero en un contexto booleano).

    - [`toBeFalsy()`](https://jestjs.io/docs/expect#tobefalsy): Verifica que el valor sea considerado "falsy" (falso en un contexto booleano).

    - [`toBeGreaterThan(number)`](https://jestjs.io/docs/expect#tobegreaterthannumber): Verifica que el valor sea mayor que el número dado.

    - [`toBeLessThan(number)`](https://jestjs.io/docs/expect#tobelessthannumber): Verifica que el valor sea menor que el número dado.

    - [`toEqual(value)`](https://jestjs.io/docs/expect#toequalvalue): Verifica que el valor esperado sea igual al valor recibido, incluyendo objetos y arrays.

    - [`toContain(item)`](https://jestjs.io/docs/expect#tocontainitem): Verifica que un array o un iterable contenga un elemento específico.

    - [`toHaveLength(length)`](https://jestjs.io/docs/expect#tohavelengthlength): Verifica que un objeto (como un array o una cadena) tenga una longitud específica.


5. [`beforeEach`](https://jestjs.io/docs/api#beforeeachfn-timeout): Ejecuta una función antes de cada prueba.

6. [`afterEach`](https://jestjs.io/docs/api#aftereachfn-timeout): Ejecuta una función después de cada prueba.

7. [`beforeAll`](https://jestjs.io/docs/api#beforeallfn-timeout): Ejecuta una función antes de todas las pruebas en un bloque `describe`.

8. [`afterAll`](https://jestjs.io/docs/api#afterallfn-timeout): Ejecuta una función después de todas las pruebas en un bloque `describe`.

9. [`mock`](https://jestjs.io/docs/api#jestmockmodulename-fn): Crea una versión simulada (mock) de un módulo.

10. [`spyOn`](https://jestjs.io/docs/api#jestspyonobject-methodname): Espía en un método de un objeto para rastrear llamadas y modificar su comportamiento.




### Ejemplo en un test de contador:

```javascript
test('incrementa el contador cuando se hace clic en el botón', () => {
  // Arrange
  render(<Counter />);
  
  const button = screen.getByText('Incrementar');
  const count = screen.getByText('0');
  
  // Act
  fireEvent.click(button);
  
  // Assert
  expect(count).toHaveTextContent('1');
});
```

## Instalación de Jest en Diferentes Entornos

### Create React App
En Create React App, Jest viene preconfigurado de manera predeterminada. No necesitas instalarlo ni configurarlo por separado. Simplemente escribe tus tests en archivos .test.js o .spec.js y ejecuta:

```
npm test
```

### Next.js
Para usar Jest en un proyecto Next.js, sigue estos pasos:

1. Instala Jest y las dependencias necesarias:
```
npm install --save-dev jest babel-jest @testing-library/react @testing-library/jest-dom

```
2. Crea un archivo jest.config.js en la raíz del proyecto:

```
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);


```

3.Crea un archivo jest.setup.js:
```
import '@testing-library/jest-dom';

```

4. Añade un script en package.json para correr las pruebas:
```
{
  "scripts": {
    "test": "jest"
  }
}


```

5. Ejecuta las pruebas:
```
npm test


```
### Vite
Vite no incluye Jest por defecto, por lo que debes configurarlo manualmente. Aquí están los pasos:

1. Instala las dependencias necesarias:
 ```
npm install --save-dev jest babel-jest @testing-library/react @testing-library/jest-dom @babel/preset-env @babel/preset-react


```

2. Crea un archivo babel.config.js:
 ```
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};


```

3.  Crea el archivo jest.config.js:
 ```
 module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};


```
4.  Crea jest.setup.js:
 ```
 import '@testing-library/jest-dom';


```

5.  Añade el script de pruebas en package.json:
 ```
 
{
  "scripts": {
    "test": "jest"
  }
}


```
6.  Ejecuta las pruebas:
 ```
 npm test


```
