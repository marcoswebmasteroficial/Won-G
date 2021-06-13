import '@testing-library/cypress/add-commands';
Cypress.Commands.add('getByDataCy', (selector, ...args) => {
  return cy.get(`[data-cy="${selector}"]`, ...args)
})

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
  cy.getByDataCy(name).within(() => {
    cy.findByRole('heading', { name }).should('exist')
    cy.getByDataCy('highlight').should(hightlight ? 'exist' : 'not.exist')
    if (hightlight) {
      cy.getByDataCy('highlight').within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
      cy.getByDataCy('game-card').should('have.length.gt', 0)
    }
  })
})