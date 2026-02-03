import { isTypedArray } from "lodash";

const baseUrl = 'https://petstore.swagger.io/v2';

describe('PetStore - API Testing', () => {
    const user = {
        id: 0,
        username: "test_user",
        firstName: "test",
        lastName: "user",
        email: "test@test.com",
        password: "12345",
        phone: "99999999",
        userStatus: 0
    };

    //crear usuario
    it('Crear usuario', ()=>{
        cy.request('POST', `${baseUrl}/user`, user).its('status').should('eq',200);
    })
    //buscar usuario
    it('buscar usuario', ()=>{
        cy.request(`${baseUrl}/user/${user.username}`).its('status').should('eq',200);
    })
    //Actualizar usuario
    it('Actualizar usuario', ()=>{
        user.firstName = "nombre_actualizado";
        user.email = "correoactualizado@test.com";
        cy.request('PUT', `${baseUrl}/user/${user.username}`, user).its('status').should('eq',200);
    })

    
})