import { faker } from '@faker-js/faker/locale/en'

describe('CRUD', () => {

  it('CRUDs a note', () => {
    const noteDescription = faker.lorem.words(5) //type 5 lorem words
    let attachFile = false

    cy.intercept('GET','**/notes').as('getNotes')
    cy.intercept('GET','**/notes/**').as('getNote')

    /* cy.guiLogin()
    cy.contains(' Create a new note').click()
    const urlEsperada = '/notes/new'

    cy.url().should('include', urlEsperada) */

    //create
    cy.sessionLogin()
    cy.visit('/notes/new')
    cy.get('#content').type(noteDescription)
    cy.contains('button', 'Create').click()

    //read
    cy.wait('@getNotes')
    cy.contains('.list-group-item', noteDescription).should('be.visible').click()
    cy.wait('@getNote')

    const updatedNoteDescription = faker.lorem.words(4)

    //update
    cy.get('#content').as('contentField').clear()
    cy.get('@contentField').type(updatedNoteDescription)
    cy.contains('button','Save').click()
    cy.wait('@getNotes')

    cy.contains('.list-group-item', noteDescription).should('not.exist')
    cy.contains('.list-group-item', updatedNoteDescription).should('be.visible').click()
    cy.wait('@getNote')

    //delete
    cy.contains('button', 'Delete').click()
    cy.wait('@getNotes')

    cy.get('.list-group-item').its('length').should('be.at.least',1)
    cy.contains('.list-group-item', updatedNoteDescription).should('not.exist')
  })

})