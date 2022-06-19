describe('Cypress.io test', () => {
  it('Visits the main page', () => {
    cy.visit('/')
    cy.title().should('eq', 'Azure Cloud Consultant / DevOps Engineer / Christian BELLET')
    cy.contains('Christian BELLET')
  })
})
