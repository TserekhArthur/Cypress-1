/// <reference types="cypress" />

describe('User should be', () => {
    before('able to visit site', () => {
        cy.visit('http://localhost:1667/#/');
    });
    
    it('able to log in after filling valid email, pass fields and clicking [Sign In]', () => {
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type('TestEmail@gmail.com');
        cy.get(':nth-child(2) > .form-control').type('P@ssword1');
        cy.get('.btn').click();
    });

    it('redirected to main page and logged in', () => {
        cy.get(':nth-child(4) > .nav-link').should('contain', 'TestUser123');
    });   
});