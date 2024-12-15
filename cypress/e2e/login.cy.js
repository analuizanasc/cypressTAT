/// <reference path="../support/commands.d.ts" />
//  // busca como referencia o arquivo - tá definido a documentação dos comandos customizados

describe('Login', () => {
  it('successfully logs in', () => {

    cy.guiLogin()

    cy.contains('a', 'Create a new note').should('be.visible')
  })
})