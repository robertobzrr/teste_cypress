/// <reference types="cypress" />

describe('Capturar Elementos', () => {
    it('Inserir um Treinador QUALQUER', () => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/')
        cy.get('[data-cy="input-username"]').type('Ash')
        cy.get('[data-cy="input-password"]').type('123456')
        cy.get('[data-cy="input-pokeinit"]').type('Bubasauro')
        cy.get('[data-cy="botao-login"]').click()
        cy.get('#mensagem-feedback').should('have.text','Login de Ash TREINADOR QUALQUER efetuado com sucesso!')
    });


    it('Inserir um Treinador CLASSICO', () => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/')
        cy.get('[data-cy="input-username"]').type('Ash K');
        cy.get('[data-cy="input-password"]').type('123456');
        cy.get('[data-cy="input-pokeinit"]').type('Pikachu');
        cy.get('[data-cy="botao-login"]').click();
        cy.get('#mensagem-feedback').should('have.text', 'Login de Ash K TREINADOR CLÁSSICO efetuado com sucesso!');
    });


});