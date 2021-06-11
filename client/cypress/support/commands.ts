import '@testing-library/cypress/add-commands';
Cypress.Commands.add('google', () => cy.visit('https://google.com'))

Cypress.Commands.add('shouldRenderBanner', () => {
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: /warhammer skulls/i })
    cy.findByRole('link', { name: /go to giveaway/i })
    cy.get('.slick-dots > :nth-child(2) > button').click()
    cy.wait(500)
    cy.findByRole('heading', { name: /grim dawn definitive edition/i })
    cy.get('.slick-dots > :nth-child(3) > button').click()
    cy.wait(500)
    cy.findByRole('heading', { name: /cyberpunk 2077/i })
    cy.findByRole('link', { name: /buy now/i })
  })
})

Cypress.Commands.add('shouldRenderShowcase', ({ name, hightlight = false }) => {
  cy.get(`[data-cy="${name}"]`).within(() => {
    cy.findByRole('heading', { name }).should('exist')

    cy.get(`[data-cy="highlight"]`).should(hightlight ? 'exist' : 'not.exist')

    if (hightlight) {
      cy.get(`[data-cy="highlight"]`).within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
      cy.get(`[data-cy="game-card"]`).should('have.length.gt', 0)
    }
  })
})