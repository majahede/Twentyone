import { reshuffle } from './reshuffle.js'
import { valueOfAce } from './valueOfAce.js'
import { EmptyDeckError } from './emptyDeckError.js'

/**
 * Deals card to player or dealer until they reach their max value.
 *
 * @param {object} player - The current player.
 * @param {number} numOfCards -  The maximum number of cards to deal.
 * @param {deck []} deck - The deck of cards to deal from.
 * @param {discardPile []} discardPile - The discard pile.
 * @throws {EmptyDeckError} The deck is empty.
 */
export function dealCards (player, numOfCards, deck, discardPile) {
  for (let i = 0; i < numOfCards; i++) {
    reshuffle(deck, discardPile) // shuffle deck if empty with discard pile.
    if (deck.length === 0) {
      throw new EmptyDeckError('Deck is empty.')
    }
    player.hand.push(deck[0])
    deck.shift()
    player.value = player.hand.reduce((value, playingCard) => value + playingCard, 0)
    valueOfAce(player)
    if (player.value === 21 || player.value >= player.maxValue) {
      break
    }
  }
}
