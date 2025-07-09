/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')
describe('funcionalidade: login', () => {

it('Deve fazer login com sucesso', () => {      
   cy.visit('minha-conta')
   cy.get('#username').type('vander@teste.com.br ')
   cy.get('#password').type('123456')
   cy.get('.woocommerce-form > .button').click()
   cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, vander (não é vander? Sair)')



} )

it('Deve fazer login com sucesso - Usando massa de dados ', () => {
   cy.visit('minha-conta')
   cy.get('#username').type(perfil.usuario)
   cy.get('#password').type(perfil.senha)
   cy.get('.woocommerce-form > .button').click()
   cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, vander (não é vander? Sair)')

});

it.only('Deve fazer login com sucesso - Usando ', () => {
   cy.fixture('perfil').then(dados => {
       cy.visit('minha-conta')
       cy.get('#username').type(dados.usuario,{log: false})
       cy.get('#password').type(dados.senha,{ log: false})
       cy.get('.woocommerce-form > .button').click()
       cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, vander (não é vander? Sair)')


   })

});





})