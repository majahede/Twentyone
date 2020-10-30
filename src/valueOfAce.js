
export function valueOfAce (player) {
  if (player.hand.find(element => element.rank === 1)) { // if ace in hand
    if (player.hand.reduce((value, playingCard) => value + playingCard, 0) < 9) {
      player.value = player.value + 13
    }
  }
}
