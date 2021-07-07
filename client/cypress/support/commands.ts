import '@testing-library/cypress/add-commands'
import 'cypress-plugin-stripe-elements'

import { User } from './generate'
Cypress.Commands.add('getByDataCy', (selector, ...args) => {
  return cy.get(`[data-cy="${selector}"]`, ...args)
})

Cypress.Commands.add('shouldRenderBanner', () => {
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: /warhammer skulls/i })
    cy.findByRole('link', { name: /go to giveaway/i })
    cy.get('.slick-dots > :nth-child(2) > button').click()
    cy.findByRole('heading', { name: /grim dawn definitive edition/i })
    cy.get('.slick-dots > :nth-child(3) > button').click()
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

Cypress.Commands.add('getFields', (fields) => {
  fields.map(({ label }) => {
    cy.findByText(label).should('exist')
  })
})

Cypress.Commands.add('shouldBeGreaterThan', (value) => {
  cy.findByText(/^\$\d+(\.\d{1,2})?/)
    .invoke('text')
    .then((e) => e.replace('$', ''))
    .then(parseFloat)
    .should('be.gt', value)
})

Cypress.Commands.add('shouldBeLessThan', (value) => {
  cy.findByText(/^\$\d+(\.\d{1,2})?/)
    .invoke('text')
    .then((e) => e.replace('$', ''))
    .then(parseFloat)
    .should('be.lt', value)
})

Cypress.Commands.add('signUp', (user: User) => {
  cy.findByPlaceholderText(/username/i).type(user.username)
  cy.findByPlaceholderText(/email/i).type(user.email)
  cy.findByPlaceholderText(/^password/i).type(user.password)
  cy.findByPlaceholderText(/confirm password/i).type(user.password)
  cy.findByRole('button', { name: /sign up now/i }).click()
})

Cypress.Commands.add(
  'signIn',
  (email = 'e2e@wongames.com', password = '123456') => {
    cy.findAllByPlaceholderText(/email/i).type(email)
    cy.findAllByPlaceholderText(/password/i).type(password)
    cy.findByRole('button', { name: /sign in now/i }).click()
  }
)

Cypress.Commands.add('addToCartByIndex', (index) => {
  cy.getByDataCy('game-card')
    .eq(index)
    .within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
    })
})

Cypress.Commands.add('removeFromCartByIndex', (index) => {
  cy.getByDataCy('game-card')
    .eq(index)
    .within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
    })
})

Cypress.Commands.add('addToWishListByIndex', (index) => {
  cy.getByDataCy('game-card')
    .eq(index)
    .within(() => {
      cy.findByLabelText(/add to wishlist/i).click()
    })
})

Cypress.Commands.add('removeFromWishListByIndex', (index) => {
  cy.getByDataCy('game-card')
    .eq(index)
    .within(() => {
      cy.findByLabelText(/remove from wishlist/i).click()
    })
})
