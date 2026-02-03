import { isTypedArray } from "lodash";

const baseUrl = 'https://petstore.swagger.io/v2';

describe('PetStore - API Testing', () => {
    const user = {
        id: 110,
        username: "test_user",
        firstName: "test",
        lastName: "user",
        email: "test@test.com",
        password: "12345",
        phone: "99999999",
        userStatus: 0
    };

    //crear usuario
    it('Crear usuario', () => {
        cy.request('POST', `${baseUrl}/user`, user).its('status').should('eq', 200);
    });
    //buscar usuario
    it('buscar usuario', () => {
        cy.request(`${baseUrl}/user/${user.username}`).its('status').should('eq', 200);
    });
    //Actualizar usuario
    it('Actualizar usuario', () => {
        const user_actualizado = {
            id: 110,
            username: "test_user",
            firstName: "testActualizado",
            lastName: "user",
            email: "testactualizado@test.com",
            password: "12345",
            phone: "99999999",
            userStatus: 0
        };
        user.firstName = "nombre_actualizado";
        user.email = "correoactualizado@test.com";
        cy.request('PUT', `${baseUrl}/user/${user.username}`, user).then(response => {
            expect(response.status).to.eq(200);
        })
    })
    //buscar usuario
    it('buscar usuario actualizado', () => {
        cy.request(`${baseUrl}/user/${user.username}`).then(response => {
            console.log(response.body.firstName)
            expect(response.body.firstName).to.eq("nombre_actualizado")
            expect(response.body.email).to.eq("correoactualizado@test.com")
        });
    });

    //borrar usuario
    it('Borrar usuario', ()=>{
        cy.request('DELETE',`${baseUrl}/user/${user.username}`).its('status').should('eq', 200);
    })
})