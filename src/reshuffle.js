import { Deck } from './Deck.js'

/**
 * Shuffles deck with discard pile if only one card left in deck.
 *
 * @param {deck []} deck - The deck of cards to deal from.
 * @param {discardPile []} discardPile - The discard pile.
 */
export function reshuffle (deck, discardPile) {
  if (deck.length <= 1) {
    for (let i = 0; i < discardPile.length; i++) {
      deck.push(discardPile[i])
    }
    Deck.shuffle(deck)
    discardPile.length = 0
  }
}
