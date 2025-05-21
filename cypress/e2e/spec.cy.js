describe('MO introduction', () => {
  it('MO text exist', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="MO-header"]').should('exist')
  })
  it('Shows full details of developer profile', () => {
      cy.visit('http://localhost:3000')
      cy.get('[data-test="About-button"]').click()
      })

})