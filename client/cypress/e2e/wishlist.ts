/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add and remove games from wishlist', () => {
    // acessa a página não logado
    cy.visit('profile/wishlist')

    // redireciona e faz signIn
    cy.signIn()

    // verifica se a wishlist tá vazia
    cy.findByText(/your wishlist is empty/i).should('exist')

    // pegar um jogo e adicionar

    cy.visit('/')
    cy.wait(500)

    cy.addToWishListByIndex(0)
    cy.addToWishListByIndex(1)

    cy.visit('profile/wishlist')
    // verificar se o jogo está lá
    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 2)
      cy.wait(500)

      cy.removeFromWishListByIndex(0)
      cy.removeFromWishListByIndex(0)
    })

    // verifica se a wishlist tá vazia
    cy.findByText(/your wishlist is empty/i).should('exist')
  })
})
