describe('template spec', () => {
    it('passes', () => {
      cy.visit('/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('#login-button').click();
    }) //primeiro teste com cypress
  })