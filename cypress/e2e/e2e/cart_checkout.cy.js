describe("Flujo compra como invitado", ()=>{
    it('compra exitosa como invitado', () => {
        cy.visit('http://opencart.abstracta.us/')

        cy.contains('Canon EOS 5D').click();
        cy.get('select').select('15');
        cy.get('#button-cart').click();
        
    });
})