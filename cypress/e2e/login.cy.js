describe('Login', () => {
  it('successfully logs in', () => {

    cy.guilogin()

    cy.contains('a', 'Create a new note').should('be.visible')
  })
})