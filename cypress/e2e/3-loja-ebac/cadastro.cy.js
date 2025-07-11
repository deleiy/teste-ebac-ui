/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
  
    it ('Deve completar o cadastro com sucesso - Usando variaveis', () => {
       var nome = faker.person.firstName()
       var email = faker.internet.email(nome)
       var sobrenome = faker.person.lastName()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('123456@')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.wait(5000)
        cy.get('.woocommerce-Button').click()
        



    });
    
});