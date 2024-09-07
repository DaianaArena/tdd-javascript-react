# Aprendiendo Jest en el Frontend

Este repositorio está dedicado a aprender a usar **Jest** para realizar pruebas en aplicaciones frontend, con un enfoque en aplicaciones **React**. Los ejemplos del repositorio están basados en una aplicación de contador (**counter app**) desarrollada en React.

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

 ´´´
npm test
´´´

### Next.js
Para usar Jest en un proyecto Next.js, sigue estos pasos:

1. Instala Jest y las dependencias necesarias:
 ´´´
npm install --save-dev jest babel-jest @testing-library/react @testing-library/jest-dom

´´´
2. Crea un archivo jest.config.js en la raíz del proyecto:

 ´´´
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);


´´´

3.Crea un archivo jest.setup.js:
´´´
import '@testing-library/jest-dom';

´´´

4. Añade un script en package.json para correr las pruebas:
´´´
{
  "scripts": {
    "test": "jest"
  }
}


´´´

5. Ejecuta las pruebas:
´´´
npm test


´´´
### Vite
Vite no incluye Jest por defecto, por lo que debes configurarlo manualmente. Aquí están los pasos:

1. Instala las dependencias necesarias:
 ´´´
npm install --save-dev jest babel-jest @testing-library/react @testing-library/jest-dom @babel/preset-env @babel/preset-react


´´´

2. Crea un archivo babel.config.js:
 ´´´
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};


´´´

3.  Crea el archivo jest.config.js:
 ´´´
 module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};


´´´
4.  Crea jest.setup.js:
 ´´´
 import '@testing-library/jest-dom';


´´´

5.  Añade el script de pruebas en package.json:
 ´´´
 
{
  "scripts": {
    "test": "jest"
  }
}


´´´
6.  Ejecuta las pruebas:
 ´´´
 npm test


´´´
