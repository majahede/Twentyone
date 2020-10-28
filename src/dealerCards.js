export function dealerCards (dealer, deck) {
  dealer.hand = deck.splice(0, 1)
  for (let i = 0; i < 4; i++) {
    dealer.hand.push(deck[0])
    deck.shift()
    dealer.value = dealer.hand.reduce((value, playingCard) => value + playingCard, 0)
    if (dealer.value === 21 || dealer.value > dealer.stopValue) {
      break
    }
  }
}
