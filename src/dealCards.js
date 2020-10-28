
export function dealCards (player, deck) {
  for (let i = 0; i < 4; i++) {
    player.hand.push(deck[0])
    deck.shift()
    player.value = player.hand.reduce((value, playingCard) => value + playingCard, 0)
    if (player.value === 21 || player.value > player.stopValue()) {
      break
    }
  }
}

/* export function dealCards (player, deck) {
  let hand = []
  let value = 0
  for (let i = 1; i <= 5; i++) {
    hand = deck.splice(0, i)
    value = hand.reduce((value, playingCard) => value + playingCard, 0)
    if (value > player.stopValue()) {
      break
    } else {
      hand.forEach(element => deck.unshift(element))
      continue
    }
  }
  console.log(`Player : ${hand.join(' ')} (${value})`)
}
 */
