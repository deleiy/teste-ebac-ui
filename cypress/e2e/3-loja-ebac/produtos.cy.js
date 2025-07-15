/// <reference types="cypress"/>

describe('Funcionalidade: Produtos ', () => {
     beforeEach(() => {
    cy.visit('produtos')
    });

    it('Deve selecinar um produto da lista ', () => {
    cy.get('.products > .row')

         .contains('Argus All-Weather Tank')

         .click()
    cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });


});