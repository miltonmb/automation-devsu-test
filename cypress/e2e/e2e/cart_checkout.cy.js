describe("Flujo compra como invitado", ()=>{
    it('compra exitosa como invitado', () => {
        cy.visit('http://opencart.abstracta.us/')

        //Agregar primer objeto al carrito        
        cy.contains('Canon EOS 5D').click();
        cy.get('select').select('15');
        cy.get('#button-cart').click();

        cy.visit('http://opencart.abstracta.us/');

        //agregar segundo objeto al carrito
        cy.contains('Phones & PDAs').click();
        cy.contains('HTC Touch HD').click();
        cy.get('#button-cart').click();
        
    });
})