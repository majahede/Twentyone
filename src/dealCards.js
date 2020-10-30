import { reshuffle } from './reshuffle.js'
import { valueOfAce } from './valueOfAce.js'

export function dealCards (player, deck, discardPile) {
  for (let i = 0; i < 4; i++) {
    reshuffle(deck, discardPile) // shuffle deck if empty with discardpile
    if (deck.length === 0) {
      throw new Error('Deck is empty.')
    }
    player.hand.push(deck[0])
    deck.shift()
    player.value = player.hand.reduce((value, playingCard) => value + playingCard, 0)
    valueOfAce(player)
    if (player.value === 21 || player.value >= player.stopValue()) {
      break
    }
  }
}
