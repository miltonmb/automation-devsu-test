describe("Flujo compra como invitado", () => {
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

        //ver el carrito y comprar como guest
        cy.contains('Shopping Cart').click();
        cy.contains('Checkout').click();
        cy.origin('https://opencart.abstracta.us', () => {
            cy.get('input[value="guest"]').check();
            cy.get('#button-account').click();
            cy.get('#input-payment-firstname').type('Milton');
            cy.get('#input-payment-lastname').type('Martinez');
            cy.get('#input-payment-email').type('test@test.com');
            cy.get('#input-payment-telephone').type('33159971');
            cy.get('#input-payment-address-1').type('Residencial de prueba 1234');
            cy.get('#input-payment-city').type('Tegucigalpa');
            cy.get('#input-payment-postcode').type('11101');
            cy.get('#input-payment-country').select('95');
            cy.get('#input-payment-zone').select('1399');
            cy.get('#button-guest').click();
            cy.get('#button-shipping-method').click();
            cy.get('input[value="cod"]').check();
            cy.get('input[name="agree"]').check();
            cy.get('#button-payment-method').click();
            cy.get('#button-confirm').click();
        });
        cy.contains('Your order has been placed!', { timeout: 10000 }).should('be.visible');



    });
});

