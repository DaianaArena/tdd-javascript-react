

describe('Pruebas en el archivo demo.test.js', () => {
    
    // La fx test recibe dos parametros, el nombre del test y una fx flecha
    test( 'debe ser true', () => {
    
        // 1. A- ARRANGE : inicialización
        const isActive = false;
    
        // 2. A-ACT : estímulo
        if (!isActive){
            throw new Error('la variable es false')
        }
    
        // 3. A- ASSERT : Observar el comportamiento
        //expect( mensaje ).toBe( mensaje2 ); // ===
    
    })
    

});


