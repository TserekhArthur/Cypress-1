/// <reference types="cypress" />

describe('Should be ', () => {
    let user;

    before('able to visit site', () => {
        cy.visit('http://localhost:1667/#/');
        
        cy.task('able to sign up with faker').then((object) => {
            user = object;
        });
    });
    
    it('able to register a new user after filling fields', () => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type(user.username);
        cy.get(':nth-child(2) > .form-control').type(user.email);
        cy.get(':nth-child(3) > .form-control').type(user.password);
        cy.get('.btn').click();
    });
        
    it('able to observe a message about successful registration and click on it', () => {
        cy.get('.swal-modal').should('contain', 'Your registration was successful!');
        cy.get('.swal-button').click();
    });

    it('redirected to main page and logged in', () => {
        cy.get(':nth-child(4) > .nav-link').should('contain', user.username);
    });   
});