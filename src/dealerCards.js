export function dealerCards (dealer, deck) {
  dealer.hand = []
  for (let i = 0; i < 5; i++) {
    dealer.hand.push(deck[0])
    deck.shift()
    dealer.value = dealer.hand.reduce((value, playingCard) => value + playingCard, 0)
    if (dealer.value === 21 || dealer.value >= dealer.stopValue) {
      break
    }
  }
}
