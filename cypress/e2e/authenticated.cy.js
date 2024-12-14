// cypress/e2e/crud.cy.js

import { faker } from '@faker-js/faker/locale/en'

describe('Scenarios where authentication is a pre-condition', () => {

  beforeEach(() => {
    cy.intercept('GET', '**/notes').as('getNotes')
    cy.sessionLogin()
  })

  it('CRUDs a note', () => {
    const noteDescription = faker.lorem.words(4)

    cy.createNote(noteDescription)
    cy.wait('@getNotes')

    const updatedNoteDescription = faker.lorem.words(4)
    const attachFile = true

    cy.editNote(noteDescription, updatedNoteDescription, attachFile)
    cy.wait('@getNotes')

    cy.deleteNote(updatedNoteDescription)
    cy.wait('@getNotes')
  })

  it('successfully submits the settings form', () => {
    cy.intercept('POST', '**/prod/billing').as('paymentRequest')

    cy.fillSettingsFormAndSubmit()

    cy.wait('@getNotes')
    cy.wait('@paymentRequest').its('state').should('be.equal', 'Complete')//its - acess a specific property (state)
  })

  it('logs out',{ tags:'@desktop-and-tablet'}, () =>{
    cy.visit('/')
    cy.wait('@getNotes')
    //cy.wait(2000) // para simular erro
    /* if (Cypress.config('viewportWidth') < Cypress.env('viewportWidthBreakpoint')){
      cy.get('.navbar-toggle.collapsed').should('be.visible').click() 
    } */ // ocultando para teste de erro
    cy.contains('.nav a', 'Logout').click()
    cy.get('#email').should('be.visible')
  })
})
