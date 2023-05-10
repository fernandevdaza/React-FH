describe('Pruebas en <DemoComponent>',  () => {
    test('Esta prueba no debe de fallar', () => {
        //Arrange
        const message1 = 'Hola Mundo';
        //Act
        const message2 = message1.trim()
        //Assert
        expect(message1).toBe(message2);
    })
});
