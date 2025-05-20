describe('MO introduction', () => {
  it('MO text exist', () => {
    cy.visit('http://localhost:3003')
    cy.get('[data-test="MO-header"]').should('exist')
  })

})