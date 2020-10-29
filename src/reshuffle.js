import { Deck } from './Deck.js'

export function reshuffle (deck, discardPile) {
  if (deck.length <= 1) {
    for (let i = 0; i < discardPile.length; i++) {
      deck.push(discardPile[i])
    }
    Deck.shuffle(deck)
    discardPile.length = 0
  }
}