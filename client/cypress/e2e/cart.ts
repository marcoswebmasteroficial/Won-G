/// <reference path="../support/index.d.ts" />

describe('Cart', () => {
  it('should add and remove items from cart', () => {
    cy.visit('/')

    //adiciona games no carinho
    cy.addToCartByIndex(0)
    cy.addToCartByIndex(1)
    cy.addToCartByIndex(2)

    //remove o primeiro game do carinho
    cy.removeFromCartByIndex(0)
    cy.removeFromCartByIndex(1)

    //clica no carinho e verificar se tem somente 1 item
    cy.findAllByLabelText(/cart items/i)
      .first()
      .should('have.text', 1)
      .click()

    //remove usando o card
    cy.getByDataCy('cart-list').within(() => {
      cy.findByText(/remove/i).click()
      cy.findByRole('heading', { name: /your cart is empty/i }).should('exist')
      //verificar se icone de quantidade nao existe
      cy.findAllByLabelText(/cart items/i).should('not.exist')
    })
  })
})
