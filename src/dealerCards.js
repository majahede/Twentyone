import { reshuffle } from './reshuffle.js'
import { valueOfAce } from './valueOfAce.js'

export function dealerCards (dealer, deck, discardPile) {
  dealer.hand = []
  for (let i = 0; i < 5; i++) {
    reshuffle(deck, discardPile) // shuffle deck if empty with discardpile
    dealer.hand.push(deck[0])
    deck.shift()
    dealer.value = dealer.hand.reduce((value, playingCard) => value + playingCard, 0)
    valueOfAce(dealer)
    if (dealer.value === 21 || dealer.value >= dealer.stopValue) {
      break
    }
  }
}
